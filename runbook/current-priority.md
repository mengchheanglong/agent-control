# Current Priority

## Current Mission

Make Agent Control a reusable, self-contained surface for agent workflow, loop management, verification, memory, and handoff discipline.

## Current Run Priority

Prefer the highest-ROI bounded step from current repo truth:
1. repo correctness or root-assumption fixes
2. broken workflow wiring
3. missing proof or validation coverage
4. loop selection, handoff, logging, or memory improvements
5. lightweight helper tooling
6. structured cards, context capsules, or templates that clarify operation
7. truth-alignment record corrections

Avoid broad redesign when a smaller verified step is available.

## Current Repo Baseline

- this repo root is the canonical surface
- active docs and scripts use repo-root-relative paths
- `logs/` is archival, not active doctrine
- no sibling repo or hidden workspace layout is required
- `npm run check:agent-control` should pass here
- `npm run check:reusable` should pass when release-style reuse proof is needed
- `policies/stop-line-cards.json` stays aligned with `policies/stop-lines.md`
- imported projects may keep active memory in `memory/project.md`, shaped by `templates/project-memory.md`
- imported projects should be bootstrapped by an AI agent that infers project context, asks one optional user question, and generates `memory/state.json` from project memory
