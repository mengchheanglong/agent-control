#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import {
  asArray,
  escapeRegExp,
  isFlagEnabled,
  localDateStamp,
  localTimestamp,
  normalizeLineEndings,
  parseArgs,
  readJson,
  requireArg,
  resolveRepoPath,
  toRepoPath,
  writeJsonOutput,
  writeOutput,
} from "./lib/agent-control-core.mjs";
import {
  DEFAULT_MEMORY_PATH,
  DEFAULT_STATE_PATH,
  appendMemorySection,
  auditMemoryText,
  compactMemoryText,
  initialMemoryText,
  rankNextMoves,
  readMemoryState,
  replaceMemorySection,
  validateMemoryText,
} from "./lib/memory-core.mjs";
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

function stopLineIds() {
  return readJson("policies/stop-line-cards.json").cards.map((card) => card.id);
}

function commandHelp() {
  process.stdout.write(`Agent Control CLI

Commands:
  help
  adoption-protocol
  preflight [--file <memory/path>]
  bootstrap --context <text> [--project-shape <text>] [--current-truth <text>] [--constraint <text>] [--next <text>] [--proof <cmd>] [--output <memory/path>] [--state-output <memory/path>] [--force]
  update-memory [--file <memory/path>] [--current-truth <text>] [--constraint <text>] [--decision <text>] [--suggestion <text>] [--open-question <text>] [--next <text>] [--proof <cmd>] [--recent-change <text>]
  show-memory [--file <path>]
  memory-state [--file <path>]
  sync-state [--file <memory/path>] [--output <memory/path>] [--force]
  show-next [--file <path>]
  score-next [--file <path>] [--candidate <text>]...
  audit-memory [--file <path>] [--max-bytes <number>]
  compact-memory [--file <memory/path>] [--max-items <number>]
  start-cycle --task <text> --lane <id> --why <text> --proof <cmd> --rollback <text> --stop-line <text> [--affected-layer <text>] [--mission <text>] [--output <logs/path>] [--force]
  close-cycle --file <logs/path> --result <text> --verification <cmd> --next <text> [--files-touched <text>] [--risks <text>]
  handoff --state <text> --completed <text> --next <text> [--risks <text>] [--output <logs/path>] [--force]
  analyze-logs [--logs-dir <path>]
  pack --output <dist/path> [--force]
  render-stop-lines [--check]
  stop-lines
`);
}

function commandAdoptionProtocol() {
  const protocol = {
    ok: true,
    purpose: "Agent-first setup for importing Agent Control into an existing or new project.",
    agentSteps: [
      "Inspect the host project before writing memory: README, package/config files, source tree, scripts, tests, and local docs.",
      "Draft project context, project shape, current truth, constraints, proof path, and one bounded next move from observed evidence.",
      "Ask the user one optional question: Any priority, constraint, or direction you want future agents to remember?",
      "Merge user-provided context above inferred context when there is tension.",
      "Run bootstrap with --context and concrete inferred fields, then run npm run check.",
    ],
    userQuestion: "I inferred the project context and next useful direction. Any priority, constraint, or direction you want future agents to remember?",
    commandShape:
      'npm run agent-control -- bootstrap --context "<user-confirmed or inferred context>" --project-shape "<observed shape>" --current-truth "<verified fact>" --constraint "<important boundary>" --next "<bounded next move>" --proof "<check command>"',
    rule: "The CLI records and validates; the AI agent does the project analysis.",
  };
  process.stdout.write(`${JSON.stringify(protocol, null, 2)}\n`);
}

