import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const README_PATH = path.join(ROOT, "README.md");
const IMPLEMENT_PATH = path.join(ROOT, "implement.md");
const PACKAGE_JSON_PATH = path.join(ROOT, "package.json");
const ACTIVE_RUNBOOK_PATH = path.join(ROOT, "runbook", "active.md");
const CURRENT_PRIORITY_PATH = path.join(ROOT, "runbook", "current-priority.md");
const STOP_LINES_PATH = path.join(ROOT, "policies", "stop-lines.md");
const CONTINUATION_RULES_PATH = path.join(ROOT, "policies", "continuation-rules.md");
const LOGGING_RULES_PATH = path.join(ROOT, "policies", "logging-rules.md");
const LOGS_README_PATH = path.join(ROOT, "logs", "README.md");
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

function assertDoesNotMatch(label, text, pattern, message) {
  assert.ok(!pattern.test(text), `${label} must not contain ${message}`);
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
  const packageJsonText = readText(PACKAGE_JSON_PATH);
  const packageJson = JSON.parse(packageJsonText);
  const activeRunbookText = readText(ACTIVE_RUNBOOK_PATH);
  const currentPriorityText = readText(CURRENT_PRIORITY_PATH);
  const stopLinesText = readText(STOP_LINES_PATH);
  const continuationRulesText = readText(CONTINUATION_RULES_PATH);
  const loggingRulesText = readText(LOGGING_RULES_PATH);
  const logsReadmeText = readText(LOGS_README_PATH);
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
    "npm run check:agent-control",
    "package.json must wire the main check script to check:agent-control",
  );
  assert.equal(
    packageJson.scripts?.["check:agent-control"],
    "node scripts/check-agent-control-authority.mjs",
    "package.json must point check:agent-control at the repo-shape checker",
  );
  assertDoesNotMatch("package.json", packageJsonText, /\bcheck(?::|-)(?:control-authority)\b/u, "legacy check script names");

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
    "## Current standalone baseline",
    "npm run check:agent-control",
  ]);
  assertContainsNone("runbook/current-priority.md", currentPriorityText, [
    "C:\\Users\\",
  ]);

  assertContainsAll("policies/stop-lines.md", stopLinesText, [
    "## Current Standalone Migration Stop-Line",
    "## Current Scope Stop-Line",
    "## Current Loop Execution Stop-Line",
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
  assertDoesNotMatch(
    "policies/logging-rules.md",
    loggingRulesText,
    /\b[a-z0-9-]+\/(?:runbook|policies|logs|templates)\//u,
    "legacy nested workspace paths",
  );

  assertContainsAll("templates/loop-run.md", loopTemplateText, [
    "npm run check:agent-control",
    "npm run check",
  ]);

  assertContainsAll("logs/README.md", logsReadmeText, [
    "# Logs",
    "logs/YYYY-MM/",
    "Keep this folder clean when publishing templates or starter material.",
  ]);
  assertDoesNotMatch(
    "logs/README.md",
    logsReadmeText,
    /\b[a-z0-9-]+\/(?:runbook|policies|logs|templates)\//u,
    "legacy nested workspace paths",
  );

  process.stdout.write(
    `${JSON.stringify(
      {
        ok: true,
        checked: {
          readme: toRepoPath(README_PATH),
          implement: toRepoPath(IMPLEMENT_PATH),
          packageJson: toRepoPath(PACKAGE_JSON_PATH),
          implementNonEmptyLineCount: countNonEmptyLines(implementText),
          implementSectionCount: countLinesMatching(implementText, /^## /u),
          activeRunbook: toRepoPath(ACTIVE_RUNBOOK_PATH),
          currentPriority: toRepoPath(CURRENT_PRIORITY_PATH),
          stopLines: toRepoPath(STOP_LINES_PATH),
          continuationRules: toRepoPath(CONTINUATION_RULES_PATH),
          loggingRules: toRepoPath(LOGGING_RULES_PATH),
          logsReadme: toRepoPath(LOGS_README_PATH),
          loopTemplate: toRepoPath(LOOP_TEMPLATE_PATH),
        },
      },
      null,
      2,
    )}\n`,
  );
}

main();
