# Logging Rules

## Purpose

Keep active execution guidance separate from historical logs.

Use:
- `runbook/` for live operating guidance
- `policies/` for stable execution rules
- `logs/` for completed cycle and loop-run history
- `templates/` for reusable logging and handoff formats

## Logging destinations

- place historical run logs under `logs/YYYY-MM/`
- keep active operating guidance out of historical log files
- leave `implement.md` as a thin entrypoint only
- label imported legacy material as historical when it is still useful to keep

## Logging model

Use one entry per completed bounded cycle unless the work is a repeated same-class micro-repair loop.

For repeated same-class wording or authority-alignment micro-repairs, prefer batched loop-run logging:
- one run header
- one compact bullet per verified micro-fix
- one final stop summary

Reserve full standalone cycle entries for slices that:
- change structural rules
- add a new contract or check
- require non-trivial project interpretation

## Templates

Use these templates:
- `templates/cycle-entry.md`
- `templates/loop-run.md`
- `templates/handoff.md`