function commandPreflight(args) {
  const checks = [];
  const cards = readJson("policies/stop-line-cards.json").cards;
  const stopLineTarget = resolveRepoPath("policies/stop-lines.md", { allowedRoots: ["policies"] });
  const stopLinesOk = normalizeLineEndings(fs.readFileSync(stopLineTarget, "utf8")) === normalizeLineEndings(renderStopLines(cards));
  checks.push({ name: "stop-lines-rendered", ok: stopLinesOk });

  const memoryFile = resolveRepoPath(args.file ?? DEFAULT_MEMORY_PATH);
  if (fs.existsSync(memoryFile)) {
    const memoryReport = auditMemoryText(memoryFile, fs.readFileSync(memoryFile, "utf8"), args);
    checks.push({ name: "memory-audit", ok: memoryReport.ok, report: memoryReport });
  } else if (args.file) {
    checks.push({ name: "memory-audit", ok: false, message: `${args.file} does not exist` });
  } else {
    checks.push({ name: "memory-audit", ok: true, skipped: true, message: "memory/project.md does not exist yet" });
  }

  const report = { ok: checks.every((check) => check.ok), checks };
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  if (!report.ok) {
    process.exitCode = 1;
  }
}

function commandBootstrap(args) {
  const output = args.output ?? DEFAULT_MEMORY_PATH;
  const stateOutput = args["state-output"] ?? DEFAULT_STATE_PATH;
  const force = isFlagEnabled(args.force);
  const memoryFile = resolveRepoPath(output, { allowedRoots: ["memory"] });
  const stateFile = resolveRepoPath(stateOutput, { allowedRoots: ["memory"] });
  if (!force) {
    for (const file of [memoryFile, stateFile]) {
      if (fs.existsSync(file)) {
        throw new Error(`${toRepoPath(file)} already exists; pass --force to replace it`);
      }
    }
  }
  writeOutput(initialMemoryText(args), output, {
    allowedRoots: ["memory"],
    force,
  });
  const text = fs.readFileSync(memoryFile, "utf8");
  const state = readMemoryState(memoryFile, text);
  writeJsonOutput(state.capsule, stateOutput, {
    allowedRoots: ["memory"],
    force,
  });
}

function commandUpdateMemory(args) {
  const file = memoryPath(args, { write: true });
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
  const requestedUpdates = [...appendOperations, ...replaceOperations].filter(([_sectionName, value]) => value);
  if (requestedUpdates.length === 0) {
    throw new Error("No memory updates requested");
  }

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
  process.stdout.write(`${toRepoPath(file)}\n`);
}

function commandShowMemory(args) {
  const file = memoryPath(args);
  const text = fs.readFileSync(file, "utf8");
  validateMemoryText(args.file ?? DEFAULT_MEMORY_PATH, text);
  process.stdout.write(text);
}

function commandMemoryState(args) {
  const file = memoryPath(args);
  const text = fs.readFileSync(file, "utf8");
  validateMemoryText(args.file ?? DEFAULT_MEMORY_PATH, text);
  process.stdout.write(`${JSON.stringify(readMemoryState(file, text), null, 2)}\n`);
}

function commandSyncState(args) {
  const file = memoryPath(args);
  const text = fs.readFileSync(file, "utf8");
  validateMemoryText(args.file ?? DEFAULT_MEMORY_PATH, text);
  const state = readMemoryState(file, text);
  writeJsonOutput(state.capsule, args.output ?? DEFAULT_STATE_PATH, {
    allowedRoots: ["memory"],
    force: isFlagEnabled(args.force),
  });
}

function commandShowNext(args) {
  const file = memoryPath(args);
  const text = fs.readFileSync(file, "utf8");
  validateMemoryText(args.file ?? DEFAULT_MEMORY_PATH, text);
  const state = readMemoryState(file, text);
  const report = {
    ok: true,
    file: state.file,
    nextBestMove: state.sections["Next Best Move"],
    proofPath: state.sections["Proof Path"],
    activeConstraints: state.sections["Active Constraints"],
    score: state.capsule.nextMoveScore,
    grade: state.capsule.nextMoveGrade,
  };
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
}

