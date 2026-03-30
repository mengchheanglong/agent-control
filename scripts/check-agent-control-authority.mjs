import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const README_PATH = path.join(ROOT, "README.md");
const IMPLEMENT_PATH = path.join(ROOT, "implement.md");
const ACTIVE_RUNBOOK_PATH = path.join(ROOT, "runbook", "active.md");
const CURRENT_PRIORITY_PATH = path.join(ROOT, "runbook", "current-priority.md");
const STOP_LINES_PATH = path.join(ROOT, "policies", "stop-lines.md");
const CONTINUATION_RULES_PATH = path.join(ROOT, "policies", "continuation-rules.md");
const LOGGING_RULES_PATH = path.join(ROOT, "policies", "logging-rules.md");
const LOOP_TEMPLATE_PATH = path.join(ROOT, "templates", "loop-run.md");

function readText(filePath) {
  assert.ok(fs.existsSync(filePath), `Missing Agent Control authority surface: ${filePath}`);
  return fs.readFileSync(filePath, "utf8");
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

function main() {
  const readmeText = readText(README_PATH);
  const implementText = readText(IMPLEMENT_PATH);
  const activeRunbookText = readText(ACTIVE_RUNBOOK_PATH);
  const currentPriorityText = readText(CURRENT_PRIORITY_PATH);
  const stopLinesText = readText(STOP_LINES_PATH);
  const continuationRulesText = readText(CONTINUATION_RULES_PATH);
  const loggingRulesText = readText(LOGGING_RULES_PATH);
  const loopTemplateText = readText(LOOP_TEMPLATE_PATH);

  assertContainsAll("README.md", readmeText, [
    "# Agent Control",
    "standalone repo",
    "implement.md",
    "runbook/active.md",
    "runbook/current-priority.md",
    "policies/stop-lines.md",
    "policies/continuation-rules.md",
    "policies/logging-rules.md",
    "logs/",
    "templates/",
    "npm run check:agent-control",
  ]);
  assertContainsNone("README.md", readmeText, [
    "directive-workspace/",
    "control/runbook/",
    "control/policies/",
    "control/logs/",
    "control/templates/",
  ]);

  assertContainsAll("implement.md", implementText, [
    "Agent Control Entrypoint",
    "README.md",
    "runbook/active.md",
    "runbook/current-priority.md",
    "policies/stop-lines.md",
    "policies/continuation-rules.md",
    "policies/logging-rules.md",
  ]);
  assertContainsNone("implement.md", implementText, [
    "directive-workspace/",
    "control/",
    "CLAUDE.md",
    "AGENTS.md",
  ]);
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

  assertContainsAll("runbook/active.md", activeRunbookText, [
    "standalone Agent Control repo",
    "runbook/current-priority.md",
    "policies/stop-lines.md",
    "policies/continuation-rules.md",
    "policies/logging-rules.md",
    "logs/",
    "npm run check",
    "npm run check:agent-control",
  ]);
  assertContainsNone("runbook/active.md", activeRunbookText, [
    "directive-workspace/",
    "control/",
    "CLAUDE.md",
    "AGENTS.md",
    "report:directive-workspace-state",
  ]);

  assertContainsAll("runbook/current-priority.md", currentPriorityText, [
    "Make Agent Control",
    "## Current mission",
    "## Current run priority",
    "## Current standalone baseline",
    "npm run check:agent-control",
  ]);
  assertContainsNone("runbook/current-priority.md", currentPriorityText, [
    "directive-workspace/",
    ".openclaw\\workspace\\directive-workspace",
    "report:directive-workspace-state",
  ]);

  assertContainsAll("policies/stop-lines.md", stopLinesText, [
    "## Current Standalone Migration Stop-Line",
    "## Current Scope Stop-Line",
    "## Current Loop Execution Stop-Line",
  ]);
  assertContainsNone("policies/stop-lines.md", stopLinesText, [
    "scripts/report-directive-workspace-state.ts",
    "shared/lib/dw-state.ts",
  ]);

  assertContainsAll("policies/continuation-rules.md", continuationRulesText, [
    "## Task selection policy",
    "## Required cycle framing",
    "## Run persistence rule",
  ]);

  assertContainsAll("policies/logging-rules.md", loggingRulesText, [
    "leave `implement.md` as a thin entrypoint only",
    "logs/YYYY-MM/",
    "templates/cycle-entry.md",
    "templates/loop-run.md",
    "templates/handoff.md",
  ]);
  assertContainsNone("policies/logging-rules.md", loggingRulesText, ["control/"]);

  assertContainsAll("templates/loop-run.md", loopTemplateText, [
    "npm run check:agent-control",
    "npm run check",
  ]);
  assertContainsNone("templates/loop-run.md", loopTemplateText, ["report:directive-workspace-state"]);

  process.stdout.write(
    `${JSON.stringify(
      {
        ok: true,
        checked: {
          readme: toRepoPath(README_PATH),
          implement: toRepoPath(IMPLEMENT_PATH),
          implementNonEmptyLineCount: countNonEmptyLines(implementText),
          implementSectionCount: countLinesMatching(implementText, /^## /u),
          activeRunbook: toRepoPath(ACTIVE_RUNBOOK_PATH),
          currentPriority: toRepoPath(CURRENT_PRIORITY_PATH),
          stopLines: toRepoPath(STOP_LINES_PATH),
          continuationRules: toRepoPath(CONTINUATION_RULES_PATH),
          loggingRules: toRepoPath(LOGGING_RULES_PATH),
          loopTemplate: toRepoPath(LOOP_TEMPLATE_PATH),
        },
      },
      null,
      2,
    )}\n`,
  );
}

main();
