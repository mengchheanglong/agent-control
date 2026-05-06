import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const PATHS = {
  agents: "AGENTS.md",
  manifest: "authority.manifest.json",
  readme: "README.md",
  implement: "implement.md",
  packageJson: "package.json",
  activeRunbook: "runbook/active.md",
  currentPriority: "runbook/current-priority.md",
  stopLines: "policies/stop-lines.md",
  stopLineCards: "policies/stop-line-cards.json",
  continuationRules: "policies/continuation-rules.md",
  loggingRules: "policies/logging-rules.md",
  logsReadme: "logs/README.md",
  memoryReadme: "memory/README.md",
  cycleTemplate: "templates/cycle-entry.md",
  loopTemplate: "templates/loop-run.md",
  handoffTemplate: "templates/handoff.md",
  projectMemoryTemplate: "templates/project-memory.md",
  cli: "scripts/agent-control.mjs",
  cliCore: "scripts/lib/agent-control-core.mjs",
  memoryCore: "scripts/lib/memory-core.mjs",
  reusableCheck: "scripts/check-reusable-install.mjs",
  cliTest: "tests/agent-control.test.mjs",
};

const REQUIRED_MEMORY_HEADINGS = [
  "# Project Memory",
  "## Project Context",
  "## Project Shape",
  "## Current Truth",
  "## Active Constraints",
  "## Decisions",
  "## Suggestions Inbox",
  "## Open Questions",
  "## Next Best Move",
  "## Proof Path",
  "## Recent Changes",
];

const REQUIRED_CYCLE_LINES = [
  "Cycle N",
  "Chosen task:",
  "Why it won:",
  "Affected layer:",
  "Owning lane:",
  "Mission usefulness:",
  "Proof path:",
  "Rollback path:",
  "Stop-line:",
  "Files touched:",
  "Verification run:",
  "Result:",
  "Next likely move:",
  "Risks / notes:",
];

function repoPath(relativePath) {
  return path.join(ROOT, relativePath);
}

function readText(relativePath) {
  const filePath = repoPath(relativePath);
  assert.ok(fs.existsSync(filePath), `Missing required file: ${relativePath}`);
  return fs.readFileSync(filePath, "utf8");
}

function readJson(relativePath) {
  return JSON.parse(readText(relativePath));
}

function assertContains(label, text, snippets) {
  for (const snippet of snippets) {
    assert.ok(text.includes(snippet), `${label} is missing: ${snippet}`);
  }
}

function assertNotContains(label, text, snippets) {
  for (const snippet of snippets) {
    assert.ok(!text.includes(snippet), `${label} must not contain: ${snippet}`);
  }
}

function assertLines(label, text, lines) {
  for (const line of lines) {
    assert.match(text, new RegExp(`^${escapeRegExp(line)}\\r?$`, "mu"), `${label} is missing line: ${line}`);
  }
}

function assertHeadings(label, text, headings) {
  assertLines(label, text, headings);
}

function assertArrayIncludes(label, values, requiredValues) {
  assert.ok(Array.isArray(values), `${label} must be an array`);
  for (const requiredValue of requiredValues) {
    assert.ok(values.includes(requiredValue), `${label} is missing: ${requiredValue}`);
  }
}

function countNonEmptyLines(text) {
  return text.split(/\r?\n/u).filter((line) => line.trim()).length;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}

function flattenSurfacePaths(manifest) {
  return Object.values(manifest.surfaces).flat();
}

function assertManifest(manifest) {
  assert.equal(manifest.schemaVersion, 1, "manifest schemaVersion must stay 1");
  assert.equal(manifest.name, "agent-control", "manifest name must stay agent-control");
  assertArrayIncludes("manifest authorityOrder", manifest.authorityOrder, [
    PATHS.readme,
    PATHS.implement,
    PATHS.activeRunbook,
    PATHS.currentPriority,
    PATHS.stopLines,
    PATHS.continuationRules,
    PATHS.loggingRules,
  ]);
  assertArrayIncludes("manifest entrypoints", manifest.surfaces.entrypoints, [
    PATHS.agents,
    PATHS.readme,
    PATHS.implement,
    PATHS.packageJson,
  ]);
  assertArrayIncludes("manifest requiredCommands", manifest.requiredCommands, [
    "npm run check",
    "npm run check:agent-control",
    "npm run check:reusable",
    "npm test",
    "npm run preflight",
    "npm run agent-control -- help",
    "npm run agent-control -- adoption-protocol",
    "npm run agent-control -- preflight --file templates/project-memory.md",
    "npm run agent-control -- audit-memory --file templates/project-memory.md",
    "npm run agent-control -- score-next --file templates/project-memory.md",
    "npm run agent-control -- render-stop-lines --check",
    "npm run agent-control -- analyze-logs",
    "npm run agent-control -- show-next --file templates/project-memory.md",
  ]);
  assert.ok(!("examples" in manifest.surfaces), "examples must not be part of the lightweight import surface");
  for (const surfacePath of flattenSurfacePaths(manifest)) {
    assert.ok(fs.existsSync(repoPath(surfacePath)), `manifest references missing path: ${surfacePath}`);
  }
}

