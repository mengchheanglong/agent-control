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
  start-cycle --task <text> --lane <id> --why <text> --proof <cmd> --rollback <text> --stop-line <text> [--affected-layer <text>] [--mission <text>] [--output <path>]
  close-cycle --file <path> --result <text> --verification <cmd> --next <text> [--files-touched <text>] [--risks <text>]
  handoff --state <text> --completed <text> --next <text> [--risks <text>] [--output <path>]
  analyze-logs [--logs-dir <path>]
  stop-lines
`);
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
  const fieldPattern = field.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
  const nextFieldPattern = REQUIRED_CYCLE_FIELDS.filter((candidate) => candidate !== field)
    .map((candidate) => candidate.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&"))
    .join("|");
  const pattern = new RegExp(`(${fieldPattern}\\n)([\\s\\S]*?)(?=\\n(?:${nextFieldPattern})|$)`, "u");
  return text.replace(pattern, `$1${value.trim()}\n`);
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
