# Logging Rules

## Purpose

Keep active guidance separate from historical records.

- `runbook/`: live operating guidance
- `policies/`: stable rules
- `logs/`: completed cycle, loop-run, and handoff history
- `templates/`: reusable record formats
- `agent-control/memory/project.md`: compact current operating state in imported projects
- `agent-control/memory/state.json`: generated context capsule for tooling

## Destinations

- put historical logs under `logs/YYYY-MM/`
- keep active doctrine out of logs
- keep `implement.md` thin
- use `npm run agent-control -- analyze-logs` for log scans
- update `agent-control/memory/project.md` after meaningful cycles with durable context, truth, decisions, constraints, suggestions, questions, next best move, and proof path
- regenerate `agent-control/memory/state.json` with `npm run agent-control -- sync-state` when a tool needs structured state

## Model

Use one entry per completed bounded cycle unless batching same-class micro-fixes.

Use:
- `templates/cycle-entry.md`
- `templates/loop-run.md`
- `templates/handoff.md`
- `templates/project-memory.md`

Project memory summarizes current state and should not duplicate completed cycle logs. If list sections grow stale, run `npm run agent-control -- compact-memory` and preserve only durable current state.
