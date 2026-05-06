#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const REQUIRED_CYCLE_FIELDS = [
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
const DEFAULT_MEMORY_PATH = "memory/project.md";
const MEMORY_SECTION_NAMES = [
  "Goal",
  "Project Shape",
  "Current Truth",
  "Active Constraints",
  "Decisions",
  "Suggestions Inbox",
  "Open Questions",
  "Next Best Move",
  "Proof Path",
  "Recent Changes",
];
const REQUIRED_MEMORY_HEADINGS = [
  "# Project Memory",
  ...MEMORY_SECTION_NAMES.map((sectionName) => `## ${sectionName}`),
];

function parseArgs(argv) {
  const args = {
    _: [],
  };

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (!value.startsWith("--")) {
      args._.push(value);
      continue;
    }

    const key = value.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
      continue;
    }

    args[key] = next;
    index += 1;
  }

  return args;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function ensureParent(filePath) {
  fs.mkdirSync(path.dirname(filePath), {
    recursive: true,
  });
}

function writeOutput(content, outputPath) {
  if (!outputPath) {
    process.stdout.write(content);
    return;
  }

  const resolvedPath = path.resolve(ROOT, outputPath);
  ensureParent(resolvedPath);
  fs.writeFileSync(resolvedPath, content);
  process.stdout.write(`${path.relative(ROOT, resolvedPath).replace(/\\/g, "/")}\n`);
}

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, relativePath), "utf8"));
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}

function stopLineIds() {
  return readJson("policies/stop-line-cards.json").cards.map((card) => card.id);
}

function requireArg(args, key) {
  if (!args[key]) {
    throw new Error(`Missing required --${key}`);
  }
  return args[key];
}

function commandHelp() {
  process.stdout.write(`Agent Control CLI

Commands:
  help
  init-memory --goal <text> [--project-shape <text>] [--current-truth <text>] [--constraints <text>] [--next <text>] [--proof <cmd>] [--output <path>] [--force]
  update-memory [--file <path>] [--current-truth <text>] [--constraint <text>] [--decision <text>] [--suggestion <text>] [--open-question <text>] [--next <text>] [--proof <cmd>] [--recent-change <text>]
  show-memory [--file <path>]
  show-next [--file <path>]
  start-cycle --task <text> --lane <id> --why <text> --proof <cmd> --rollback <text> --stop-line <text> [--affected-layer <text>] [--mission <text>] [--output <path>]
  close-cycle --file <path> --result <text> --verification <cmd> --next <text> [--files-touched <text>] [--risks <text>]
  handoff --state <text> --completed <text> --next <text> [--risks <text>] [--output <path>]
  analyze-logs [--logs-dir <path>]
  stop-lines
`);
}

function commandInitMemory(args) {
  const outputPath = path.resolve(ROOT, args.output ?? DEFAULT_MEMORY_PATH);
  if (fs.existsSync(outputPath) && !args.force) {
    throw new Error(`${path.relative(ROOT, outputPath).replace(/\\/g, "/")} already exists; pass --force to replace it`);
  }

  const content = `# Project Memory

## Goal

${requireArg(args, "goal")}

## Project Shape

${args["project-shape"] ?? "TBD"}

## Current Truth

${formatMemoryList(args["current-truth"])}

## Active Constraints

${formatMemoryList(args.constraints)}

## Decisions

No accepted decisions recorded yet.

## Suggestions Inbox

No pending suggestions recorded yet.

## Open Questions

No open questions recorded yet.

## Next Best Move

${args.next ?? "TBD"}

## Proof Path

${args.proof ?? "TBD"}

## Recent Changes

No recent changes recorded yet.
`;

  ensureParent(outputPath);
  fs.writeFileSync(outputPath, content);
  process.stdout.write(`${path.relative(ROOT, outputPath).replace(/\\/g, "/")}\n`);
}

function commandUpdateMemory(args) {
  const file = memoryPath(args);
  const text = fs.readFileSync(file, "utf8");
  validateMemoryText(args.file ?? DEFAULT_MEMORY_PATH, text);

  let updated = text;
  const appendOperations = [
    ["Current Truth", args["current-truth"]],
    ["Active Constraints", args.constraint],
    ["Decisions", args.decision],
    ["Suggestions Inbox", args.suggestion],
    ["Open Questions", args["open-question"]],
    ["Recent Changes", args["recent-change"]],
  ];
  const replaceOperations = [
    ["Next Best Move", args.next],
    ["Proof Path", args.proof],
  ];

  for (const [sectionName, value] of appendOperations) {
    if (value) {
      updated = appendMemorySection(updated, sectionName, value);
    }
  }

  for (const [sectionName, value] of replaceOperations) {
    if (value) {
      updated = replaceMemorySection(updated, sectionName, value);
    }
  }

  fs.writeFileSync(file, updated);
  process.stdout.write(`${path.relative(ROOT, file).replace(/\\/g, "/")}\n`);
}