function assertPackage(packageJson) {
  assert.equal(packageJson.name, "agent-control", "package name must stay agent-control");
  assert.equal(packageJson.type, "module", "package must stay ESM");
  assert.equal(packageJson.bin?.["agent-control"], PATHS.cli, "bin must expose the CLI");
  assert.equal(packageJson.scripts?.check, "npm run check:agent-control && npm test && npm run preflight", "default check must validate authority, CLI behavior, and workflow gates");
  assert.equal(packageJson.scripts?.["check:agent-control"], `node ${PATHS.reusableCheck.replace("check-reusable-install", "check-agent-control-authority")}`);
  assert.equal(packageJson.scripts?.["check:reusable"], `node ${PATHS.reusableCheck}`, "reusable check must remain opt-in");
  assert.equal(packageJson.scripts?.["agent-control"], `node ${PATHS.cli}`, "agent-control script must expose the CLI");
  assert.equal(packageJson.scripts?.preflight, `node ${PATHS.cli} preflight --file templates/project-memory.md`, "preflight must gate generated policy and memory quality");
  assert.equal(packageJson.scripts?.test, "node --test tests/*.test.mjs", "test script must run the lightweight CLI tests");
}

function assertStopLineCards(stopLinesText, stopLineCards) {
  assert.equal(stopLineCards.schemaVersion, 1, "stop-line card schemaVersion must stay 1");
  assertArrayIncludes(
    "stop-line card ids",
    stopLineCards.cards.map((card) => card.id),
    ["repo-boundary", "scope", "loop-execution"],
  );
  for (const card of stopLineCards.cards) {
    assert.match(stopLinesText, new RegExp(`^## ${escapeRegExp(card.title)}\\r?$`, "mu"), `card title missing from stop-lines.md: ${card.title}`);
    assert.ok(card.allowed?.length, `${card.id} must define allowed entries`);
    assert.ok(card.forbidden?.length, `${card.id} must define forbidden entries`);
    assert.ok(card.proofPath?.length, `${card.id} must define proofPath`);
    assert.ok(card.rollbackPath, `${card.id} must define rollbackPath`);
    assert.ok(card.reopenCriteria, `${card.id} must define reopenCriteria`);
  }
}