function commandScoreNext(args) {
  const file = memoryPath(args);
  const text = fs.readFileSync(file, "utf8");
  validateMemoryText(args.file ?? DEFAULT_MEMORY_PATH, text);
  const state = readMemoryState(file, text);
  const candidates = asArray(args.candidate).filter(Boolean);
  const ranked = rankNextMoves(candidates.length > 0 ? candidates : [state.sections["Next Best Move"]], {
    proof: state.sections["Proof Path"],
    constraints: state.sections["Active Constraints"],
  });
  process.stdout.write(`${JSON.stringify({ ok: true, file: state.file, recommended: ranked[0], ranked }, null, 2)}\n`);
}

function commandAuditMemory(args) {
  const file = memoryPath(args);
  const text = fs.readFileSync(file, "utf8");
  const report = auditMemoryText(file, text, args);
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  if (report.issues.length > 0) {
    process.exitCode = 1;
  }
}

function commandCompactMemory(args) {
  const file = memoryPath(args, { write: true });
  const text = fs.readFileSync(file, "utf8");
  validateMemoryText(args.file ?? DEFAULT_MEMORY_PATH, text);
  const maxItems = Number(args["max-items"] ?? 6);
  if (!Number.isInteger(maxItems) || maxItems <= 0) {
    throw new Error("--max-items must be a positive integer");
  }
  const updated = compactMemoryText(text, maxItems);
  fs.writeFileSync(file, updated);
  process.stdout.write(`${toRepoPath(file)}\n`);
}

function commandStopLines() {
  const cards = readJson("policies/stop-line-cards.json").cards;
  process.stdout.write(`${JSON.stringify({ ok: true, cards }, null, 2)}\n`);
}

function commandRenderStopLines(args) {
  const cards = readJson("policies/stop-line-cards.json").cards;
  const content = renderStopLines(cards);
  const target = resolveRepoPath("policies/stop-lines.md", { allowedRoots: ["policies"] });
  if (args.check) {
    const current = fs.readFileSync(target, "utf8");
    const ok = normalizeLineEndings(current) === normalizeLineEndings(content);
    process.stdout.write(`${JSON.stringify({ ok }, null, 2)}\n`);
    if (!ok) {
      process.exitCode = 1;
    }
    return;
  }
  fs.writeFileSync(target, content);
  process.stdout.write("policies/stop-lines.md\n");
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

  writeOutput(content, args.output, { allowedRoots: ["logs"], force: isFlagEnabled(args.force) });
}

