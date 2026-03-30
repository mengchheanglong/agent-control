# Current Priority

## Current mission

Make Agent Control a reusable standalone surface for agent workflow, loop management, verification, and handoff discipline.

Prioritize work that makes the project more real and more reusable through:
- clearer standalone boundaries
- stronger loop selection and stop-line discipline
- better proof, decision, and reporting flow
- smaller, sharper verification seams
- measurable, reversible progress

## Current run priority

Choose the highest-ROI bounded next step from current repo truth.

Prefer:
1. standalone correctness or root-assumption fixes
2. broken or missing workflow wiring
3. missing proof, report, or validation coverage for real workflow pressure
4. bounded improvements to loop selection, handoff, or logging surfaces
5. lightweight helper tooling that removes friction without expanding scope
6. record correction only when it materially improves truth alignment

Do not start broad new work when a smaller high-value continuation is clearly available.

## Current standalone baseline

Canonical surface:
- this repo root

Required baseline truths:
- active docs and scripts must use repo-root-relative paths
- imported material under `logs/` is historical context, not current doctrine
- current instructions must not require a sibling external repo to exist
- current instructions must not require `.openclaw\workspace` or another hidden home-directory layout
- `npm run check:agent-control` should pass from this repo root
