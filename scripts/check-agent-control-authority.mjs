import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const AGENTS_PATH = path.join(ROOT, "AGENTS.md");
const MANIFEST_PATH = path.join(ROOT, "authority.manifest.json");
const README_PATH = path.join(ROOT, "README.md");
const IMPLEMENT_PATH = path.join(ROOT, "implement.md");
const PACKAGE_JSON_PATH = path.join(ROOT, "package.json");
const ACTIVE_RUNBOOK_PATH = path.join(ROOT, "runbook", "active.md");
const CURRENT_PRIORITY_PATH = path.join(ROOT, "runbook", "current-priority.md");
const STOP_LINES_PATH = path.join(ROOT, "policies", "stop-lines.md");
const STOP_LINE_CARDS_PATH = path.join(ROOT, "policies", "stop-line-cards.json");
const CONTINUATION_RULES_PATH = path.join(ROOT, "policies", "continuation-rules.md");
const LOGGING_RULES_PATH = path.join(ROOT, "policies", "logging-rules.md");
const LOGS_README_PATH = path.join(ROOT, "logs", "README.md");
const MEMORY_README_PATH = path.join(ROOT, "memory", "README.md");
const CYCLE_TEMPLATE_PATH = path.join(ROOT, "templates", "cycle-entry.md");
const LOOP_TEMPLATE_PATH = path.join(ROOT, "templates", "loop-run.md");
const HANDOFF_TEMPLATE_PATH = path.join(ROOT, "templates", "handoff.md");
const PROJECT_MEMORY_TEMPLATE_PATH = path.join(ROOT, "templates", "project-memory.md");
const CLI_PATH = path.join(ROOT, "scripts", "agent-control.mjs");
const REUSE_CHECK_PATH = path.join(ROOT, "scripts", "check-reusable-install.mjs");
const EXAMPLE_PATHS = [
  path.join(ROOT, "examples", "README.md"),
  path.join(ROOT, "examples", "cycle-entry.good.md"),
  path.join(ROOT, "examples", "cycle-entry.too-broad.md"),
  path.join(ROOT, "examples", "handoff.good.md"),
  path.join(ROOT, "examples", "verification-failed.md"),
  path.join(ROOT, "examples", "project-memory.good.md"),
];
const REQUIRED_MEMORY_HEADINGS = [
  "# Project Memory",
  "## Goal",
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

function readText(filePath) {
  assert.ok(fs.existsSync(filePath), `Missing Agent Control authority surface: ${filePath}`);
  return fs.readFileSync(filePath, "utf8");
}

function readJson(filePath) {
  return JSON.parse(readText(filePath));
}

function assertContainsAll(label, text, requiredSnippets) {
  for (const snippet of requiredSnippets) {
    assert.ok(text.includes(snippet), `${label} is missing required content: ${snippet}`);
  }
}

function assertContainsNone(label, text, forbiddenSnippets) {
  for (const snippet of forbiddenSnippets) {
    assert.ok(!text.includes(snippet), `${label} must not contain forbidden drift: ${snippet}`);
  }
}

function assertDoesNotMatch(label, text, pattern, message) {
  assert.ok(!pattern.test(text), `${label} must not contain ${message}`);
}

function assertHeadings(label, text, requiredHeadings) {
  for (const heading of requiredHeadings) {
    assert.match(text, new RegExp(`^${escapeRegExp(heading)}$`, "mu"), `${label} is missing heading: ${heading}`);
  }
}

function assertLines(label, text, requiredLines) {
  for (const line of requiredLines) {
    assert.match(text, new RegExp(`^${escapeRegExp(line)}$`, "mu"), `${label} is missing line: ${line}`);
  }
}

function assertArrayIncludesAll(label, values, requiredValues) {
  assert.ok(Array.isArray(values), `${label} must be an array`);
  for (const requiredValue of requiredValues) {
    assert.ok(values.includes(requiredValue), `${label} is missing required value: ${requiredValue}`);
  }
}

function assertRepoPathExists(repoPath) {
  assert.ok(fs.existsSync(path.join(ROOT, repoPath)), `Manifest references missing repo path: ${repoPath}`);
}

function countLinesMatching(text, pattern) {
  return text
    .split(/\r?\n/u)
    .filter((line) => pattern.test(line)).length;
}

function countNonEmptyLines(text) {
  return text
    .split(/\r?\n/u)
    .filter((line) => line.trim().length > 0).length;
}

function toRepoPath(filePath) {
  return path.relative(ROOT, filePath).replace(/\\/g, "/");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}

function main() {
  const agentsText = readText(AGENTS_PATH);
  const manifest = readJson(MANIFEST_PATH);
  const readmeText = readText(README_PATH);
  const implementText = readText(IMPLEMENT_PATH);
  const packageJsonText = readText(PACKAGE_JSON_PATH);
  const packageJson = JSON.parse(packageJsonText);
  const activeRunbookText = readText(ACTIVE_RUNBOOK_PATH);
  const currentPriorityText = readText(CURRENT_PRIORITY_PATH);
  const stopLinesText = readText(STOP_LINES_PATH);
  const stopLineCards = readJson(STOP_LINE_CARDS_PATH);
  const continuationRulesText = readText(CONTINUATION_RULES_PATH);
  const loggingRulesText = readText(LOGGING_RULES_PATH);
  const logsReadmeText = readText(LOGS_README_PATH);
  const memoryReadmeText = readText(MEMORY_README_PATH);
  const cycleTemplateText = readText(CYCLE_TEMPLATE_PATH);
  const loopTemplateText = readText(LOOP_TEMPLATE_PATH);
  const handoffTemplateText = readText(HANDOFF_TEMPLATE_PATH);
  const projectMemoryTemplateText = readText(PROJECT_MEMORY_TEMPLATE_PATH);
  const cliText = readText(CLI_PATH);
  const reuseCheckText = readText(REUSE_CHECK_PATH);
  const exampleTexts = EXAMPLE_PATHS.map((examplePath) => [examplePath, readText(examplePath)]);

  assertContainsAll("AGENTS.md", agentsText, [
    "# Agent Control Instructions",
    "README.md",
    "implement.md",
    "discovery bridge",
    "Do not duplicate runbook or policy doctrine here.",
  ]);
  assert.ok(
    countNonEmptyLines(agentsText) <= 6,
    "AGENTS.md must stay a thin discovery bridge instead of becoming another authority surface",
  );

  assert.equal(manifest.schemaVersion, 1, "authority.manifest.json must keep schemaVersion 1");
  assert.equal(manifest.name, "agent-control", "authority.manifest.json must identify agent-control");
  assertArrayIncludesAll("authority.manifest.json authorityOrder", manifest.authorityOrder, [
    "README.md",
    "implement.md",
    "runbook/active.md",
    "runbook/current-priority.md",
    "policies/stop-lines.md",
    "policies/continuation-rules.md",
    "policies/logging-rules.md",
  ]);
  assertArrayIncludesAll("authority.manifest.json requiredCommands", manifest.requiredCommands, [
    "npm run check",
    "npm run check:agent-control",
    "npm run check:reusable",
    "npm run agent-control -- help",
    "npm run agent-control -- analyze-logs",
    "npm run agent-control -- show-next --file examples/project-memory.good.md",
  ]);
  for (const surfacePaths of Object.values(manifest.surfaces)) {
    assert.ok(Array.isArray(surfacePaths), "authority.manifest.json surfaces must be path arrays");
    for (const repoPath of surfacePaths) {
      assertRepoPathExists(repoPath);
    }
  }

  assertContainsAll("README.md", readmeText, [
    "# Agent Control",
    "self-contained repo",
    "AGENTS.md",
    "authority.manifest.json",
    "implement.md",
    "runbook/active.md",
    "runbook/current-priority.md",
    "policies/stop-line-cards.json",
    "policies/stop-lines.md",
    "policies/continuation-rules.md",
    "policies/logging-rules.md",
    "memory/",
    "templates/project-memory.md",
    "logs/",
    "templates/",
    "examples/",
    "scripts/agent-control.mjs",
    "init-memory",
    "update-memory",
    "show-next",
    "npm run check:agent-control",
    "npm run check:reusable",
  ]);
  assertHeadings("README.md", readmeText, [
    "## What lives here",
    "## Quick start",
    "## Operating helpers",
    "## Checks",
    "## Publishing notes",
  ]);
  assertDoesNotMatch(
    "README.md",
    readmeText,
    /\b[a-z0-9-]+\/(?:runbook|policies|logs|templates)\//u,
    "legacy nested workspace paths",
  );

  assertContainsAll("implement.md", implementText, [
    "Agent Control Entrypoint",
    "README.md",
    "runbook/active.md",
    "runbook/current-priority.md",
    "policies/stop-lines.md",
    "policies/continuation-rules.md",
    "policies/logging-rules.md",
  ]);
  assertDoesNotMatch(
    "implement.md",
    implementText,
    /\b[a-z0-9-]+\/(?:runbook|policies|logs|templates)\//u,
    "legacy nested workspace paths",
  );
  assertDoesNotMatch("implement.md", implementText, /\b(?:CLAUDE|AGENTS)\.md\b/u, "repo-external root docs");
  assert.ok(
    countNonEmptyLines(implementText) <= 10,
    "implement.md must remain a thin entrypoint rather than regrowing into a larger active runbook",
  );
  assert.equal(
    countLinesMatching(implementText, /^## /u),
    1,
    "implement.md must keep a single thin entrypoint section instead of multiple active-runbook sections",
  );
  assert.match(
    implementText,
    /^## Agent Control Entrypoint$/mu,
    "implement.md must preserve the single Agent Control Entrypoint section",
  );

  assert.equal(packageJson.name, "agent-control", "package.json must keep the agent-control package name");
  assert.equal(
    packageJson.scripts?.check,
    "npm run check:agent-control && npm run check:reusable",
    "package.json must wire the main check script to authority and reusable checks",
  );
  assert.equal(
    packageJson.scripts?.["check:agent-control"],
    "node scripts/check-agent-control-authority.mjs",
    "package.json must point check:agent-control at the repo-shape checker",
  );
  assert.equal(
    packageJson.scripts?.["check:reusable"],
    "node scripts/check-reusable-install.mjs",
    "package.json must expose the reusable install check",
  );
  assert.equal(
    packageJson.scripts?.["agent-control"],
    "node scripts/agent-control.mjs",
    "package.json must expose the Agent Control CLI",
  );
  assert.equal(
    packageJson.bin?.["agent-control"],
    "scripts/agent-control.mjs",
    "package.json must expose an agent-control bin entry",
  );
  assertDoesNotMatch("package.json", packageJsonText, /\bcheck(?::|-)(?:control-authority)\b/u, "legacy check script names");

  assertContainsAll("runbook/active.md", activeRunbookText, [
    "Agent Control repo",
    "runbook/current-priority.md",
    "policies/stop-lines.md",
    "policies/continuation-rules.md",
    "policies/logging-rules.md",
    "policies/stop-line-cards.json",
    "memory/project.md",
    "npm run agent-control -- init-memory",
    "npm run agent-control -- update-memory",
    "npm run agent-control -- show-next",
    "logs/",
    "npm run agent-control -- analyze-logs",
    "npm run check:reusable",
    "npm run check",
    "npm run check:agent-control",
  ]);
  assertHeadings("runbook/active.md", activeRunbookText, [
    "## Run purpose",
    "## Scope for this run",
    "## Repo-specific constraints",
    "## Instruction priority",
    "## Verification rules",
    "## Operating helpers",
    "## Change discipline",
  ]);
  assertDoesNotMatch(
    "runbook/active.md",
    activeRunbookText,
    /\b[a-z0-9-]+\/(?:runbook|policies|logs|templates)\//u,
    "legacy nested workspace paths",
  );
  assertDoesNotMatch("runbook/active.md", activeRunbookText, /\b(?:CLAUDE|AGENTS)\.md\b/u, "repo-external root docs");

  assertContainsAll("runbook/current-priority.md", currentPriorityText, [
    "Make Agent Control",
    "## Current mission",
    "## Current run priority",
    "## Current repo baseline",
    "npm run check:agent-control",
    "npm run check:reusable",
    "memory/project.md",
  ]);
  assertHeadings("runbook/current-priority.md", currentPriorityText, [
    "## Current mission",
    "## Current run priority",
    "## Current repo baseline",
  ]);
  assertContainsNone("runbook/current-priority.md", currentPriorityText, [
    "C:\\Users\\",
  ]);

  assertHeadings("policies/stop-lines.md", stopLinesText, [
    "## Current Repo Boundary Stop-Line",
    "## Current Scope Stop-Line",
    "## Current Loop Execution Stop-Line",
  ]);
  assert.equal(stopLineCards.schemaVersion, 1, "policies/stop-line-cards.json must keep schemaVersion 1");
  assert.equal(stopLineCards.cards.length, 3, "policies/stop-line-cards.json must define the three current stop-lines");
  assertArrayIncludesAll(
    "policies/stop-line-cards.json ids",
    stopLineCards.cards.map((card) => card.id),
    ["repo-boundary", "scope", "loop-execution"],
  );
  for (const card of stopLineCards.cards) {
    assert.match(stopLinesText, new RegExp(`^## ${escapeRegExp(card.title)}$`, "mu"), `stop-line card ${card.id} must match a markdown heading`);
    assert.ok(card.allowed.length > 0, `stop-line card ${card.id} must have allowed entries`);
    assert.ok(card.forbidden.length > 0, `stop-line card ${card.id} must have forbidden entries`);
    assert.ok(card.proofPath.length > 0, `stop-line card ${card.id} must have a proof path`);
    assert.ok(card.rollbackPath, `stop-line card ${card.id} must have a rollback path`);
    assert.ok(card.reopenCriteria, `stop-line card ${card.id} must have reopen criteria`);
  }
  assertContainsAll("policies/continuation-rules.md", continuationRulesText, [
    "## Task selection policy",
    "## Required cycle framing",
    "stop-line card",
    "## Run persistence rule",
    "## Continuation stopping rule",
    "Do not use a numeric continuation quota",
  ]);
  assertDoesNotMatch(
    "policies/continuation-rules.md",
    continuationRulesText,
    /\bat least 5 bounded cycles\b/u,
    "numeric continuation quotas",
  );

  assertContainsAll("policies/logging-rules.md", loggingRulesText, [
    "leave `implement.md` as a thin entrypoint only",
    "logs/YYYY-MM/",
    "memory/project.md",
    "npm run agent-control -- analyze-logs",
    "templates/cycle-entry.md",
    "templates/loop-run.md",
    "templates/handoff.md",
  ]);
  assertHeadings("policies/logging-rules.md", loggingRulesText, [
    "## Purpose",
    "## Logging destinations",
    "## Logging model",
    "## Templates",
  ]);
  assertDoesNotMatch(
    "policies/logging-rules.md",
    loggingRulesText,
    /\b[a-z0-9-]+\/(?:runbook|policies|logs|templates)\//u,
    "legacy nested workspace paths",
  );

  assertContainsAll("templates/cycle-entry.md", cycleTemplateText, [
    "# Cycle Entry Template",
  ]);
  assertLines("templates/cycle-entry.md", cycleTemplateText, [
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
  ]);
  assertContainsAll("templates/loop-run.md", loopTemplateText, [
    "# Loop-Run Template",
    "npm run check:agent-control",
    "npm run check",
  ]);
  assertHeadings("templates/loop-run.md", loopTemplateText, [
    "## Batched loop run YYYY-MM-X - short label",
  ]);
  assertLines("templates/loop-run.md", loopTemplateText, [
    "Run scope:",
    "Verified micro-fixes:",
    "Verification run:",
    "Stop summary:",
  ]);
  assertContainsAll("templates/handoff.md", handoffTemplateText, [
    "# Handoff Template",
  ]);
  assertHeadings("templates/handoff.md", handoffTemplateText, [
    "## Current state",
    "## Completed in this run",
    "## Next honest move",
    "## Risks / notes",
  ]);
  assertContainsAll("templates/project-memory.md", projectMemoryTemplateText, [
    "# Project Memory",
    "The durable user goal",
    "The single highest-ROI bounded task",
  ]);
  assertHeadings("templates/project-memory.md", projectMemoryTemplateText, REQUIRED_MEMORY_HEADINGS);

  assertContainsAll("memory/README.md", memoryReadmeText, [
    "# Project Memory",
    "memory/project.md",
    "compact operating state",
    "Do not use project memory as a transcript",
    "npm run agent-control -- init-memory",
    "npm run agent-control -- update-memory",
    "npm run agent-control -- show-next",
  ]);

  assertContainsAll("logs/README.md", logsReadmeText, [
    "# Logs",
    "logs/YYYY-MM/",
    "npm run agent-control -- analyze-logs",
    "Keep this folder clean when publishing templates or starter material.",
  ]);
  assertDoesNotMatch(
    "logs/README.md",
    logsReadmeText,
    /\b[a-z0-9-]+\/(?:runbook|policies|logs|templates)\//u,
    "legacy nested workspace paths",
  );

  assertContainsAll("scripts/agent-control.mjs", cliText, [
    "#!/usr/bin/env node",
    "init-memory",
    "update-memory",
    "show-memory",
    "show-next",
    "DEFAULT_MEMORY_PATH",
    "start-cycle",
    "close-cycle",
    "handoff",
    "analyze-logs",
    "stop-lines",
    "policies/stop-line-cards.json",
  ]);
  assertContainsAll("scripts/check-reusable-install.mjs", reuseCheckText, [
    "fs.cpSync",
    "npm",
    "check:agent-control",
    ".git",
    "node_modules",
  ]);
  for (const [examplePath, exampleText] of exampleTexts) {
    assertDoesNotMatch(
      toRepoPath(examplePath),
      exampleText,
      /\b[a-z0-9-]+\/(?:runbook|policies|logs|templates)\//u,
      "legacy nested workspace paths",
    );
  }
  assertContainsAll("examples/README.md", exampleTexts[0][1], [
    "These examples show the operating standard without becoming active doctrine.",
    "Use `runbook/` and `policies/` for current authority.",
  ]);
  assertContainsAll("examples/cycle-entry.good.md", exampleTexts[1][1], [
    "Proof path:",
    "Rollback path:",
    "Stop-line:",
    "Passed.",
  ]);
  assertContainsAll("examples/cycle-entry.too-broad.md", exampleTexts[2][1], [
    "Why it is flawed:",
    "crosses the current scope stop-line",
    "Better bounded replacement:",
  ]);
  assertContainsAll("examples/handoff.good.md", exampleTexts[3][1], [
    "## Current state",
    "## Completed in this run",
    "## Next honest move",
    "## Risks / notes",
  ]);
  assertContainsAll("examples/verification-failed.md", exampleTexts[4][1], [
    "Verification run:",
    "Failed.",
    "Do not claim",
  ]);
  assertHeadings("examples/project-memory.good.md", exampleTexts[5][1], REQUIRED_MEMORY_HEADINGS);
  assertContainsAll("examples/project-memory.good.md", exampleTexts[5][1], [
    "curated operating state",
    "Next Best Move",
    "Proof Path",
  ]);

  process.stdout.write(
    `${JSON.stringify(
      {
        ok: true,
        checked: {
          agents: toRepoPath(AGENTS_PATH),
          manifest: toRepoPath(MANIFEST_PATH),
          readme: toRepoPath(README_PATH),
          implement: toRepoPath(IMPLEMENT_PATH),
          packageJson: toRepoPath(PACKAGE_JSON_PATH),
          implementNonEmptyLineCount: countNonEmptyLines(implementText),
          implementSectionCount: countLinesMatching(implementText, /^## /u),
          activeRunbook: toRepoPath(ACTIVE_RUNBOOK_PATH),
          currentPriority: toRepoPath(CURRENT_PRIORITY_PATH),
          stopLines: toRepoPath(STOP_LINES_PATH),
          stopLineCards: toRepoPath(STOP_LINE_CARDS_PATH),
          continuationRules: toRepoPath(CONTINUATION_RULES_PATH),
          loggingRules: toRepoPath(LOGGING_RULES_PATH),
          logsReadme: toRepoPath(LOGS_README_PATH),
          memoryReadme: toRepoPath(MEMORY_README_PATH),
          cycleTemplate: toRepoPath(CYCLE_TEMPLATE_PATH),
          loopTemplate: toRepoPath(LOOP_TEMPLATE_PATH),
          handoffTemplate: toRepoPath(HANDOFF_TEMPLATE_PATH),
          projectMemoryTemplate: toRepoPath(PROJECT_MEMORY_TEMPLATE_PATH),
          cli: toRepoPath(CLI_PATH),
          reusableCheck: toRepoPath(REUSE_CHECK_PATH),
          examples: EXAMPLE_PATHS.map(toRepoPath),
        },
      },
      null,
      2,
    )}\n`,
  );
}

main();
