# Project Memory

## Goal

Make the imported project easier for AI coding agents to continue safely across sessions.

## Project Shape

Small Node.js repo with markdown authority docs, templates, and lightweight validation scripts.

## Current Truth

- `npm run check` passes.
- Active instructions are rooted in `README.md`, `implement.md`, `runbook/`, and `policies/`.

## Active Constraints

- Keep changes bounded and verifiable.
- Do not add a full runtime or orchestrator.
- Keep memory compact; detailed history belongs in `logs/`.

## Decisions

- Use project memory as curated operating state, not a transcript.
- Keep the next move as one bounded task with a proof path.

## Suggestions Inbox

- Consider adding structured import instructions for common host repos.

## Open Questions

- Should imported projects commit `memory/project.md`, or keep it local?

## Next Best Move

Add validation that the project memory template keeps all required agent-oriented sections.

## Proof Path

`npm run check:agent-control`

## Recent Changes

- Added a project memory template and CLI helpers for imported projects.
