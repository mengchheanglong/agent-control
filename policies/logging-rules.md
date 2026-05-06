# Logging Rules

## Purpose

Keep active execution guidance separate from historical logs.

Use:
- `runbook/` for live operating guidance
- `policies/` for stable execution rules
- `logs/` for completed cycle and loop-run history
- `templates/` for reusable logging and handoff formats
- `examples/` for calibration records that are not active doctrine
- `memory/project.md` in imported projects for compact current operating state

## Logging destinations

- place historical run logs under `logs/YYYY-MM/`
- keep active operating guidance out of historical log files
- leave `implement.md` as a thin entrypoint only
- label archived material clearly when it is still useful to keep
- use `npm run agent-control -- analyze-logs` to scan logs for missing fields, failed verification mentions, oversized-scope signals, and stale next moves
- update `memory/project.md` after meaningful cycles with durable truth, accepted decisions, active constraints, useful suggestions, open questions, next best move, and proof path

## Logging model

Use one entry per completed bounded cycle unless the work is a repeated same-class micro-repair loop.

For repeated same-class wording or authority-alignment micro-repairs, prefer batched loop-run logging:
- one run header
- one compact bullet per verified micro-fix
- one final stop summary

Reserve full cycle entries for slices that:
- change structural rules
- add a new contract or check
- require non-trivial project interpretation

## Templates

Use these templates:
- `templates/cycle-entry.md`
- `templates/loop-run.md`
- `templates/handoff.md`

Helper commands may scaffold these records, but the templates remain the readable contract.

Project memory uses `templates/project-memory.md`; it summarizes current state and should not duplicate completed cycle logs.