function commandShowMemory(args) {
  const file = memoryPath(args);
  const text = fs.readFileSync(file, "utf8");
  validateMemoryText(args.file ?? DEFAULT_MEMORY_PATH, text);
  process.stdout.write(text);
}

function commandShowNext(args) {
  const file = memoryPath(args);
  const text = fs.readFileSync(file, "utf8");
  validateMemoryText(args.file ?? DEFAULT_MEMORY_PATH, text);
  const report = {
    ok: true,
    file: path.relative(ROOT, file).replace(/\\/g, "/"),
    nextBestMove: readMemorySection(text, "Next Best Move").trim(),
    proofPath: readMemorySection(text, "Proof Path").trim(),
    activeConstraints: readMemorySection(text, "Active Constraints").trim(),
  };
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
}

function commandStopLines() {
  const cards = readJson("policies/stop-line-cards.json").cards;
  process.stdout.write(`${JSON.stringify({ ok: true, cards }, null, 2)}\n`);
}

function commandStartCycle(args) {
  const lane = requireArg(args, "lane");
  const ids = stopLineIds();
  if (!ids.includes(lane)) {
    throw new Error(`Unknown --lane ${lane}. Known lanes: ${ids.join(", ")}`);
  }

  const content = `# Cycle Entry

Cycle ${args.cycle ?? "N"}

Chosen task:
${requireArg(args, "task")}

Why it won:
${requireArg(args, "why")}

Affected layer:
${args["affected-layer"] ?? "TBD"}

Owning lane:
${lane}

Mission usefulness:
${args.mission ?? "TBD"}

Proof path:
${requireArg(args, "proof")}

Rollback path:
${requireArg(args, "rollback")}

Stop-line:
${requireArg(args, "stop-line")}

Files touched:
TBD

Verification run:
TBD

Result:
TBD

Next likely move:
TBD

Risks / notes:
TBD
`;

  writeOutput(content, args.output);
}

function commandCloseCycle(args) {
  const file = path.resolve(ROOT, requireArg(args, "file"));
  const text = fs.readFileSync(file, "utf8");
  for (const field of REQUIRED_CYCLE_FIELDS) {
    if (!text.includes(field)) {
      throw new Error(`${args.file} is missing required field ${field}`);
    }
  }

  const replacements = new Map([
    ["Files touched:", args["files-touched"]],
    ["Verification run:", requireArg(args, "verification")],
    ["Result:", requireArg(args, "result")],
    ["Next likely move:", requireArg(args, "next")],
    ["Risks / notes:", args.risks],
  ]);

  let updated = text;
  for (const [field, value] of replacements.entries()) {
    if (!value) {
      continue;
    }
    updated = replaceField(updated, field, value);
  }

  fs.writeFileSync(file, updated);
  process.stdout.write(`${path.relative(ROOT, file).replace(/\\/g, "/")}\n`);
}

function replaceField(text, field, value) {
  const fieldPattern = escapeRegExp(field);
  const nextFieldPattern = REQUIRED_CYCLE_FIELDS.filter((candidate) => candidate !== field)
    .map((candidate) => escapeRegExp(candidate))
    .join("|");
  const pattern = new RegExp(`(${fieldPattern}\\n)([\\s\\S]*?)(?=\\n(?:${nextFieldPattern})|$)`, "u");
  return text.replace(pattern, (_match, heading) => `${heading}${value.trim()}\n`);
}

function memoryPath(args) {
  return path.resolve(ROOT, args.file ?? DEFAULT_MEMORY_PATH);
}

function validateMemoryText(label, text) {
  for (const heading of REQUIRED_MEMORY_HEADINGS) {
    if (!new RegExp(`^${escapeRegExp(heading)}$`, "mu").test(text)) {
      throw new Error(`${label} is missing required memory heading ${heading}`);
    }
  }
}

function formatMemoryList(value) {
  return value ? `- ${value}` : "TBD";
}

