# Current Priority

## Current mission

Make Agent Control a reusable self-contained surface for agent workflow, loop management, verification, and handoff discipline.

Prioritize work that makes the project more real and more reusable through:
- clearer repo boundaries
- stronger loop selection and stop-line discipline
- better proof, decision, and reporting flow
- smaller, sharper verification seams
- measurable, reversible progress

## Current run priority

Choose the highest-ROI bounded next step from current repo truth.

Prefer:
1. repo correctness or root-assumption fixes
2. broken or missing workflow wiring
3. missing proof, report, or validation coverage for real workflow pressure
4. bounded improvements to loop selection, handoff, or logging surfaces
5. lightweight helper tooling that removes friction without expanding scope
6. record correction only when it materially improves truth alignment

Do not start broad new work when a smaller high-value continuation is clearly available.

## Current repo baseline

Canonical surface:
- this repo root

Required baseline truths:
- active docs and scripts must use repo-root-relative paths
- material under `logs/` is archival context, not current doctrine
- current instructions must not require a sibling external repo to exist
- current instructions must not require a tool-specific hidden workspace layout
- `npm run check:agent-control` should pass from this repo root