function commandCloseCycle(args) {
  const file = resolveRepoPath(requireArg(args, "file"), { allowedRoots: ["logs"] });
  const text = fs.readFileSync(file, "utf8");
  for (const field of REQUIRED_CYCLE_FIELDS) {
    if (!hasFieldLine(text, field)) {
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
  process.stdout.write(`${toRepoPath(file)}\n`);
}

function replaceField(text, field, value) {
  const fieldIndex = REQUIRED_CYCLE_FIELDS.indexOf(field);
  if (fieldIndex < 0) {
    throw new Error(`Unknown cycle field ${field}`);
  }

  const fieldPattern = escapeRegExp(field);
  const nextField = REQUIRED_CYCLE_FIELDS[fieldIndex + 1];
  const nextBoundary = nextField ? `(?=\\r?\\n${escapeRegExp(nextField)}\\r?\\n)` : "$";

  if (fieldIndex === 0) {
    const pattern = new RegExp(`(^${fieldPattern}\\r?\\n)([\\s\\S]*?)${nextBoundary}`, "mu");
    return replaceRequiredMatch(text, pattern, (_match, heading) => `${heading}${value.trim()}\n`);
  }

  const previousField = REQUIRED_CYCLE_FIELDS[fieldIndex - 1];
  const pattern = new RegExp(
    `(^${escapeRegExp(previousField)}\\r?\\n[\\s\\S]*?\\r?\\n${fieldPattern}\\r?\\n)([\\s\\S]*?)${nextBoundary}`,
    "mu",
  );
  return replaceRequiredMatch(text, pattern, (_match, prefix) => `${prefix}${value.trim()}\n`);
}

function replaceRequiredMatch(text, pattern, replacer) {
  if (!pattern.test(text)) {
    throw new Error("Could not locate the requested field in canonical cycle order");
  }
  return text.replace(pattern, replacer);
}

function hasFieldLine(text, field) {
  return new RegExp(`^${escapeRegExp(field)}\\r?$`, "mu").test(text);
}

function memoryPath(args, options = {}) {
  const pathOptions = options.write ? { allowedRoots: ["memory"] } : {};
  return resolveRepoPath(args.file ?? DEFAULT_MEMORY_PATH, pathOptions);
}

function renderStopLines(cards) {
  const sections = cards.map((card) => `## ${card.title}

Card id: \`${card.id}\`

Use \`npm run agent-control -- stop-lines\` for allowed work, forbidden work, proof path, rollback path, and reopen criteria.
`).join("\n");
  return `# Stop-Lines

Generated from \`policies/stop-line-cards.json\`.

Do not hand-edit duplicated policy prose here. Update the card JSON, then run:

\`\`\`bash
npm run agent-control -- render-stop-lines
\`\`\`

${sections}`;
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

  const now = new Date();
  const dateStamp = localDateStamp(now);
  const output = args.output ?? `logs/${dateStamp.slice(0, 7)}/handoff-${localTimestamp(now)}.md`;
  writeOutput(content, output, { allowedRoots: ["logs"], force: isFlagEnabled(args.force) });
}

function commandAnalyzeLogs(args) {
  const logsDir = resolveRepoPath(args["logs-dir"] ?? "logs", { allowedRoots: ["logs"] });
  const files = fs.existsSync(logsDir) ? listMarkdownFiles(logsDir).filter(isHistoricalLogFile) : [];
  const report = {
    ok: true,
    logsDir: toRepoPath(logsDir) || ".",
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
    const repoPath = toRepoPath(file);

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

function commandPack(args) {
  const output = requireArg(args, "output");
  const outputDir = resolveRepoPath(output, { allowedRoots: ["dist"] });
  if (fs.existsSync(outputDir)) {
    if (!isFlagEnabled(args.force)) {
      throw new Error(`${toRepoPath(outputDir)} already exists; pass --force to replace it`);
    }
    fs.rmSync(outputDir, { recursive: true, force: true });
  }

  const manifest = readJson("authority.manifest.json");
  const files = Object.values(manifest.surfaces).flat();
  for (const file of files) {
    const source = resolveRepoPath(file);
    const target = path.join(outputDir, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(source, target);
  }

  process.stdout.write(`${JSON.stringify({ ok: true, output: toRepoPath(outputDir), files: files.length }, null, 2)}\n`);
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
  const repoPath = toRepoPath(file);
  return repoPath !== "logs/README.md";
}

function main() {
  const [command = "help", ...argv] = process.argv.slice(2);
  const args = parseArgs(argv);

  switch (command) {
    case "help":
      commandHelp();
      break;
    case "adoption-protocol":
      commandAdoptionProtocol();
      break;
    case "preflight":
      commandPreflight(args);
      break;
    case "bootstrap":
      commandBootstrap(args);
      break;
    case "update-memory":
      commandUpdateMemory(args);
      break;
    case "show-memory":
      commandShowMemory(args);
      break;
    case "memory-state":
      commandMemoryState(args);
      break;
    case "sync-state":
      commandSyncState(args);
      break;
    case "show-next":
      commandShowNext(args);
      break;
    case "score-next":
      commandScoreNext(args);
      break;
    case "audit-memory":
      commandAuditMemory(args);
      break;
    case "compact-memory":
      commandCompactMemory(args);
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
    case "pack":
      commandPack(args);
      break;
    case "render-stop-lines":
      commandRenderStopLines(args);
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
