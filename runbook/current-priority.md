# Current Priority

## Current Mission

Make Agent Control a reusable, self-contained, agent-first surface for post-clone adoption, project context memory, loop management, verification, and handoff discipline.

## Current Run Priority

Prefer the highest-ROI bounded step from current truth:
1. post-clone adoption correctness
2. project context and memory quality
3. verification, preflight, and reusable-import reliability
4. lightweight import surface and host-repo cleanliness
5. loop selection, handoff, logging, and next-move helpers
6. structured cards, context capsules, and templates that clarify operation
7. authority alignment across docs, manifest, tests, and CLI

Avoid broad redesign when a smaller verified step is available.

## Current Repo Baseline

- this repo root is the canonical surface
- active docs and scripts use repo-root-relative paths
- `logs/` is archival, not active doctrine
- no sibling repo or hidden workspace layout is required
- `npm run check:agent-control` should pass here
- `npm run check:reusable` should pass when release-style reuse proof is needed
- `policies/stop-line-cards.json` stays aligned with `policies/stop-lines.md`
- imported projects keep active memory in `agent-control/memory/project.md`, shaped by `templates/project-memory.md`
- imported projects should be bootstrapped by an AI agent that infers project context, asks one optional user question, adds `agent-control/` to the host `.gitignore` unless vendoring is requested, and generates `agent-control/memory/state.json` from project memory