function main() {
  const manifest = readJson(PATHS.manifest);
  const packageJson = readJson(PATHS.packageJson);
  const agentsText = readText(PATHS.agents);
  const readmeText = readText(PATHS.readme);
  const implementText = readText(PATHS.implement);
  const activeRunbookText = readText(PATHS.activeRunbook);
  const currentPriorityText = readText(PATHS.currentPriority);
  const stopLinesText = readText(PATHS.stopLines);
  const stopLineCards = readJson(PATHS.stopLineCards);
  const continuationRulesText = readText(PATHS.continuationRules);
  const loggingRulesText = readText(PATHS.loggingRules);
  const logsReadmeText = readText(PATHS.logsReadme);
  const memoryReadmeText = readText(PATHS.memoryReadme);
  const cycleTemplateText = readText(PATHS.cycleTemplate);
  const loopTemplateText = readText(PATHS.loopTemplate);
  const handoffTemplateText = readText(PATHS.handoffTemplate);
  const projectMemoryTemplateText = readText(PATHS.projectMemoryTemplate);
  const cliText = readText(PATHS.cli);
  const cliCoreText = readText(PATHS.cliCore);
  const memoryCoreText = readText(PATHS.memoryCore);
  const reusableCheckText = readText(PATHS.reusableCheck);
  const cliTestText = readText(PATHS.cliTest);

  assertManifest(manifest);
  assertPackage(packageJson);

  assertContains("AGENTS.md", agentsText, ["README.md", "implement.md", "do not stop after cloning", "adoption protocol", "discovery bridge"]);
  assert.ok(countNonEmptyLines(agentsText) <= 8, "AGENTS.md must stay thin");

  assertContains("README.md", readmeText, [
    "self-contained repo",
    "agent-first",
    "do not stop after cloning",
    "Minimum post-clone sequence",
    "authority.manifest.json",
    "templates/project-memory.md",
    "memory/",
    "npm run agent-control -- adoption-protocol",
    "npm run agent-control -- preflight",
    "npm run agent-control -- bootstrap --context",
    "npm run agent-control -- score-next",
    "npm test",
    "npm run check:reusable",
  ]);
  assertNotContains("README.md", readmeText, ["examples/"]);

  assertContains("implement.md", implementText, ["Agent Control Entrypoint", PATHS.activeRunbook, PATHS.currentPriority]);
  assert.ok(countNonEmptyLines(implementText) <= 10, "implement.md must remain a thin entrypoint");

  assertContains("runbook/active.md", activeRunbookText, ["agent-first", "do not stop at clone completion", "memory/project.md", "memory/state.json", "npm run agent-control -- show-next", "npm run check:reusable"]);
  assertContains("runbook/current-priority.md", currentPriorityText, ["npm run check:reusable", "templates/project-memory.md", "memory/state.json"]);
  assertContains("policies/continuation-rules.md", continuationRulesText, ["stop-line card", "Do not use a numeric continuation quota"]);
  assertContains("policies/logging-rules.md", loggingRulesText, ["memory/project.md", "memory/state.json", "templates/project-memory.md"]);
  assertContains("logs/README.md", logsReadmeText, ["logs/YYYY-MM/", "npm run agent-control -- analyze-logs"]);
  assertContains("memory/README.md", memoryReadmeText, ["memory/project.md", "memory/state.json", "--context", "Do not use project memory as a transcript"]);

  assertStopLineCards(stopLinesText, stopLineCards);
  assertLines("templates/cycle-entry.md", cycleTemplateText, REQUIRED_CYCLE_LINES);
  assertContains("templates/loop-run.md", loopTemplateText, ["# Loop-Run Template", "npm run check"]);
  assertHeadings("templates/handoff.md", handoffTemplateText, ["# Handoff Template", "## Current state", "## Completed in this run", "## Next honest move", "## Risks / notes"]);
  assertHeadings("templates/project-memory.md", projectMemoryTemplateText, REQUIRED_MEMORY_HEADINGS);

  assertContains("policies/stop-lines.md", stopLinesText, [
    "Generated from `policies/stop-line-cards.json`.",
    "render-stop-lines",
  ]);

  assertContains("scripts/agent-control.mjs", cliText, [
    "#!/usr/bin/env node",
    "adoption-protocol",
    "preflight",
    "bootstrap",
    "audit-memory",
    "score-next",
    "sync-state",
    "compact-memory",
    "memory-state",
    "pack --output",
    "render-stop-lines",
    "No memory updates requested",
  ]);
  assertContains("scripts/lib/agent-control-core.mjs", cliCoreText, [
    "resolveRepoPath",
    "allowedRoots",
    "Unexpected positional argument",
    "asArray",
    "normalizeLineEndings",
    "localTimestamp",
  ]);
  assertContains("scripts/lib/memory-core.mjs", memoryCoreText, [
    "buildContextCapsule",
    "Project Context",
    "rankNextMoves",
    "compactMemoryText",
    "auditMemoryText",
    "schemaVersion: 2",
  ]);
  assertContains("scripts/check-reusable-install.mjs", reusableCheckText, ["fs.cpSync", "check:agent-control", ".git", "node_modules"]);
  assertContains("tests/agent-control.test.mjs", cliTestText, [
    "node:test",
    "adoption protocol is agent-first",
    "preflight",
    "bootstrap",
    "audit-memory",
    "score-next",
    "sync-state",
    "compact-memory",
    "memory-state",
    "pack",
    "render-stop-lines",
    "Path must stay under memory",
    "Path must stay under logs",
    "No memory updates requested",
    "without being the result field",
  ]);

  assert.ok(!fs.existsSync(repoPath("examples")), "examples directory should stay removed for lightweight imports");

  process.stdout.write(`${JSON.stringify({ ok: true, checked: flattenSurfacePaths(manifest) }, null, 2)}\n`);
}

main();
