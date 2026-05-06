# Agent Control

Agent Control is a self-contained repo for improving agent workflow, bounded loops, verification discipline, and handoff quality.

It is designed as an agent-first operating surface rather than a framework: clear runbooks, explicit stop-lines, reusable templates, and a repo-local check that keeps the authority docs aligned.

## Copy This Prompt

Use this short prompt in the host project:

```text
Clone https://github.com/mengchheanglong/agent-control.git and follow its AGENTS.md.
```

## Agent-First Adoption

If this repo has just been cloned or imported into a host project, do not stop after cloning.

When this repo is imported into another project, the AI agent should inspect the host project first, infer the project context and proof path, then ask the user one optional question:

```text
I inferred the project context and next useful direction. Any priority, constraint, or direction you want future agents to remember?
```

Then the agent records the result with `bootstrap --context`. The CLI should stay non-interactive and dependency-free; the agent does the analysis.

By default, add `agent-control/` to the host project's `.gitignore` after cloning. Do not overwrite existing ignore rules. Skip this only when the user explicitly wants to vendor Agent Control into the host repo.

Minimum post-clone sequence:

```bash
npm run agent-control -- adoption-protocol
# from the host project root, add agent-control/ to .gitignore unless vendoring
npm run agent-control -- bootstrap --context "..." --project-shape "..." --current-truth "..." --constraint "..." --next "..." --proof "..."
npm run check
```

## What lives here

- `AGENTS.md`: thin discovery bridge for tools that look for agent instructions
- `authority.manifest.json`: structured map of authority surfaces, commands, and drift boundaries
- `implement.md`: thin entrypoint into the active guidance
- `runbook/`: live operating guidance and current priority
- `policies/`: stable guardrails, continuation rules, logging rules, and stop-line cards
- `templates/`: reusable cycle, loop-run, and handoff formats
- `templates/project-memory.md`: compact project memory template for imported projects
- `memory/`: guidance for keeping `memory/project.md` and generated `memory/state.json` as active agent memory in imported projects
- `logs/`: optional run history for the project using this repo
- `scripts/`: lightweight validation and operating helpers, including `scripts/agent-control.mjs`

## Quick start

1. Read `implement.md`.
2. Read `runbook/active.md`.
3. Read `runbook/current-priority.md`.
4. Read `policies/stop-lines.md`, `policies/continuation-rules.md`, and `policies/logging-rules.md`.
5. Inspect `policies/stop-line-cards.json` when choosing an owning lane.
6. Run `npm run check`.

## Operating helpers

- `npm run agent-control -- help`: list available helper commands
- `npm run agent-control -- adoption-protocol`: print the agent-first import protocol
- `npm run agent-control -- preflight`: run the lightweight workflow gate for generated policies and memory quality
- `npm run agent-control -- bootstrap --context "..."`: create project memory and a machine-readable context capsule for a newly imported project
- `npm run agent-control -- update-memory`: add durable truth, decisions, suggestions, questions, recent changes, next move, and proof path
- `npm run agent-control -- show-memory`: print the active project memory
- `npm run agent-control -- memory-state`: print project memory plus the context capsule as structured JSON
- `npm run agent-control -- sync-state`: regenerate `memory/state.json` from `memory/project.md`
- `npm run agent-control -- show-next`: print the next best move, proof path, and active constraints from project memory
- `npm run agent-control -- score-next`: rank candidate next moves by scope, proof strength, specificity, and constraint fit
- `npm run agent-control -- audit-memory`: check memory for placeholders, bloat, and weak proof paths
- `npm run agent-control -- compact-memory`: trim bloated list sections while preserving durable state
- `npm run agent-control -- start-cycle`: scaffold a bounded cycle entry
- `npm run agent-control -- close-cycle`: fill verification, result, next move, and risk fields in a cycle entry
- `npm run agent-control -- handoff`: create a concise handoff record under `logs/YYYY-MM/`
- `npm run agent-control -- analyze-logs`: scan logs for missing fields, failed verification mentions, oversized-scope signals, and stale next moves
- `npm run agent-control -- pack`: copy the minimal import profile under `dist/`
- `npm run agent-control -- render-stop-lines`: regenerate `policies/stop-lines.md` from stop-line cards
- `npm run agent-control -- stop-lines`: print the active stop-line cards

## Checks

- `npm run check`: validate authority surfaces and CLI behavior
- `npm run check:agent-control`: run the authority check directly
- `npm test`: run focused CLI behavior tests
- `npm run preflight`: run generated-policy and memory-quality checks
- `npm run check:reusable`: copy the repo to a temp directory and run the authority check there

## Publishing notes

- The repo is self-contained and does not depend on a specific workspace layout.
- Start `logs/` fresh for the project where you adopt this repo.
