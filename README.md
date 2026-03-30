# Agent Control

Agent Control is a standalone repo for improving agent workflow, bounded loops, verification discipline, and handoff quality.

It is designed as a small operating surface rather than a framework: clear runbooks, explicit stop-lines, reusable templates, and a repo-local check that keeps the authority docs aligned.

## What lives here

- `implement.md`: thin entrypoint into the active guidance
- `runbook/`: live operating guidance and current priority
- `policies/`: stable guardrails, continuation rules, and logging rules
- `templates/`: reusable cycle, loop-run, and handoff formats
- `logs/`: historical run material kept for context
- `scripts/`: lightweight validation helpers

## Quick start

1. Read `implement.md`.
2. Read `runbook/active.md`.
3. Read `runbook/current-priority.md`.
4. Read `policies/stop-lines.md`, `policies/continuation-rules.md`, and `policies/logging-rules.md`.
5. Run `npm run check`.

## Checks

- `npm run check`: validate the repo's authority surfaces
- `npm run check:agent-control`: run the standalone authority check directly

## Publishing notes

- The repo is self-contained and does not require a sibling workspace.
- Historical imported logs under `logs/` are reference material, not active doctrine.
