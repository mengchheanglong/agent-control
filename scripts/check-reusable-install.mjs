import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function shouldCopy(src) {
  const relativePath = path.relative(ROOT, src).replace(/\\/g, "/");
  const parts = relativePath.split("/");
  return !parts.includes(".git") && !parts.includes("node_modules") && !parts.includes(".DS_Store");
}

function main() {
  const tempParent = fs.mkdtempSync(path.join(os.tmpdir(), "agent-control-reuse-"));
  const tempRepo = path.join(tempParent, "agent-control");

  try {
    fs.cpSync(ROOT, tempRepo, {
      recursive: true,
      filter: shouldCopy,
    });

    const npmExecPath = process.env.npm_execpath;
    const command = npmExecPath ? process.execPath : "npm";
    const commandArgs = npmExecPath
      ? [npmExecPath, "run", "check:agent-control"]
      : ["run", "check:agent-control"];
    const result = spawnSync(command, commandArgs, {
      cwd: tempRepo,
      encoding: "utf8",
    });

    assert.ifError(result.error);
    assert.equal(result.status, 0, result.stdout + result.stderr);

    process.stdout.write(
      `${JSON.stringify(
        {
          ok: true,
          copiedTo: tempRepo,
          command: "npm run check:agent-control",
        },
        null,
        2,
      )}\n`,
    );
  } finally {
    fs.rmSync(tempParent, {
      recursive: true,
      force: true,
    });
  }
}

main();
