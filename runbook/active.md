# Active Runbook

## Run Purpose

Agent Control is a repo-local operating surface for bounded agent work. It is agent-first: the AI agent analyzes the host project, asks the user for optional extra context, and uses the CLI only to record and validate durable state.

If this repo was just cloned or imported into a host project, do not stop at clone completion. Immediately run the adoption protocol, inspect the host project, ask the one optional context question, bootstrap memory, and run the checks.

Before substantive work, read:
1. `README.md`
2. `implement.md`
3. `runbook/active.md`
4. `runbook/current-priority.md`
5. relevant files under `policies/`

Then refresh repo truth from code and records before changing anything.

## Scope

In scope:
- bounded workflow, loop, verification, memory, logging, and handoff helpers
- docs, templates, cards, and scripts that keep those helpers aligned
- project memory via `memory/project.md` in imported projects
- generated context capsule via `memory/state.json` for tools that need stable state
- agent-first adoption where inferred project context is checked with one optional user question

Out of scope:
- full agent runtimes or orchestrators
- hidden loops or unbounded automation
- sibling-repo or hidden workspace assumptions
- treating archived logs as current doctrine

## Instruction Priority

Use this order:
1. current user instruction
2. `README.md`
3. `implement.md`
4. `runbook/active.md`
5. nearest local docs
6. code truth

## Verification

Never claim success without evidence.

Prefer targeted checks first, then broader validation:

```bash
npm run check
npm run preflight
npm run check:agent-control
npm run check:reusable
npm run agent-control -- analyze-logs
```

If verification fails, fix the bounded slice if practical. Otherwise stop and report the failed boundary.

## Operating Helpers

- `npm run agent-control -- update-memory`: update durable memory state
- `npm run agent-control -- bootstrap`: create memory and state capsule for first import
- `npm run agent-control -- adoption-protocol`: print the import protocol for agents
- `npm run agent-control -- preflight`: gate generated policy alignment and memory quality
- `npm run agent-control -- memory-state`: inspect memory as structured JSON
- `npm run agent-control -- sync-state`: refresh `memory/state.json`
- `npm run agent-control -- show-next`: inspect next move and proof path
- `npm run agent-control -- score-next`: compare candidate next moves
- `npm run agent-control -- audit-memory`: check memory quality before continuing
- `npm run agent-control -- compact-memory`: prune stale memory list entries
- `npm run agent-control -- start-cycle`: scaffold a cycle record
- `npm run agent-control -- close-cycle`: close a cycle record with proof/result
- `npm run agent-control -- handoff`: create a handoff under `logs/`
- `npm run agent-control -- stop-lines`: inspect stop-line cards
- `npm run agent-control -- render-stop-lines`: regenerate stop-line Markdown from cards
- `npm run agent-control -- analyze-logs`: scan historical logs
- `npm run agent-control -- pack`: emit a minimal import copy under `dist/`

Helpers enforce fields and paths. They do not replace judgment.

## Change Discipline

Keep edits minimal, coherent, reversible, and evidence-based.

Do not silently broaden scope, redesign adjacent systems, mutate unrelated records, or create drift between instructions, templates, cards, and code.

Project memory is not a transcript. Store only durable project context, current truth, constraints, decisions, suggestions, questions, recent changes, next best move, and proof path. Regenerate `memory/state.json` when tools need a compact machine-readable context capsule.
