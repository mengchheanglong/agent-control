import fs from "node:fs";
import path from "node:path";
import { asArray, escapeRegExp, toRepoPath } from "./agent-control-core.mjs";

export const DEFAULT_MEMORY_PATH = "memory/project.md";
export const DEFAULT_STATE_PATH = "memory/state.json";

export const MEMORY_SECTION_NAMES = [
  "Project Context",
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

export const REQUIRED_MEMORY_HEADINGS = [
  "# Project Memory",
  ...MEMORY_SECTION_NAMES.map((sectionName) => `## ${sectionName}`),
];

const LIST_SECTIONS = new Set([
  "Current Truth",
  "Active Constraints",
  "Decisions",
  "Suggestions Inbox",
  "Open Questions",
  "Recent Changes",
]);

export function initialMemoryText(args) {
  const proof = args.proof ?? detectProofCommand();
  const next = args.next ?? "Run the first bounded implementation or investigation step, then update project memory.";

  return `# Project Memory

## Project Context

${requireText(args.context, "context")}

## Project Shape

${args["project-shape"] ?? "TBD"}

## Current Truth

${formatMemoryList(args["current-truth"])}

## Active Constraints

${formatMemoryList(args.constraint)}

## Decisions

No accepted decisions recorded yet.

## Suggestions Inbox

${formatMemoryListOrPlaceholder(args.suggestion, "No pending suggestions recorded yet.")}

## Open Questions

${formatMemoryListOrPlaceholder(args["open-question"], "No open questions recorded yet.")}

## Next Best Move

${next}

## Proof Path

${proof}

## Recent Changes

No recent changes recorded yet.
`;
}

export function validateMemoryText(label, text) {
  for (const heading of REQUIRED_MEMORY_HEADINGS) {
    if (!new RegExp(`^${escapeRegExp(heading)}$`, "mu").test(text)) {
      throw new Error(`${label} is missing required memory heading ${heading}`);
    }
  }
}

export function appendMemorySection(text, sectionName, value) {
  const current = readMemorySection(text, sectionName).trim();
  const entries = asArray(value).filter(Boolean).map((entry) => `- ${entry}`);
  const replacement = isEmptyMemoryPlaceholder(current) ? entries.join("\n") : [current, ...entries].join("\n");
  return replaceMemorySection(text, sectionName, replacement);
}

export function replaceMemorySection(text, sectionName, value) {
  const pattern = memorySectionPattern(sectionName);
  return text.replace(pattern, (_match, heading) => `${heading}${String(value).trim()}\n`);
}

export function readMemoryState(file, text) {
  const sections = Object.fromEntries(MEMORY_SECTION_NAMES.map((sectionName) => [sectionName, readMemorySection(text, sectionName).trim()]));
  return {
    schemaVersion: 2,
    kind: "project-memory",
    file: toRepoPath(file),
    capsule: buildContextCapsule(file, sections),
    sections,
  };
}

export function buildContextCapsule(file, sections) {
  const nextScore = scoreNextMove(sections["Next Best Move"], {
    proof: sections["Proof Path"],
    constraints: sections["Active Constraints"],
  });
  return {
    schemaVersion: 1,
    source: toRepoPath(file),
    projectContext: compactLine(sections["Project Context"]),
    projectShape: compactLine(sections["Project Shape"]),
    nextBestMove: compactLine(sections["Next Best Move"]),
    proofPath: compactLine(sections["Proof Path"]),
    activeConstraints: listItems(sections["Active Constraints"]),
    decisions: listItems(sections.Decisions),
    openQuestionCount: countListItems(sections["Open Questions"]),
    suggestionCount: countListItems(sections["Suggestions Inbox"]),
    recentChangeCount: countListItems(sections["Recent Changes"]),
    nextMoveScore: nextScore.score,
    nextMoveGrade: gradeScore(nextScore.score),
  };
}

export function auditMemoryText(file, text, args = {}) {
  validateMemoryText(toRepoPath(file), text);

  const maxBytes = Number(args["max-bytes"] ?? 6000);
  if (!Number.isInteger(maxBytes) || maxBytes <= 0) {
    throw new Error("--max-bytes must be a positive integer");
  }

  const state = readMemoryState(file, text);
  const sections = state.sections;
  const issues = [];
  if (Buffer.byteLength(text, "utf8") > maxBytes) {
    issues.push({ code: "too-large", message: `memory exceeds ${maxBytes} bytes` });
  }
  for (const sectionName of ["Project Context", "Project Shape", "Current Truth", "Active Constraints", "Next Best Move", "Proof Path"]) {
    if (isEmptyMemoryPlaceholder(sections[sectionName])) {
      issues.push({ code: "placeholder", section: sectionName, message: `${sectionName} is still a placeholder` });
    }
  }
  for (const sectionName of LIST_SECTIONS) {
    if (longestListItemLength(sections[sectionName]) > 220) {
      issues.push({ code: "long-list-item", section: sectionName, message: `${sectionName} has a list item over 220 characters` });
    }
  }
  if (countListItems(sections["Suggestions Inbox"]) > 8) {
    issues.push({ code: "suggestion-bloat", section: "Suggestions Inbox", message: "suggestions inbox has more than 8 items" });
  }
  if (countListItems(sections["Open Questions"]) > 8) {
    issues.push({ code: "question-bloat", section: "Open Questions", message: "open questions has more than 8 items" });
  }
  if (!hasConcreteProof(sections["Proof Path"])) {
    issues.push({ code: "weak-proof", section: "Proof Path", message: "proof path does not name a concrete check or verification method" });
  }
  if (scoreNextMove(sections["Next Best Move"], { proof: sections["Proof Path"], constraints: sections["Active Constraints"] }).score < 55) {
    issues.push({ code: "weak-next-move", section: "Next Best Move", message: "next move is too broad, vague, risky, or weakly verifiable" });
  }

  return {
    ok: issues.length === 0,
    file: toRepoPath(file),
    bytes: Buffer.byteLength(text, "utf8"),
    maxBytes,
    capsule: state.capsule,
    issues,
  };
}

export function compactMemoryText(text, maxItems = 6) {
  let updated = text;
  for (const sectionName of LIST_SECTIONS) {
    const current = readMemorySection(updated, sectionName).trim();
    const items = listItems(current);
    if (items.length <= maxItems) {
      continue;
    }
    const kept = sectionName === "Recent Changes" ? items.slice(-maxItems) : items.slice(0, maxItems);
    updated = replaceMemorySection(updated, sectionName, kept.map((item) => `- ${item}`).join("\n"));
  }
  return updated;
}

export function rankNextMoves(candidates, context = {}) {
  return candidates
    .map((candidate) => scoreNextMove(candidate, context))
    .sort((left, right) => right.score - left.score || left.candidate.localeCompare(right.candidate));
}

export function scoreNextMove(candidate, context = {}) {
  const text = String(candidate ?? "").trim();
  let score = 40;
  const reasons = [];

  if (text.length >= 20 && text.length <= 180) {
    score += 12;
    reasons.push("bounded size");
  } else if (text.length > 180) {
    score -= 10;
    reasons.push("too long");
  } else {
    score -= 12;
    reasons.push("too vague");
  }

  if (/\b(fix|add|remove|refactor|test|verify|document|split|audit|bootstrap|compact|score|update|sync|choose|run)\b/iu.test(text)) {
    score += 10;
    reasons.push("actionable verb");
  }
  if (/\b(all|entire|everything|perfect|full redesign|orchestrator|multi-service)\b/iu.test(text)) {
    score -= 18;
    reasons.push("oversized wording");
  }
  if (/\b(file|command|test|check|script|template|memory|policy|manifest|README|AGENTS)\b/iu.test(text)) {
    score += 8;
    reasons.push("concrete surface");
  }
  if (hasConcreteProof(context.proof ?? "")) {
    score += 15;
    reasons.push("concrete proof path");
  }
  if (context.constraints && overlapsImportantWords(text, context.constraints)) {
    score += 6;
    reasons.push("matches active constraints");
  }
  if (/\b(TBD|unknown|later|maybe|somehow)\b/iu.test(text)) {
    score -= 12;
    reasons.push("uncertain wording");
  }

  score = Math.max(0, Math.min(100, score));
  return {
    candidate: text,
    score,
    grade: gradeScore(score),
    reasons,
  };
}

export function formatMemoryList(value) {
  const values = asArray(value).filter(Boolean);
  return values.length > 0 ? values.map((entry) => `- ${entry}`).join("\n") : "TBD";
}

function formatMemoryListOrPlaceholder(value, placeholder) {
  const values = asArray(value).filter(Boolean);
  return values.length > 0 ? values.map((entry) => `- ${entry}`).join("\n") : placeholder;
}

export function countListItems(value) {
  return listItems(value).length;
}

function readMemorySection(text, sectionName) {
  const match = text.match(memorySectionPattern(sectionName));
  return match?.[2] ?? "";
}

function memorySectionPattern(sectionName) {
  return new RegExp(`((?:^|\\r?\\n)## ${escapeRegExp(sectionName)}\\r?\\n\\r?\\n)([\\s\\S]*?)(?=\\r?\\n## [^\\r\\n]+\\r?\\n|$)`, "u");
}

function isEmptyMemoryPlaceholder(value) {
  return value === "TBD" || /^No .* recorded yet\.$/u.test(value);
}

function hasConcreteProof(value) {
  return /\b(npm|pnpm|yarn|node|pytest|cargo|go test|test|check|verify|manual)\b/iu.test(value);
}

function listItems(value) {
  return String(value ?? "")
    .split(/\r?\n/u)
    .map((line) => line.trim())
    .filter((line) => /^-\s+/u.test(line))
    .map((line) => line.replace(/^-\s+/u, "").trim())
    .filter(Boolean);
}

function longestListItemLength(value) {
  return Math.max(0, ...listItems(value).map((item) => item.length));
}

function compactLine(value) {
  return String(value ?? "").replace(/\s+/gu, " ").trim();
}

function overlapsImportantWords(candidate, constraints) {
  const words = new Set(
    String(constraints)
      .toLowerCase()
      .match(/[a-z0-9][a-z0-9-]{3,}/gu) ?? [],
  );
  return (String(candidate).toLowerCase().match(/[a-z0-9][a-z0-9-]{3,}/gu) ?? []).some((word) => words.has(word));
}

function gradeScore(score) {
  if (score >= 85) {
    return "strong";
  }
  if (score >= 70) {
    return "good";
  }
  if (score >= 55) {
    return "weak";
  }
  return "poor";
}

function detectProofCommand() {
  const packagePath = path.join(process.cwd(), "package.json");
  if (!fs.existsSync(packagePath)) {
    return "manual verification";
  }
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  if (packageJson.scripts?.check) {
    return "npm run check";
  }
  if (packageJson.scripts?.test) {
    return "npm test";
  }
  return "manual verification";
}

function requireText(value, key) {
  if (!value) {
    throw new Error(`Missing required --${key}`);
  }
  return value;
}
