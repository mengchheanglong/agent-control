import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

export function parseArgs(argv) {
  const args = {};

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (!value.startsWith("--")) {
      throw new Error(`Unexpected positional argument: ${value}`);
    }

    const key = value.slice(2);
    const next = argv[index + 1];
    const parsedValue = !next || next.startsWith("--") ? true : next;
    if (Object.hasOwn(args, key)) {
      args[key] = [...asArray(args[key]), parsedValue];
    } else {
      args[key] = parsedValue;
    }

    if (parsedValue === true) {
      continue;
    }
    index += 1;
  }

  return args;
}

export function asArray(value) {
  if (value === undefined) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

export function localDateStamp(date) {
  return `${date.getFullYear()}-${padDatePart(date.getMonth() + 1)}-${padDatePart(date.getDate())}`;
}

export function localTimestamp(date) {
  return [
    localDateStamp(date),
    "T",
    padDatePart(date.getHours()),
    "-",
    padDatePart(date.getMinutes()),
    "-",
    padDatePart(date.getSeconds()),
  ].join("");
}

export function ensureParent(filePath) {
  fs.mkdirSync(path.dirname(filePath), {
    recursive: true,
  });
}

export function writeOutput(content, outputPath, options = {}) {
  if (!outputPath) {
    process.stdout.write(content);
    return;
  }

  const resolvedPath = resolveRepoPath(outputPath, options);
  if (fs.existsSync(resolvedPath) && !options.force) {
    throw new Error(`${toRepoPath(resolvedPath)} already exists; pass --force to replace it`);
  }
  ensureParent(resolvedPath);
  fs.writeFileSync(resolvedPath, content);
  process.stdout.write(`${toRepoPath(resolvedPath)}\n`);
}

export function writeJsonOutput(value, outputPath, options = {}) {
  writeOutput(`${JSON.stringify(value, null, 2)}\n`, outputPath, options);
}

export function resolveRepoPath(inputPath, options = {}) {
  const resolvedPath = path.resolve(ROOT, inputPath);
  const relativePath = path.relative(ROOT, resolvedPath);
  if (relativePath !== "" && (relativePath.startsWith("..") || path.isAbsolute(relativePath))) {
    throw new Error(`Path must stay inside the repo: ${inputPath}`);
  }

  const allowedRoots = options.allowedRoots ?? [];
  if (allowedRoots.length === 0) {
    return resolvedPath;
  }

  const repoPath = relativePath.replace(/\\/g, "/");
  const isAllowed = allowedRoots.some((allowedRoot) => repoPath === allowedRoot || repoPath.startsWith(`${allowedRoot}/`));
  if (!isAllowed) {
    throw new Error(`Path must stay under ${allowedRoots.join(" or ")}: ${inputPath}`);
  }

  return resolvedPath;
}

export function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, relativePath), "utf8"));
}

export function normalizeLineEndings(value) {
  return value.replace(/\r\n/gu, "\n");
}

export function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}

export function requireArg(args, key) {
  if (!args[key]) {
    throw new Error(`Missing required --${key}`);
  }
  return args[key];
}

export function isFlagEnabled(value) {
  return value === true || value === "true" || value === "1" || value === "yes";
}

export function toRepoPath(filePath) {
  return path.relative(ROOT, filePath).replace(/\\/g, "/");
}

function padDatePart(value) {
  return String(value).padStart(2, "0");
}
