# Agent Control

Agent Control is a self-contained repo for improving agent workflow, bounded loops, verification discipline, and handoff quality.

It is designed as a small operating surface rather than a framework: clear runbooks, explicit stop-lines, reusable templates, and a repo-local check that keeps the authority docs aligned.

## What lives here

- `AGENTS.md`: thin discovery bridge for tools that look for agent instructions
- `authority.manifest.json`: structured map of authority surfaces, commands, and drift boundaries
- `implement.md`: thin entrypoint into the active guidance
- `runbook/`: live operating guidance and current priority
- `policies/`: stable guardrails, continuation rules, logging rules, and stop-line cards
- `templates/`: reusable cycle, loop-run, and handoff formats
- `templates/project-memory.md`: compact project memory template for imported projects
- `memory/`: guidance for keeping `memory/project.md` as active agent memory in imported projects
- `examples/`: worked examples for good records, failed verification, and over-broad scope
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
- `npm run agent-control -- init-memory`: create `memory/project.md` from the agent-oriented memory shape
- `npm run agent-control -- update-memory`: add durable truth, decisions, suggestions, questions, recent changes, next move, and proof path
- `npm run agent-control -- show-memory`: print the active project memory
- `npm run agent-control -- show-next`: print the next best move, proof path, and active constraints from project memory
- `npm run agent-control -- start-cycle`: scaffold a bounded cycle entry
- `npm run agent-control -- close-cycle`: fill verification, result, next move, and risk fields in a cycle entry
- `npm run agent-control -- handoff`: create a concise handoff record under `logs/YYYY-MM/`
- `npm run agent-control -- analyze-logs`: scan logs for missing fields, failed verification mentions, oversized-scope signals, and stale next moves
- `npm run agent-control -- stop-lines`: print the active stop-line cards

## Checks

- `npm run check`: validate the repo's authority surfaces
- `npm run check:agent-control`: run the authority check directly
- `npm run check:reusable`: copy the repo to a temp directory and run the authority check there

## Publishing notes

- The repo is self-contained and does not depend on a specific workspace layout.
- Start `logs/` fresh for the project where you adopt this repo.
- Keep examples as calibration material, not active doctrine.
