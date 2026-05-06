import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CLI = path.join(ROOT, "scripts", "agent-control.mjs");
const MEMORY_TEST_DIR = path.join(ROOT, "memory", "test-agent-control");
const LOG_TEST_DIR = path.join(ROOT, "logs", "test-agent-control");
const DIST_TEST_DIR = path.join(ROOT, "dist", "test-agent-control");
const DIST_DIR = path.join(ROOT, "dist");

function runCli(args) {
  return spawnSync(process.execPath, [CLI, ...args], {
    cwd: ROOT,
    encoding: "utf8",
  });
}

function cleanup() {
  fs.rmSync(MEMORY_TEST_DIR, { recursive: true, force: true });
  fs.rmSync(LOG_TEST_DIR, { recursive: true, force: true });
  fs.rmSync(DIST_TEST_DIR, { recursive: true, force: true });
  if (fs.existsSync(DIST_DIR) && fs.readdirSync(DIST_DIR).length === 0) {
    fs.rmdirSync(DIST_DIR);
  }
}

test.afterEach(cleanup);

test("show-next reads the project memory template", () => {
  const result = runCli(["show-next", "--file", "templates/project-memory.md"]);

  assert.equal(result.status, 0, result.stderr);
  const report = JSON.parse(result.stdout);
  assert.equal(report.ok, true);
  assert.equal(report.file, "templates/project-memory.md");
  assert.match(report.nextBestMove, /highest-ROI/u);
  assert.match(report.proofPath, /Commands or checks/u);
});

test("preflight gates generated policies and memory quality", () => {
  const result = runCli(["preflight", "--file", "templates/project-memory.md"]);

  assert.equal(result.status, 0, result.stderr);
  const report = JSON.parse(result.stdout);
  assert.equal(report.ok, true);
  assert.equal(report.checks.length, 2);
  assert.equal(report.checks[0].name, "stop-lines-rendered");
  assert.equal(report.checks[1].name, "memory-audit");
});

test("adoption protocol is agent-first and non-interactive", () => {
  const result = runCli(["adoption-protocol"]);

  assert.equal(result.status, 0, result.stderr);
  const report = JSON.parse(result.stdout);
  assert.equal(report.ok, true);
  assert.match(report.rule, /host AGENTS\.md pointer/u);
  assert.match(report.commandShape, /--context/u);
  assert.match(report.hostAgentPointer, /agent-control\/memory\/project\.md/u);
  assert.ok(report.agentSteps.some((step) => step.includes("agent-control/")));
  assert.ok(report.agentSteps.some((step) => step.includes("host root AGENTS.md")));
  assert.ok(report.agentSteps.some((step) => step.includes("Ask the user one optional question")));
});

test("memory helpers initialize, reject no-op updates, update state, and protect overwrites", () => {
  const memoryPath = "memory/test-agent-control/project.md";
  const statePath = "memory/test-agent-control/state.json";

  assert.equal(
    runCli([
      "bootstrap",
      "--context",
      "Test memory",
      "--project-shape",
      "Small test project",
      "--current-truth",
      "Initialized in test",
      "--constraint",
      "Stay scoped",
      "--next",
      "Update memory with structured state and run tests",
      "--proof",
      "npm test",
      "--state-output",
      statePath,
      "--output",
      memoryPath,
    ]).status,
    0,
  );
  assert.ok(fs.existsSync(path.join(ROOT, statePath)));
  const capsule = JSON.parse(fs.readFileSync(path.join(ROOT, statePath), "utf8"));
  assert.equal(capsule.schemaVersion, 1);
  assert.equal(capsule.projectContext, "Test memory");
  assert.equal(capsule.nextMoveGrade, "strong");

  const overwrite = runCli(["bootstrap", "--context", "Overwrite", "--output", memoryPath, "--state-output", statePath, "--force", "false"]);
  assert.notEqual(overwrite.status, 0);
  assert.match(overwrite.stderr, /already exists/u);

  const noop = runCli(["update-memory", "--file", memoryPath]);
  assert.notEqual(noop.status, 0);
  assert.match(noop.stderr, /No memory updates requested/u);

  const update = runCli([
    "update-memory",
    "--file",
    memoryPath,
    "--decision",
    "Use node:test for CLI behavior",
    "--next",
    "Run check and sync state after CLI memory updates",
    "--proof",
    "npm run check",
    "--recent-change",
    "Added CLI tests",
  ]);
  assert.equal(update.status, 0, update.stderr);

  const showNext = runCli(["show-next", "--file", memoryPath]);
  assert.equal(showNext.status, 0, showNext.stderr);
  const report = JSON.parse(showNext.stdout);
  assert.equal(report.nextBestMove, "Run check and sync state after CLI memory updates");
  assert.equal(report.proofPath, "npm run check");
  assert.equal(report.grade, "strong");

  const state = runCli(["memory-state", "--file", memoryPath]);
  assert.equal(state.status, 0, state.stderr);
  const stateReport = JSON.parse(state.stdout);
  assert.equal(stateReport.kind, "project-memory");
  assert.equal(stateReport.schemaVersion, 2);
  assert.equal(stateReport.sections["Project Context"], "Test memory");
  assert.equal(stateReport.sections.Decisions, "- Use node:test for CLI behavior");
  assert.equal(stateReport.capsule.proofPath, "npm run check");

  const sync = runCli(["sync-state", "--file", memoryPath, "--output", statePath, "--force"]);
  assert.equal(sync.status, 0, sync.stderr);

  const score = runCli([
    "score-next",
    "--file",
    memoryPath,
    "--candidate",
    "Fix the memory sync command test and run npm test",
    "--candidate",
    "Redesign everything later",
  ]);
  assert.equal(score.status, 0, score.stderr);
  const scoreReport = JSON.parse(score.stdout);
  assert.equal(scoreReport.ranked.length, 2);
  assert.match(scoreReport.recommended.candidate, /Fix the memory sync/u);

  const audit = runCli(["audit-memory", "--file", memoryPath]);
  assert.equal(audit.status, 0, audit.stderr);
  assert.equal(JSON.parse(audit.stdout).ok, true);
});