function appendMemorySection(text, sectionName, value) {
  const current = readMemorySection(text, sectionName).trim();
  const replacement = isEmptyMemoryPlaceholder(current) ? `- ${value}` : `${current}\n- ${value}`;
  return replaceMemorySection(text, sectionName, replacement);
}

function replaceMemorySection(text, sectionName, value) {
  const pattern = memorySectionPattern(sectionName);
  return text.replace(pattern, (_match, heading) => `${heading}${value.trim()}\n`);
}

function readMemorySection(text, sectionName) {
  const match = text.match(memorySectionPattern(sectionName));
  return match?.[2] ?? "";
}

function memorySectionPattern(sectionName) {
  return new RegExp(`((?:^|\\n)## ${escapeRegExp(sectionName)}\\n\\n)([\\s\\S]*?)(?=\\n## [^\\n]+\\n|$)`, "u");
}

function isEmptyMemoryPlaceholder(value) {
  return value === "TBD" || /^No .* recorded yet\.$/u.test(value);
}

function commandHandoff(args) {
  const content = `# Handoff

## Current state

- ${requireArg(args, "state")}

## Completed in this run

- ${requireArg(args, "completed")}

## Next honest move

- ${requireArg(args, "next")}

## Risks / notes

- ${args.risks ?? "No additional risks recorded."}
`;

  const output = args.output ?? `logs/${today().slice(0, 7)}/handoff-${today()}.md`;
  writeOutput(content, output);
}

function commandAnalyzeLogs(args) {
  const logsDir = path.resolve(ROOT, args["logs-dir"] ?? "logs");
  const files = fs.existsSync(logsDir) ? listMarkdownFiles(logsDir).filter(isHistoricalLogFile) : [];
  const report = {
    ok: true,
    logsDir: path.relative(ROOT, logsDir).replace(/\\/g, "/") || ".",
    filesScanned: files.length,
    cycleEntries: 0,
    loopRuns: 0,
    missingRequiredFields: [],
    failedVerificationMentions: [],
    oversizedScopeSignals: [],
    staleNextMoveSignals: [],
  };

  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    const repoPath = path.relative(ROOT, file).replace(/\\/g, "/");

    if (/^Cycle \d+|^# Cycle Entry/mu.test(text)) {
      report.cycleEntries += 1;
      for (const field of REQUIRED_CYCLE_FIELDS) {
        if (!text.includes(field)) {
          report.missingRequiredFields.push({ file: repoPath, field });
        }
      }
    }

    if (/^# Loop-Run Template|^## Batched loop run/mu.test(text)) {
      report.loopRuns += 1;
    }

    if (/\b(failed|error|did not pass)\b/iu.test(text)) {
      report.failedVerificationMentions.push(repoPath);
    }

    if (/\b(full runtime|orchestrator|multi-service|cross-repo mutation|broad redesign)\b/iu.test(text)) {
      report.oversizedScopeSignals.push(repoPath);
    }

    if (/Next likely move:\s*(?:TBD|unknown|none yet)/iu.test(text)) {
      report.staleNextMoveSignals.push(repoPath);
    }
  }

  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
}

function listMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, {
    withFileTypes: true,
  });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return listMarkdownFiles(fullPath);
    }
    return entry.isFile() && entry.name.endsWith(".md") ? [fullPath] : [];
  });
}

function isHistoricalLogFile(file) {
  const repoPath = path.relative(ROOT, file).replace(/\\/g, "/");
  return repoPath !== "logs/README.md";
}

function main() {
  const [command = "help", ...argv] = process.argv.slice(2);
  const args = parseArgs(argv);

  switch (command) {
    case "help":
      commandHelp();
      break;
    case "init-memory":
      commandInitMemory(args);
      break;
    case "update-memory":
      commandUpdateMemory(args);
      break;
    case "show-memory":
      commandShowMemory(args);
      break;
    case "show-next":
      commandShowNext(args);
      break;
    case "start-cycle":
      commandStartCycle(args);
      break;
    case "close-cycle":
      commandCloseCycle(args);
      break;
    case "handoff":
      commandHandoff(args);
      break;
    case "analyze-logs":
      commandAnalyzeLogs(args);
      break;
    case "stop-lines":
      commandStopLines();
      break;
    default:
      throw new Error(`Unknown command ${command}`);
  }
}

try {
  main();
} catch (error) {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
}