test("memory audit catches weak next moves and compact-memory trims stale list sections", () => {
  const memoryPath = "memory/test-agent-control/bloat.md";
  assert.equal(
    runCli([
      "bootstrap",
      "--context",
      "Bloat test",
      "--project-shape",
      "Small CLI repo",
      "--current-truth",
      "Truth 1",
      "--constraint",
      "Stay small",
      "--next",
      "Maybe later",
      "--proof",
      "unknown",
      "--output",
      memoryPath,
      "--state-output",
      "memory/test-agent-control/bloat-state.json",
    ]).status,
    0,
  );

  for (let index = 2; index <= 10; index += 1) {
    const update = runCli(["update-memory", "--file", memoryPath, "--current-truth", `Truth ${index}`]);
    assert.equal(update.status, 0, update.stderr);
  }

  const weakAudit = runCli(["audit-memory", "--file", memoryPath]);
  assert.notEqual(weakAudit.status, 0);
  assert.match(weakAudit.stdout, /weak-proof/u);
  assert.match(weakAudit.stdout, /weak-next-move/u);

  const compact = runCli(["compact-memory", "--file", memoryPath, "--max-items", "3"]);
  assert.equal(compact.status, 0, compact.stderr);
  const text = fs.readFileSync(path.join(ROOT, memoryPath), "utf8");
  assert.match(text, /Truth 1/u);
  assert.match(text, /Truth 3/u);
  assert.doesNotMatch(text, /Truth 4/u);
});

test("write commands stay in their owned directories", () => {
  const badMemoryWrite = runCli(["bootstrap", "--context", "Bad write", "--output", "README.md"]);
  assert.notEqual(badMemoryWrite.status, 0);
  assert.match(badMemoryWrite.stderr, /Path must stay under memory/u);

  const badCycleWrite = runCli([
    "start-cycle",
    "--task",
    "Bad write",
    "--lane",
    "repo-boundary",
    "--why",
    "Guard write scope",
    "--proof",
    "npm test",
    "--rollback",
    "No write",
    "--stop-line",
    "Do not write README",
    "--output",
    "README.md",
  ]);
  assert.notEqual(badCycleWrite.status, 0);
  assert.match(badCycleWrite.stderr, /Path must stay under logs/u);

  const badLogScan = runCli(["analyze-logs", "--logs-dir", "."]);
  assert.notEqual(badLogScan.status, 0);
  assert.match(badLogScan.stderr, /Path must stay under logs/u);

  const badPack = runCli(["pack", "--output", "README.md"]);
  assert.notEqual(badPack.status, 0);
  assert.match(badPack.stderr, /Path must stay under dist/u);

  const badPreflight = runCli(["preflight", "--file", "../outside.md"]);
  assert.notEqual(badPreflight.status, 0);
  assert.match(badPreflight.stderr, /Path must stay inside the repo/u);
});

test("cycle helpers close canonical fields without confusing field labels inside content", () => {
  const cyclePath = "logs/test-agent-control/cycle.md";
  const start = runCli([
    "start-cycle",
    "--task",
    "Test cycle closing",
    "--lane",
    "repo-boundary",
    "--why",
    "User text can mention\nResult:\nwithout being the result field",
    "--proof",
    "npm test",
    "--rollback",
    "Delete test file",
    "--stop-line",
    "Test only",
    "--output",
    cyclePath,
  ]);
  assert.equal(start.status, 0, start.stderr);

  const close = runCli([
    "close-cycle",
    "--file",
    cyclePath,
    "--result",
    "Passed.",
    "--verification",
    "npm test",
    "--next",
    "Remove test files",
    "--files-touched",
    "Test cycle only",
    "--risks",
    "None",
  ]);
  assert.equal(close.status, 0, close.stderr);

  const cycleText = fs.readFileSync(path.join(ROOT, cyclePath), "utf8");
  assert.match(cycleText, /Why it won:\r?\nUser text can mention\r?\nResult:\r?\nwithout being the result field/u);
  assert.match(cycleText, /Verification run:\r?\nnpm test\r?\n\r?\nResult:\r?\nPassed\./u);
});

test("pack creates a minimal import profile and stop-lines render check passes", () => {
  const pack = runCli(["pack", "--output", "dist/test-agent-control"]);
  assert.equal(pack.status, 0, pack.stderr);
  const packReport = JSON.parse(pack.stdout);
  assert.equal(packReport.ok, true);
  assert.ok(packReport.files > 0);
  assert.ok(fs.existsSync(path.join(DIST_TEST_DIR, "package.json")));
  assert.ok(fs.existsSync(path.join(DIST_TEST_DIR, "scripts", "agent-control.mjs")));
  assert.ok(fs.existsSync(path.join(DIST_TEST_DIR, "scripts", "lib", "memory-core.mjs")));
  assert.ok(fs.existsSync(path.join(DIST_TEST_DIR, "templates", "project-memory.md")));
  assert.ok(!fs.existsSync(path.join(DIST_TEST_DIR, "examples")));

  const overwrite = runCli(["pack", "--output", "dist/test-agent-control", "--force", "false"]);
  assert.notEqual(overwrite.status, 0);
  assert.match(overwrite.stderr, /already exists/u);

  const renderCheck = runCli(["render-stop-lines", "--check"]);
  assert.equal(renderCheck.status, 0, renderCheck.stderr);
  assert.equal(JSON.parse(renderCheck.stdout).ok, true);
});
