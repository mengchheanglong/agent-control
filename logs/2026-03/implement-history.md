# implement.md

## Run purpose
This file is the active runbook for autonomous work inside `directive-workspace/`.

Before doing substantive work, the agent must:
1. read `CLAUDE.md`
2. read `AGENTS.md`
3. read this file
4. refresh current repo truth from code and records
5. then proceed in bounded verified cycles

This file is for:
- current mission focus
- run constraints
- task selection rules
- cycle logging
- end-of-run handoff

---

## Current mission
Keep Directive Workspace moving as its own product and operating system for source adaptation.

Engine is the shared adaptation core inside Directive Workspace.
Discovery, Runtime, and Architecture are the main operating lanes of Engine.

Prioritize work that makes Directive Workspace more real, more reusable, and more operational through:
- clearer Engine ownership
- stronger lane boundaries
- better routing and source-to-usefulness flow
- better proof / decision / integration / reporting discipline
- measurable, reversible progress

---

## Current run priority
Choose the highest-ROI bounded next step from current repo truth.

Prefer:
1. correctness or state-truth fixes
2. broken or missing workflow wiring
3. missing proof / report / validation coverage for real workflow pressure
4. bounded Engine seam improvements
5. Architecture / Runtime / Discovery progress that increases shared system value
6. record or handoff correction only when it materially improves code-truth alignment

Do not start broad new work when a smaller high-value continuation is clearly available.

---

## Scope for this run
In scope:
- bounded, reversible, measurable changes
- Engine-aligned improvements
- Discovery / Runtime / Architecture workflow improvements
- stronger workflow truth, proof, reporting, and integration discipline
- checks, validation, and targeted verification
- code / docs / records alignment when grounded in actual repo truth

Out of scope:
- broad speculative redesign
- cosmetic cleanup
- generic framework expansion without workflow pressure
- unrelated cleanup across multiple layers
- reopening intentionally parked work without strong repo-truth justification
- bundling several separate improvements into one cycle

---

## Repo-specific constraints
The agent must preserve these truths while working:

- Directive Workspace is the product
- Engine is the shared adaptation core inside it
- Discovery is goal-aware intake, filtering, and routing
- Runtime is reusable runtime usefulness conversion and behavior-preserving transformation
- Architecture is Engine self-improvement / operating code
- Do not collapse Engine into Architecture
- Do not reduce Directive Workspace to repo intake only
- Do not reduce Runtime to tool adoption only
- Do not reduce Architecture to passive notes
- Do not drop Decide or Report from the workflow
- Keep changes reversible, measurable, and architecture-first

If work touches doctrine-sensitive areas, prefer the smallest change that increases real operating value.

---

## Instruction priority
When instructions conflict, use this order:

1. direct user instruction in the current session
2. `directive-workspace/CLAUDE.md`
3. `directive-workspace/AGENTS.md`
4. this file
5. nearest local docs for the touched area
6. code truth and established repo patterns

If uncertainty remains, inspect more before changing code.

---

## Task selection policy
At the start of each cycle:

1. refresh repo truth from the current codebase, records, and relevant docs
2. re-read the most relevant instruction files for the touched area
3. identify candidate next tasks
4. rank them by ROI using:
   - mission usefulness
   - bounded scope
   - verification strength
   - dependency readiness
   - regression risk
   - shared Engine value
5. choose exactly one bounded next step

If multiple tasks are close, prefer the one with:
1. stronger verification
2. lower regression risk
3. more immediate workflow usefulness
4. less doctrinal ambiguity

If the best task is blocked, skip to the next highest-ROI bounded task instead of stalling.

---

## Required cycle framing
Before each cycle, determine and record:

- affected layer
- owning lane
- chosen task
- why it is the highest-ROI next move
- mission usefulness
- proof path
- rollback path
- stop-line

Implement only up to the stop-line, even if more work is possible.

Do not mix unrelated tasks into the same cycle unless they are tightly required to complete the chosen bounded slice.

---

## Verification rules
Never claim success without evidence.

Use the strongest practical verification available for the touched area, preferring:

1. targeted checks for the changed behavior
2. existing workflow checks / reports
3. targeted tests
4. broader repo checks if needed

Prefer targeted verification before broad noisy validation.

If relevant, use commands like:

```bash
npm run check
npm run report:directive-workspace-state
```

If the touched area has its own targeted check or report script, use that first.

If no adequate verification exists and the change truly needs it, add minimal focused verification rather than broad test scaffolding.

If verification fails:

fix the bounded slice if practical
otherwise stop honestly at the failed boundary and record the issue clearly

## Locked vNext roadmap guardrail

Preserve the locked vNext migration order exactly:
1. Phase 1A - parallel event mirror foundation
2. Phase 1B - snapshot materializer and backfill parity
3. Phase 2 - planner in recommendation mode
4. Phase 3 - partial generated projections and event-first write path
5. Phase 4 - durable runner and repo-awareness packets
6. Phase 5 - retire artifact-first control

## Current Runtime Execution Stop-Line

Current sanctioned manual execution boundary:
- `scripts/runtime-manual-control.ts`
- backed by the shared manual-control layer in `shared/lib/runtime-manual-control.ts`

Allowed now:
- explicit single Runtime actions only through the already-proven Runtime execution substrate
- approved named Runtime sequences only through the already-proven named sequence options
- admin/test-only CLI invocation only
- explicit choice required
- explicit approval required
- non-authoritative execution only

Explicitly not allowed now:
- host-admin execution seam
- normal user-facing execution surface
- planner-driven execution
- arbitrary action lists
- arbitrary sequences
- sequence composition beyond the already-proven named options
- authority cutover away from `shared/lib/dw-state.ts`
- authority cutover away from `scripts/report-directive-workspace-state.ts`

Reopen criteria:
- do not reopen this area unless there is a concrete operator need that the CLI cannot adequately support
- minimum evidence for reopening must include:
- explicit documented operator need
- why the CLI is insufficient
- explicit admin/test-only access model
- isolated boundary or namespace
- preserved approval propagation
- no planner-driven execution
- no authority cutover

Anti-drift warning:
- do not add a host-admin route just for symmetry
- do not broaden Runtime exposure without a concrete need
- do not treat "would be cleaner" as sufficient justification
- do not continue this area by momentum alone
- keep the CLI as the sanctioned Runtime execution boundary until the reopen criteria are met

Reserved later side experiment:
- structural blueprint / analogy work is explicitly post-Phase-2 and non-blocking
- owner: Engine shared reasoning / planner-adjacent evaluation
- keep it outside the critical path until planner foundations are proven
- start only as an evaluation-first experiment on a tiny golden set
- discard it quickly if it does not measurably improve recommendation quality or transfer discipline

## Current Structural Mapping Experiment Boundary

Current structural-mapping status:
- sidecar-only experimental documentation
- structural usefulness cases only
- not a live system field
- not authoritative truth

Current allowed anchor scope:
- `dw-source-ts-edge-2026-03-27`
- `dw-source-scientify-research-workflow-plugin-2026-03-27`

Current not-allowed scope:
- live Discovery routing
- planner recommendation logic
- Runtime execution logic
- `shared/lib/dw-state.ts`
- `scripts/report-directive-workspace-state.ts`
- universal source coverage
- not required for NOTE-mode review sources

Use rule:
- only use structural mapping when it says something sharper than current bounded-result language
- no structural mapping counts unless it captures relations, not attributes

Anti-drift:
- do not turn this experiment into a required source-analysis field
- do not add it to all sources by momentum alone
- do not treat elegant pattern language as evidence of usefulness
- do not reopen this area beyond the current two anchor cases without a later explicit bounded decision

## Current Structural Mapping Stop-Line

Current parked status:
- parked
- sidecar-only
- non-authoritative
- limited to the existing `ts-edge` and `Scientify` structural-mapping sidecars

Allowed now:
- retain the existing schema note
- retain the two existing sidecars
- retain the tiny validation script
- retain the planning boundary note

Explicitly not allowed now:
- adding more sidecars
- live Discovery integration
- planner integration
- execution integration
- `shared/lib/dw-state.ts` integration
- `scripts/report-directive-workspace-state.ts` integration
- NOTE-mode review usage by symmetry
- broad schema rollout

Reopen criteria:
- only reopen this area if a future source clearly shows both:
- structural usefulness is primary
- current bounded-result language cannot cleanly separate transferable relation from source-specific baggage
- reopening requires a new bounded decision pass first
- automatic reuse is not allowed

Anti-drift warning:
- do not treat the presence of the sidecars as approval for expansion
- do not add more sidecars just because the format exists
- do not let elegant structural language count as proof of usefulness

Anti-drift:
- do not block Phase 1A or Phase 1B on it
- do not move it into the case-store or event-log foundation work
- do not invent a new lane for it
- do not make blueprint extraction mandatory in early Discovery
- do not let it delay the substrate migration

## Current Product Root After Relocation

Canonical product root:
- `C:\Users\User\projects\directive-workspace`

Relocation status:
- relocation is complete enough for normal product work to proceed from the new root
- `npm run report:directive-workspace-state` passes from the new root
- `npm run check` passes from the new root
- `C:\Users\User\.openclaw\workspace\directive-workspace` is no longer the canonical product home

External integration status:
- Mission Control and OpenClaw remain external integrations and adapters
- they are not allowed to assume the old sibling-root layout under `.openclaw\workspace`
- future integration work must treat Directive Workspace as an external product root

Explicitly not allowed now:
- drifting back to `.openclaw\workspace` as the canonical root
- adding permanent compatibility shims as a substitute for product-root clarity
- reopening relocation work by momentum alone
- reopening frozen Runtime exposure or structural-mapping lanes during relocation closeout

Reopen criteria:
- only reopen relocation work if a concrete post-move defect appears
- or if a specific external integration still fails against `C:\Users\User\projects\directive-workspace`

Anti-drift warning:
- future docs and scripts must not reintroduce the old root as the canonical product home
- examples that still mention the old root must be clearly labeled as historical or integration-specific, not as the product root
- continue product work from the new root only unless the reopen criteria are met

## Change discipline

Keep edits:

minimal
coherent
reversible
evidence-based

Rules:

do not silently redesign adjacent systems
do not broaden scope just because a nearby cleanup is tempting
do not make records claim more than code truth supports
do not move parked work unless clearly justified by current repo truth
do not treat partial work as completed work
do not create doctrine drift between code, records, and handoff files

When touching records, reports, or handoff files, ensure they reflect actual implementation truth.

## Run persistence rule

This run is intended to continue through many bounded cycles, not stop after the first safe verified slice.

Do not stop merely because one bounded slice is complete.

After each completed cycle:
1. refresh repo truth
2. identify the next best bounded step
3. continue if there is any reasonable high-ROI task that is:
   - aligned with doctrine
   - bounded
   - verifiable
   - lower risk than broad redesign

Only stop when:
- there are no more reasonable bounded tasks left
- the next tasks all require human judgment
- the next tasks all require external access or approval not available
- the next useful move would require a broad redesign
- validation is blocked in a way that cannot be resolved safely

## Minimum continuation target

Aim to complete at least 5 bounded cycles before considering early stop, unless a true hard stop is reached.

A true hard stop means:
- no credible bounded high-ROI task remains
- all remaining paths are blocked by missing authority, missing access, or unresolved doctrine conflict
- further work would likely create regressions or false progress

## Progress log format

Append one entry per completed cycle using this template:

Cycle N

Chosen task:
Why it won:
Affected layer:
Owning lane:
Mission usefulness:
Proof path:
Rollback path:
Stop-line:
Files touched:
Verification run:
Result:
Next likely move:
Risks / notes:

Keep entries factual, compact, and grounded in what was actually done.

## Progress log
Cycle 1

Chosen task:
Queue routed-status hardening in the shared frontend read model.
Why it won:
Raw Discovery queue `status = routed` was still being presented as clean active routing even when canonical truth had already moved the live case head downstream or marked the route broken. This was the highest-ROI bounded operator-facing truth seam.
Affected layer:
Shared Engine / frontend truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by stopping routed queue rows from overstating live continuation state.
Proof path:
`hosts/web-host/data.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-queue-routed-status-hardening-2026-03-28-implementation-result.md`
Rollback path:
Revert the routed queue read-model logic in `hosts/web-host/data.ts`, revert checker coverage, and remove the `dw-pressure-engine-queue-routed-status-hardening-2026-03-28` DEEP case chain.
Stop-line:
Derive truthful routed queue status in one bounded seam, verify it, and stop without redesigning queue lifecycle semantics.
Files touched:
`hosts/web-host/data.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-queue-routed-status-hardening-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-queue-routed-status-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-queue-routed-status-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-queue-routed-status-hardening-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-queue-routed-status-hardening-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-queue-routed-status-hardening-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-queue-routed-status-hardening-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-queue-routed-status-hardening-2026-03-28-implementation-result.md`
Verification run:
`npm run check:directive-workspace-composition`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-queue-routed-status-hardening-2026-03-28-implementation-result.md`
Result:
Raw routed entries now surface as `routed_progressed` or `routed_inconsistent` when canonical current-head truth says they are no longer clean active-routing cases; still-live routed entries remain unchanged.
Next likely move:
Harden routed queue linkage at the source-side lifecycle sync layer so future mismatched concrete routed stubs are rejected before queue mutation.
Risks / notes:
This slice intentionally preserved raw queue status as evidence; it did not rewrite queue lifecycle semantics.

Cycle 2

Chosen task:
Discovery lifecycle-sync routed downstream-stub linkage hardening.
Why it won:
After the routed read-model guard landed, the next highest-ROI seam was preventing future queue-linkage drift at write time instead of only warning about it later.
Affected layer:
Shared Engine / Discovery lifecycle sync.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves Discovery queue truth by rejecting concrete routed downstream stubs that are missing or that conflict with the routing record's declared required next artifact.
Proof path:
`shared/lib/discovery-intake-lifecycle-sync.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28-implementation-result.md`
Rollback path:
Revert the routed lifecycle sync validation change, revert checker coverage, and remove the `dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28` DEEP case chain.
Stop-line:
Add one source-side routed lifecycle-sync legality rule, verify it, and stop without redesigning queue lifecycle semantics or completed-phase behavior.
Files touched:
`shared/lib/discovery-intake-lifecycle-sync.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28-implementation-result.md`
Verification run:
`npm run check:directive-workspace-composition`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28-implementation-result.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
Routed lifecycle sync now rejects a concrete routed stub when it does not exist or when it conflicts with the routing record's declared required next artifact. The new DEEP case resolves cleanly with `architecture.implementation_result.success`.
Next likely move:
Assess whether the remaining queue drift is a shared-code hardening problem or a historical queue-lifecycle policy / normalization problem.
Risks / notes:
The adopted decision artifact initially used the wrong JSON shape and was corrected before final verification.

Cycle 3

Chosen task:
Discovery-held route equivalence hardening in the shared resolver.
Why it won:
The refreshed truth showed the remaining current-era queue inconsistency was not an unsupported monitor artifact; it was a false lane mismatch. A real Discovery-held `monitor` route was being marked broken because the Engine selected lane `discovery` while the route destination was `monitor`.
Affected layer:
Shared Engine / Discovery route truth.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves canonical Discovery route integrity by treating Discovery-held destinations as compatible with Engine lane `discovery`, which removes a false negative from both the resolver and the queue surface.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`discovery/routing-log/2026-03-26-dw-mission-agentics-issue-triage-discovery-restart-2026-03-26-routing-record.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-discovery-held-route-equivalence-hardening-2026-03-28-implementation-result.md`
Rollback path:
Revert the Discovery-held route equivalence guard in `shared/lib/dw-state.ts`, revert checker coverage, and remove the `dw-pressure-engine-discovery-held-route-equivalence-hardening-2026-03-28` DEEP case chain.
Stop-line:
Treat Discovery-held route destinations as compatible with Engine lane `discovery`, verify the real monitor route resolves cleanly, and stop without adding monitor-artifact parsing or queue-lifecycle rewrite.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-held-route-equivalence-hardening-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-held-route-equivalence-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-held-route-equivalence-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-held-route-equivalence-hardening-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-discovery-held-route-equivalence-hardening-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-discovery-held-route-equivalence-hardening-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-discovery-held-route-equivalence-hardening-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-discovery-held-route-equivalence-hardening-2026-03-28-implementation-result.md`
Verification run:
`npm run check:directive-workspace-composition`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-discovery-held-route-equivalence-hardening-2026-03-28-implementation-result.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
Discovery-held `monitor` now resolves as a clean Discovery route instead of a broken lane mismatch. The completed Agentics Issue Triage queue row now preserves `status_effective = completed`, and the whole-workspace counts dropped to `completed -> completed_inconsistent = 21`.
Next likely move:
Add first-class resolver support for `discovery/monitor/*.md`, which is now the remaining current-era artifact path gap behind that completed monitor case.
Risks / notes:
This slice intentionally stopped at route equivalence. The monitor artifact itself is still unsupported as a direct resolver focus path.

Cycle 4

Chosen task:
Discovery monitor truth-surface support in the canonical resolver.
Why it won:
After Cycle 3, the remaining current-era gap was a real `discovery/monitor/*.md` artifact that still could not resolve as a first-class focus path, and one healthy completed queue row still pointed at the routing record instead of the live monitor artifact.
Affected layer:
Shared Engine / Discovery truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by making the real Discovery monitor artifact resolvable, and by letting routed monitor cases point at that held artifact as the live current head without changing queue policy.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`discovery/monitor/2026-03-26-dw-mission-agentics-issue-triage-discovery-restart-2026-03-26-monitor-record.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-implementation-result.md`
Rollback path:
Revert the monitor reader / resolver support in `shared/lib/dw-state.ts`, revert checker coverage, and remove the `dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28` DEEP case chain.
Stop-line:
Add one first-class monitor truth surface, verify the routed monitor case resolves through it, and stop without redesigning queue precedence or historical normalization.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-implementation-result.md`
Verification run:
`npm run check:directive-workspace-composition`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-implementation-result.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
`discovery/monitor/*.md` is now a first-class canonical focus path. The routed monitor case resolves with `currentStage = discovery.monitor.active`, and the completed monitor queue row now points at the monitor artifact as `current_head`.
Next likely move:
Repair the one remaining current-era routed inconsistency: the GPT Researcher Architecture handoff stub that still failed because it was missing a required `Lifecycle classification` section.
Risks / notes:
This slice intentionally stopped at monitor truth only. It did not broaden into generic Discovery completion parsing.

Cycle 5

Chosen task:
Repair the malformed GPT Researcher Architecture handoff stub that kept one real routed case broken.
Why it won:
After Cycle 4, the last current-era `routed_inconsistent` case was a single Architecture handoff artifact that the existing parser already knew how to read, but the artifact itself was missing the `Lifecycle classification` section. That was a direct, truthful artifact repair with strong verification.
Affected layer:
Architecture artifact truth.
Owning lane:
Architecture.
Mission usefulness:
Removes the last current-era routed inconsistency from the queue/read model by bringing one real handoff stub back into canonical shape.
Proof path:
`architecture/02-experiments/2026-03-24-dw-live-gpt-researcher-engine-pressure-2026-03-24-engine-handoff.md`
`discovery/routing-log/2026-03-24-dw-live-gpt-researcher-engine-pressure-2026-03-24-routing-record.md`
`scripts/check-directive-workspace-composition.ts`
Rollback path:
Revert the added `Lifecycle classification` section in the handoff stub and revert the checker expectation update.
Stop-line:
Repair the missing section, verify the routed case resolves cleanly, and stop without broadening into other historical artifact normalization.
Files touched:
`architecture/02-experiments/2026-03-24-dw-live-gpt-researcher-engine-pressure-2026-03-24-engine-handoff.md`
`scripts/check-directive-workspace-composition.ts`
Verification run:
`npm run report:directive-workspace-state -- discovery/routing-log/2026-03-24-dw-live-gpt-researcher-engine-pressure-2026-03-24-routing-record.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
The GPT Researcher routed case now resolves cleanly to `architecture.handoff.pending_review`, the queue row preserves `status_effective = routed`, and the whole-workspace mismatch inventory no longer contains any `routed_inconsistent` rows.
Next likely move:
No further clearly bounded current-era truth fix remains. The next step is an explicit policy decision about historical queue lifecycle normalization.
Risks / notes:
This was a direct artifact repair, not a new meta case. The remaining mismatch inventory is now historical/coarse-status policy, not another obvious parser gap.

Cycle 6

Chosen task:
Legacy Architecture adoption compatibility in the shared adoption reader.
Why it won:
After the current-era queue and monitor seams were clean, the highest-ROI remaining shared truth gap was four legacy `architecture/03-adopted/*.md` records that still failed canonical focus only because the adoption reader hard-required a modern decision sidecar those older artifacts never had. That was still bounded and strongly verifiable, unlike the much broader legacy Runtime history surface.
Affected layer:
Shared Engine / Architecture adoption truth.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Keeps older adopted Architecture value reachable as canonical current heads instead of treating it as broken historical drift.
Proof path:
`shared/lib/architecture-result-adoption.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/03-adopted/2026-03-22-openclaw-discovery-submission-flow-adopted.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-implementation-result.md`
Rollback path:
Revert the legacy adoption fallback in `shared/lib/architecture-result-adoption.ts`, revert checker coverage, and remove the `dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28` DEEP case chain.
Stop-line:
Make the four legacy adopted Architecture artifacts resolve as clean canonical current heads, verify them, and stop without broadening into Runtime history support or queue semantics.
Files touched:
`shared/lib/architecture-result-adoption.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-implementation-result.md`
Verification run:
`npm run check:directive-workspace-composition`
`npm run report:directive-workspace-state -- architecture/03-adopted/2026-03-22-openclaw-discovery-submission-flow-adopted.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-implementation-result.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
The four 2026-03-22 adopted Architecture artifacts now resolve as clean `architecture.adoption.adopted` current heads with only the expected implementation-target gap. The new DEEP case resolves cleanly with `architecture.implementation_result.success`.
Next likely move:
Reassess the remaining unsupported legacy Runtime history and only continue if a narrower compatibility slice exists than full legacy Runtime normalization.
Risks / notes:
The fallback only activates when the modern adoption decision sidecar is missing; current-era adoption behavior stays on the existing reader path.

Cycle 7

Chosen task:
Legacy Runtime handoff detail support in the host/workbench read surface.
Why it won:
After Cycle 6, the top three bounded candidates were: (1) canonical legacy Runtime handoff focus support, (2) host/workbench detail support for the two legacy Runtime handoff artifacts, and (3) legacy Runtime record compatibility. Candidate 1 lost on dependency readiness because the two handoff artifacts point into older follow-up/record semantics, not the modern Runtime v0 chain. Candidate 2 kept meaningful product usefulness, strong verification, low regression risk, and no doctrine drift, so it was the best unblocked slice.
Affected layer:
Host/workbench read surface.
Owning lane:
Architecture (meta / product surface quality).
Mission usefulness:
Makes the two existing Architecture-to-Runtime handoff artifacts inspectable through the product-owned handoff detail surface without pretending they belong to the current canonical Runtime chain.
Proof path:
`hosts/web-host/data.ts`
`frontend/src/app.ts`
`scripts/check-frontend-host.ts`
`runtime/handoff/2026-03-22-autoresearch-architecture-to-runtime-handoff.md`
`runtime/handoff/2026-03-23-scientify-literature-monitoring-architecture-to-runtime-handoff.md`
Rollback path:
Revert the legacy Runtime handoff detail parser in `hosts/web-host/data.ts`, revert the display-only branch in `frontend/src/app.ts`, and revert the repo-backed handoff assertions in `scripts/check-frontend-host.ts`.
Stop-line:
Make the two legacy Runtime handoff artifacts readable through the handoff detail surface, verify them, and stop without adding canonical Runtime-stage mapping, queue changes, or legacy Runtime normalization.
Files touched:
`hosts/web-host/data.ts`
`frontend/src/app.ts`
`scripts/check-frontend-host.ts`
Verification run:
`npx tsx -` (direct `readDirectiveWorkbenchHandoffDetail(...)` assertions for the two legacy Runtime handoff artifacts)
`npm run check:frontend-host`
`npm run check`
Result:
The two legacy Runtime handoff artifacts now resolve through the handoff detail surface as `runtime_handoff_legacy`, with normalized linked artifact paths and a display-only frontend branch. Full frontend-host and repo checks still pass.
Next likely move:
Reassess whether those legacy Runtime handoffs should now be surfaced as read-only handoff stubs in the workbench list, or whether the next bounded move has shifted elsewhere.
Risks / notes:
This slice deliberately did not claim canonical Runtime-stage support for the legacy handoff artifacts. It only made them inspectable through the host-owned detail surface.

Cycle 8

Chosen task:
Internally-generated Architecture handoff compatibility for missing Engine/discovery linkage.
Why it won:
The refreshed truth showed one live current-era warning in the handoff workbench, and it came from a DEEP meta handoff we created ourselves. Repairing that single malformed Architecture handoff was more immediate, more verifiable, and lower risk than exposing more legacy Runtime history.
Affected layer:
Shared Engine / Architecture handoff truth plus handoff detail surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Removes a current-era invalid handoff warning and keeps internally-generated Architecture pressure cases inspectable without inventing fake Engine or Discovery linkage.
Proof path:
`shared/lib/architecture-handoff-start.ts`
`frontend/src/app.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-engine-handoff.md`
`scripts/check-directive-workspace-composition.ts`
Rollback path:
Revert the internally-generated handoff fallback in `shared/lib/architecture-handoff-start.ts`, revert the Architecture handoff detail rendering change in `frontend/src/app.ts`, revert the explicit `n/a` source fields in the handoff artifact, and revert the checker coverage.
Stop-line:
Make the internally-generated handoff resolve cleanly with honest unresolved Engine/discovery links, verify the warning disappears, and stop before broadening into bounded-start/result compatibility.
Files touched:
`shared/lib/architecture-handoff-start.ts`
`frontend/src/app.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-engine-handoff.md`
`scripts/check-directive-workspace-composition.ts`
Verification run:
`npm run check:directive-workspace-composition`
`npx tsx -` (frontend snapshot handoff-warning check)
Result:
The internally-generated legacy-adoption-compatibility handoff now resolves cleanly, its Engine/discovery fields stay `null` instead of fake paths, and the frontend handoff warning inventory is empty.
Next likely move:
Repair the adjacent compact 2026-03-28 bounded-start / bounded-result artifacts so those current-era DEEP meta cases can be focused directly through the canonical Architecture chain.
Risks / notes:
Focused state reports on the repaired handoff immediately exposed the next artifact-family gap: four 2026-03-28 bounded starts and bounded results were still stored in a compact non-canonical format.

Cycle 9

Chosen task:
Canonicalize the compact 2026-03-28 internally-generated Architecture bounded-start / bounded-result artifacts.
Why it won:
After Cycle 8, the next highest-ROI bounded seam was the adjacent current-era Architecture artifact family that still could not resolve cleanly when focused directly. This was a coherent artifact-truth repair across one family, with strong focused reporting and no need to reopen parked Runtime work.
Affected layer:
Architecture artifact truth.
Owning lane:
Architecture.
Mission usefulness:
Makes the recent internally-generated DEEP Architecture pressure cases directly focusable through the canonical bounded-start / bounded-result chain instead of only working indirectly through later artifacts.
Proof path:
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-held-route-equivalence-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-held-route-equivalence-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-bounded-result.md`
`scripts/check-directive-workspace-composition.ts`
Rollback path:
Revert the eight repaired bounded-start / bounded-result artifacts and revert the new composition coverage for the 2026-03-28 internally-generated Architecture family.
Stop-line:
Bring the four current-era internally-generated bounded-start / bounded-result pairs into the canonical Architecture artifact contract, verify they focus cleanly, and stop before broadening into adoption/materialization repair or legacy Runtime policy.
Files touched:
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-held-route-equivalence-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-held-route-equivalence-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-bounded-result.md`
`scripts/check-directive-workspace-composition.ts`
Verification run:
`npx tsx -` (direct focus checks for the four repaired bounded-start / bounded-result pairs)
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-bounded-start.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-architecture-adoption-compatibility-2026-03-28-bounded-start.md`
`npm run check:directive-workspace-composition`
`npm run check`
`npm run report:directive-workspace-state`
Result:
All four internally-generated 2026-03-28 bounded starts now resolve as clean `architecture.bounded_start.opened` artifacts, and all four paired bounded results resolve as clean `architecture.bounded_result.adopt` artifacts with only the expected `architecture/03-adopted/*.md` gap.
Next likely move:
Reassess whether the next best bounded slice is now surfacing the two legacy Runtime handoff artifacts as read-only stubs in the handoff list, or whether another shared-truth seam has become more valuable.
Risks / notes:
This repair intentionally preserved the missing-adoption gap instead of inventing downstream adoption artifacts. For the legacy-adoption-compatibility case, the Engine/discovery evidence fields remain explicit `n/a` because no truthful source-side linkage exists.

Cycle 10

Chosen task:
Current-era Architecture adoption-reader compatibility hardening for the 2026-03-28 adoption family.
Why it won:
After Cycle 9, the repaired 2026-03-28 bounded results focused cleanly only up to `architecture.bounded_result.adopt` because the adoption reader could not follow the current-era adoption files' slightly different field names. Fixing that reader gap preserved the recent DEEP meta chain end-to-end with strong focused verification.
Affected layer:
Shared Engine / Architecture adoption truth.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Lets the repaired 2026-03-28 Architecture result families traverse through adoption into their existing implementation results instead of stopping at a false downstream artifact gap.
Proof path:
`shared/lib/architecture-result-adoption.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-discovery-lifecycle-sync-route-linkage-hardening-2026-03-28-adopted-planned-next.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-implementation-result.md`
Rollback path:
Revert the adoption-reader compatibility changes in `shared/lib/architecture-result-adoption.ts` and revert the updated checker expectations for the 2026-03-28 internally-generated Architecture family.
Stop-line:
Make the current-era 2026-03-28 adoption family resolve through the existing implementation results, verify it, and stop without broadening into retention generation or legacy Runtime mapping.
Files touched:
`shared/lib/architecture-result-adoption.ts`
`scripts/check-directive-workspace-composition.ts`
Verification run:
`npx tsx -` (direct adoption-reader / bounded-result focus check for the 2026-03-28 lifecycle-sync adoption pair)
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-monitor-truth-surface-2026-03-28-bounded-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
`npm run report:directive-workspace-state`
Result:
The four internally-generated 2026-03-28 Architecture result families now traverse cleanly through adoption into their existing implementation results. The remaining downstream gap is now the truthful missing retained stage, not a parser mismatch.
Next likely move:
Reassess the host/workbench handoff surface; the next bounded candidate is surfacing the already-readable legacy Runtime handoff artifacts as explicit read-only stubs.
Risks / notes:
The compatibility fallback only widened accepted current-era adoption field variants; it did not change the meaning of adoption verdicts or implementation-result resolution.

Cycle 11

Chosen task:
Surface the two repo-backed legacy Runtime handoff artifacts as explicit read-only handoff stubs.
Why it won:
From the refreshed host snapshot, the top three bounded candidates were: (1) expose the already-supported legacy Runtime handoffs in the handoff list, (2) add compatibility for the older invalid `cli-anything` Runtime follow-up record, and (3) reopen broader legacy Runtime history mapping. Candidate 1 won on mission usefulness, verification strength, regression risk, and dependency readiness because the detail parser already existed and the slice improved the product surface without doctrine drift.
Affected layer:
Host/workbench handoff read surface.
Owning lane:
Architecture (meta / product surface quality).
Mission usefulness:
Makes the two historical Architecture-to-Runtime handoffs visible in the product-owned handoff list instead of only being directly readable by path.
Proof path:
`hosts/web-host/data.ts`
`frontend/src/app.ts`
`scripts/check-frontend-host.ts`
`runtime/handoff/2026-03-22-autoresearch-architecture-to-runtime-handoff.md`
`runtime/handoff/2026-03-23-scientify-literature-monitoring-architecture-to-runtime-handoff.md`
Rollback path:
Revert the legacy Runtime handoff stub builder in `hosts/web-host/data.ts`, revert the frontend stub-kind typing change, and revert the repo-backed snapshot assertions in `scripts/check-frontend-host.ts`.
Stop-line:
Expose the two existing historical Runtime handoffs as read-only workbench stubs, verify them, and stop without attempting canonical Runtime-stage mapping or legacy Runtime record normalization.
Files touched:
`hosts/web-host/data.ts`
`frontend/src/app.ts`
`scripts/check-frontend-host.ts`
Verification run:
`npx tsx -` (repo-backed `readDirectiveFrontendSnapshot(...)` check for `runtime_handoff_legacy` stub presence)
`npm run check:frontend-host`
`npm run check`
Result:
The workbench handoff list now includes two `runtime_handoff_legacy` stubs with truthful `historical_handoff` status and an explicit boundary warning that they are inspectable only, not members of the current non-executing Runtime v0 chain.
Next likely move:
Reassess the remaining handoff surface; the next bounded candidate is compatibility support for the single legacy `cli-anything` Runtime follow-up artifact that still surfaces as `invalid_artifact_state`.
Risks / notes:
This slice intentionally stopped at list visibility. It did not reinterpret the historical Runtime handoffs as active Runtime v0 work.

Cycle 12

Chosen task:
Legacy deferred Runtime follow-up compatibility for the historical `cli-anything` follow-up record.
Why it won:
After Cycle 11, the refreshed handoff snapshot had one remaining `invalid_artifact_state`: `runtime/follow-up/2026-03-20-cli-anything-runtime-follow-up-record.md`. The top three bounded options were: (1) add a read-only compatibility fallback for that single legacy deferred follow-up, (2) reopen broader legacy Runtime history mapping, and (3) shift immediately to the next ts-edge DEEP Engine slice. Candidate 1 won because it removed the last invalid handoff artifact with strong verification and much lower doctrine risk than broader Runtime-history work.
Affected layer:
Host/workbench handoff read surface.
Owning lane:
Architecture (meta / product surface quality).
Mission usefulness:
Makes the last historical invalid handoff artifact inspectable through the product surface without pretending it belongs to the current non-executing Runtime v0 chain.
Proof path:
`hosts/web-host/data.ts`
`frontend/src/app.ts`
`scripts/check-frontend-host.ts`
`runtime/follow-up/2026-03-20-cli-anything-runtime-follow-up-record.md`
Rollback path:
Revert the legacy deferred Runtime follow-up fallback in `hosts/web-host/data.ts`, revert the frontend detail branch for `runtime_follow_up_legacy`, and revert the repo-backed assertions in `scripts/check-frontend-host.ts`.
Stop-line:
Make the single legacy deferred Runtime follow-up readable and visible as a historical handoff stub, verify it, and stop without attempting canonical Runtime-stage mapping or Mission Control reopening.
Files touched:
`hosts/web-host/data.ts`
`frontend/src/app.ts`
`scripts/check-frontend-host.ts`
Verification run:
`npx tsx -` (repo-backed `readDirectiveFrontendHandoffDetail(...)` and snapshot check for `runtime/follow-up/2026-03-20-cli-anything-runtime-follow-up-record.md`)
`npm run check:frontend-host`
`npm run check`
`npm run report:directive-workspace-state`
Result:
The historical CLI-anything follow-up now resolves as `runtime_follow_up_legacy` with `historical_follow_up` status, a linked re-entry contract path, and an explicit boundary warning. The handoff list now has no invalid artifacts or warnings.
Next likely move:
Reassess the whole repo truth again; with the handoff surface now clean, the strongest bounded next move shifts back to shared Engine code rather than host-surface cleanup.
Risks / notes:
This fallback only activates when the current Runtime v0 follow-up parser fails and the artifact still carries enough structure to be treated as a historical deferred follow-up.

Cycle 13

Chosen task:
ts-edge DEEP proof-stage chaining in the shared Engine planning pipeline.
Why it won:
With the handoff surface clean, the top three bounded candidates were: (1) the next ts-edge DEEP slice for proof-stage chaining, (2) broader legacy Runtime history mapping, and (3) a parked Runtime promotion review. Candidate 1 won because it adds the most shared Engine value, has strong verification, and is fully dependency-ready, while the legacy Runtime path remains policy-heavy and the parked Runtime cases remain intentionally closed.
Affected layer:
Shared Engine planning pipeline.
Owning lane:
Architecture (DEEP Engine self-improvement).
Mission usefulness:
Advances the real ts-edge structural adoption target by carrying progressive stage-output chaining one seam deeper into Engine proof planning.
Proof path:
`engine/lane.ts`
`engine/directive-workspace-lanes.ts`
`engine/directive-engine.ts`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-progressive-proof-stage-chaining-2026-03-28-implementation-result.md`
Rollback path:
Revert the proof-stage chaining changes in `engine/lane.ts`, `engine/directive-workspace-lanes.ts`, and `engine/directive-engine.ts`, then remove the `dw-pressure-engine-progressive-proof-stage-chaining-2026-03-28` DEEP case chain.
Stop-line:
Make proof planning consume the typed extraction, adaptation, and improvement outputs, verify it, and stop without touching integration planning.
Files touched:
`engine/lane.ts`
`engine/directive-workspace-lanes.ts`
`engine/directive-engine.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-progressive-proof-stage-chaining-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-progressive-proof-stage-chaining-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-progressive-proof-stage-chaining-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-progressive-proof-stage-chaining-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-progressive-proof-stage-chaining-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-progressive-proof-stage-chaining-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-progressive-proof-stage-chaining-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-progressive-proof-stage-chaining-2026-03-28-implementation-result.md`
Verification run:
`npx tsx -` (direct `DirectiveEngine.processSource(...)` proof-plan inspection for the widened staged proof input)
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-progressive-proof-stage-chaining-2026-03-28-implementation-result.md`
`npm run check`
Result:
The Engine now has a third real progressive planning seam: proof planning consumes typed extraction, adaptation, and improvement output through `DirectiveEngineLaneProofPlanningInput`, while integration planning remains untouched. The new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Reassess whether the next best bounded step is the final ts-edge integration-stage chaining seam or whether another whole-product truth/quality task has become more valuable.
Risks / notes:
This slice intentionally changed only the proof seam. It did not broaden into integration chaining, Runtime work, or host work.

Cycle 14

Chosen task:
ts-edge DEEP integration-stage chaining in the shared Engine planning pipeline.
Why it won:
After the proof-stage slice verified cleanly, the next highest-ROI bounded option was the final remaining progressive ts-edge seam. It added direct shared Engine value with strong verification and lower risk than reopening policy-heavy legacy Runtime history work.
Affected layer:
Shared Engine planning pipeline.
Owning lane:
Architecture (DEEP Engine self-improvement).
Mission usefulness:
Completes the progressive stage-output chain through integration planning so the Engine no longer treats integration as a flat sibling of the earlier stages.
Proof path:
`engine/lane.ts`
`engine/directive-workspace-lanes.ts`
`engine/directive-engine.ts`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-progressive-integration-stage-chaining-2026-03-28-implementation-result.md`
Rollback path:
Revert the integration-stage chaining changes in `engine/lane.ts`, `engine/directive-workspace-lanes.ts`, and `engine/directive-engine.ts`, then remove the `dw-pressure-engine-progressive-integration-stage-chaining-2026-03-28` DEEP case chain.
Stop-line:
Make integration planning consume typed extraction, adaptation, improvement, and proof output, verify it, and stop without reopening Runtime, frontend, or retained-stage bookkeeping.
Files touched:
`engine/lane.ts`
`engine/directive-workspace-lanes.ts`
`engine/directive-engine.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-progressive-integration-stage-chaining-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-progressive-integration-stage-chaining-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-progressive-integration-stage-chaining-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-progressive-integration-stage-chaining-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-progressive-integration-stage-chaining-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-progressive-integration-stage-chaining-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-progressive-integration-stage-chaining-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-progressive-integration-stage-chaining-2026-03-28-implementation-result.md`
Verification run:
`npx tsx -` (direct `DirectiveEngine.processSource(...)` integration-proposal inspection for the widened staged integration input)
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-progressive-integration-stage-chaining-2026-03-28-implementation-result.md`
`npm run check`
Result:
The Engine now has a fourth real progressive planning seam: integration planning consumes typed extraction, adaptation, improvement, and proof output through `DirectiveEngineLaneIntegrationPlanningInput`. The new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Reassess whether the next best bounded step is permanent verification coverage for the progressive Engine chain or a different shared-truth slice.
Risks / notes:
This slice intentionally stopped at integration planning. It did not add retained-stage bookkeeping, Runtime work, or host-surface changes.

Cycle 15

Chosen task:
Permanent verification coverage for the progressive Engine stage-chaining path.
Why it won:
After the fourth ts-edge DEEP seam verified cleanly, the next highest-ROI bounded move was making that staged Engine path permanent in repo checks. It added shared Engine value with stronger regression protection than any remaining non-policy candidate.
Affected layer:
Shared Engine validation.
Owning lane:
Architecture (DEEP Engine self-improvement).
Mission usefulness:
Keeps the staged extraction -> adaptation -> improvement -> proof -> integration path real by failing fast if a future change silently collapses it back into the old flat-plan pattern.
Proof path:
`scripts/check-directive-engine-stage-chaining.ts`
`package.json`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-progressive-stage-chaining-verification-2026-03-28-implementation-result.md`
Rollback path:
Revert `scripts/check-directive-engine-stage-chaining.ts`, revert the `package.json` check wiring, and remove the `dw-pressure-engine-progressive-stage-chaining-verification-2026-03-28` DEEP case chain.
Stop-line:
Add one focused staged Engine verification script, wire it into `npm run check`, verify it, and stop without reopening Runtime or legacy policy work.
Files touched:
`scripts/check-directive-engine-stage-chaining.ts`
`package.json`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-progressive-stage-chaining-verification-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-progressive-stage-chaining-verification-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-progressive-stage-chaining-verification-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-progressive-stage-chaining-verification-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-progressive-stage-chaining-verification-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-progressive-stage-chaining-verification-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-progressive-stage-chaining-verification-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-progressive-stage-chaining-verification-2026-03-28-implementation-result.md`
Verification run:
`npm run check:directive-engine-stage-chaining`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-progressive-stage-chaining-verification-2026-03-28-implementation-result.md`
`npm run check`
Result:
The staged Engine path now has permanent focused verification in repo checks. `npm run check` now includes the new check, and the DEEP verification case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Strengthen the new staged Engine verification with a Runtime control case so the shared Engine refactor also proves it did not drift Runtime behavior.
Risks / notes:
This slice intentionally used the repo's existing Architecture decision contract, including the accepted self-improvement category/method values, instead of inventing a new verification artifact schema.

Cycle 16

Chosen task:
Runtime no-drift coverage for the staged Engine verification.
Why it won:
After the permanent staged Engine check landed, the next highest-ROI bounded move was proving the shared Engine refactor did not drift the Runtime lane. That reduced regression risk more directly than any remaining non-policy candidate.
Affected layer:
Shared Engine validation.
Owning lane:
Architecture (DEEP Engine self-improvement).
Mission usefulness:
Ensures the new staged Architecture refactor cannot silently change default Runtime proof or integration behavior without failing repo checks.
Proof path:
`scripts/check-directive-engine-stage-chaining.ts`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stage-chaining-runtime-control-verification-2026-03-28-implementation-result.md`
Rollback path:
Revert the Runtime control additions in `scripts/check-directive-engine-stage-chaining.ts` and remove the `dw-pressure-engine-stage-chaining-runtime-control-verification-2026-03-28` DEEP case chain.
Stop-line:
Add one Runtime control source to the staged Engine verification, verify it, and stop without reopening parked Runtime work or touching legacy Runtime policy.
Files touched:
`scripts/check-directive-engine-stage-chaining.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stage-chaining-runtime-control-verification-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stage-chaining-runtime-control-verification-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stage-chaining-runtime-control-verification-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stage-chaining-runtime-control-verification-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stage-chaining-runtime-control-verification-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stage-chaining-runtime-control-verification-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-stage-chaining-runtime-control-verification-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stage-chaining-runtime-control-verification-2026-03-28-implementation-result.md`
Verification run:
`npm run check:directive-engine-stage-chaining`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stage-chaining-runtime-control-verification-2026-03-28-implementation-result.md`
`npm run check`
Result:
The staged Engine verification now includes a Runtime control case. It proves the Runtime source still routes to Runtime, keeps the default Runtime proof path, and keeps the default Runtime integration next action. The new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Assess whether the same focused Engine verification should add one Discovery control case for full lane coverage, or whether the run has reached a true hard stop.
Risks / notes:
This slice intentionally verified Runtime no-drift through one focused source only. It did not reopen Runtime promotion, execution, or host integration.

Cycle 17

Chosen task:
Discovery no-drift coverage for the staged Engine verification.
Why it won:
After the Runtime control slice verified cleanly, the next highest-ROI bounded move was completing shared Engine lane coverage by proving the staged refactor also preserved Discovery behavior. That was still safer and more useful than reopening any policy-heavy legacy work.
Affected layer:
Shared Engine validation.
Owning lane:
Architecture (DEEP Engine self-improvement).
Mission usefulness:
Ensures the staged shared Engine refactor cannot silently drift Discovery proof or integration behavior without failing repo checks.
Proof path:
`scripts/check-directive-engine-stage-chaining.ts`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stage-chaining-discovery-control-verification-2026-03-28-implementation-result.md`
Rollback path:
Revert the Discovery control additions in `scripts/check-directive-engine-stage-chaining.ts` and remove the `dw-pressure-engine-stage-chaining-discovery-control-verification-2026-03-28` DEEP case chain.
Stop-line:
Add one Discovery control source to the staged Engine verification, verify it, and stop without changing Discovery mechanics or reopening policy work.
Files touched:
`scripts/check-directive-engine-stage-chaining.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stage-chaining-discovery-control-verification-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stage-chaining-discovery-control-verification-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stage-chaining-discovery-control-verification-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stage-chaining-discovery-control-verification-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stage-chaining-discovery-control-verification-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stage-chaining-discovery-control-verification-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-stage-chaining-discovery-control-verification-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stage-chaining-discovery-control-verification-2026-03-28-implementation-result.md`
Verification run:
`npm run check:directive-engine-stage-chaining`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stage-chaining-discovery-control-verification-2026-03-28-implementation-result.md`
`npm run check`
Result:
The staged Engine verification now covers all three lanes. It proves the Architecture path stays progressively chained, the Runtime lane keeps its default bounded capability behavior, and Discovery keeps its default intake/routing behavior. The new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Only reopen if you want a separate policy case for the remaining legacy Runtime history semantics. There is no longer a clear high-ROI mechanical slice in the staged Engine verification seam.
Risks / notes:
This slice intentionally verified Discovery no-drift through one focused source only. It did not change Discovery routing logic, queue semantics, or workflow advancement.

Cycle 18

Chosen task:
Direct canonical focus compatibility for the deferred legacy CLI-anything Runtime follow-up.
Why it won:
From refreshed repo truth, the smallest remaining shared-truth gap was an outright canonical-report crash on one known historical Runtime follow-up that the host already treated as readable legacy history. That was more bounded and more verifiable than the broader legacy Runtime record family.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect one known deferred Runtime follow-up directly instead of crashing or requiring manual reconstruction.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/follow-up/2026-03-20-cli-anything-runtime-follow-up-record.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-follow-up-focus-compatibility-2026-03-28-implementation-result.md`
Rollback path:
Revert the legacy Runtime follow-up compatibility additions in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-follow-up-focus-compatibility-2026-03-28` DEEP case chain.
Stop-line:
Resolve the deferred legacy Runtime follow-up cleanly through the canonical report, add focused composition coverage, verify it, and stop without mapping legacy Runtime handoffs or records.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-follow-up-focus-compatibility-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-follow-up-focus-compatibility-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-follow-up-focus-compatibility-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-follow-up-focus-compatibility-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-follow-up-focus-compatibility-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-follow-up-focus-compatibility-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-follow-up-focus-compatibility-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-follow-up-focus-compatibility-2026-03-28-implementation-result.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/follow-up/2026-03-20-cli-anything-runtime-follow-up-record.md`
`npm run check:directive-workspace-composition`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-follow-up-focus-compatibility-2026-03-28-implementation-result.md`
`npm run check`
Result:
The deferred legacy CLI-anything Runtime follow-up now resolves directly as `runtime_follow_up_legacy` with a preserved defer route, preserved proposed host, and an explicit read-only legacy-deferred Runtime stage. The new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Reassess whether the next best bounded slice is direct canonical focus for the two legacy Runtime handoff artifacts or whether another smaller shared-truth seam has become more valuable.
Risks / notes:
This slice intentionally preserved the artifact as historical read-only Runtime state only. It did not map legacy Runtime records or old execution / promotion semantics.

Cycle 19

Chosen task:
Direct canonical focus compatibility for the two legacy architecture-to-runtime handoff artifacts.
Why it won:
After Cycle 18, the next highest-ROI bounded shared-truth gap was the pair of legacy Runtime handoffs that still crashed the canonical report even though the workbench already treated them as readable historical Runtime artifacts. This stayed bounded and strongly verifiable without entering the broader legacy Runtime record family.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect the two known historical Runtime handoffs directly instead of crashing or requiring manual reconstruction.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/handoff/2026-03-22-autoresearch-architecture-to-runtime-handoff.md`
`runtime/handoff/2026-03-23-scientify-literature-monitoring-architecture-to-runtime-handoff.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-handoff-focus-compatibility-2026-03-28-implementation-result.md`
Rollback path:
Revert the legacy Runtime handoff compatibility additions in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-handoff-focus-compatibility-2026-03-28` DEEP case chain.
Stop-line:
Resolve the two legacy Runtime handoffs cleanly through the canonical report, add focused composition coverage, verify it, and stop without mapping legacy Runtime records or legacy follow-up execution history.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-handoff-focus-compatibility-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-handoff-focus-compatibility-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-handoff-focus-compatibility-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-handoff-focus-compatibility-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-handoff-focus-compatibility-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-handoff-focus-compatibility-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-handoff-focus-compatibility-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-handoff-focus-compatibility-2026-03-28-implementation-result.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/handoff/2026-03-22-autoresearch-architecture-to-runtime-handoff.md`
`npm run report:directive-workspace-state -- runtime/handoff/2026-03-23-scientify-literature-monitoring-architecture-to-runtime-handoff.md`
`npm run check:directive-workspace-composition`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-handoff-focus-compatibility-2026-03-28-implementation-result.md`
`npm run check`
Result:
The two legacy Runtime handoffs now resolve directly as `runtime_handoff_legacy` with preserved proposed hosts and explicit read-only historical Runtime stages. The new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Refresh the remaining legacy Runtime surface and decide whether there is still another bounded compatibility slice left before the run truly reaches the broader legacy Runtime policy boundary.
Risks / notes:
This slice intentionally preserved the artifacts as historical read-only Runtime state only. It did not map legacy Runtime records, old execution semantics, or promotion / registry lifecycle meaning.

Cycle 20

Chosen task:
Structured legacy Runtime active-follow-up compatibility in the canonical resolver and workbench detail surface.
Why it won:
After Cycles 18-19, the next highest-ROI bounded shared-truth gap was a known structured historical Runtime follow-up that already linked from the legacy Scientify handoff but still resolved as broken because the reader treated `n/a - active bounded follow-up` like a missing deferred re-entry contract. That was more bounded and more verifiable than the broader narrative follow-up or runtime-record families.
Affected layer:
Shared Engine / Runtime truth surface and workbench follow-up read model.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting both the canonical report and the workbench inspect the structured historical Scientify Runtime follow-up directly as read-only Runtime history without weakening deferred follow-up requirements.
Proof path:
`shared/lib/dw-state.ts`
`hosts/web-host/data.ts`
`scripts/check-directive-workspace-composition.ts`
`scripts/check-frontend-host.ts`
`runtime/follow-up/2026-03-23-scientify-literature-monitoring-runtime-followup.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-active-follow-up-focus-compatibility-2026-03-28-implementation-result.md`
Rollback path:
Revert the active-bounded legacy Runtime follow-up compatibility changes in `shared/lib/dw-state.ts`, `hosts/web-host/data.ts`, `scripts/check-directive-workspace-composition.ts`, and `scripts/check-frontend-host.ts`, then remove the `dw-pressure-engine-legacy-runtime-active-follow-up-focus-compatibility-2026-03-28` DEEP case chain.
Stop-line:
Resolve the structured historical Scientify Runtime follow-up cleanly through the canonical report and workbench detail surface, verify it, and stop without mapping the looser narrative follow-up family or legacy Runtime records.
Files touched:
`shared/lib/dw-state.ts`
`hosts/web-host/data.ts`
`scripts/check-directive-workspace-composition.ts`
`scripts/check-frontend-host.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-active-follow-up-focus-compatibility-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-active-follow-up-focus-compatibility-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-active-follow-up-focus-compatibility-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-active-follow-up-focus-compatibility-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-active-follow-up-focus-compatibility-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-active-follow-up-focus-compatibility-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-active-follow-up-focus-compatibility-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-active-follow-up-focus-compatibility-2026-03-28-implementation-result.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/follow-up/2026-03-23-scientify-literature-monitoring-runtime-followup.md`
`npm run check:directive-workspace-composition`
`npm run check:frontend-host`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-active-follow-up-focus-compatibility-2026-03-28-implementation-result.md`
`npm run check`
Result:
The structured historical Scientify Runtime follow-up now resolves as clean `runtime_follow_up_legacy` history with preserved host and no false deferred-contract inconsistency, and the workbench now reads the `-runtime-followup.md` filename shape instead of surfacing it as invalid state.
Next likely move:
Re-rank the remaining legacy Runtime surface and decide whether the next best bounded slice is a read-only compatibility parser for the looser narrative `*-runtime-followup.md` family or whether the run has reached the broader legacy Runtime policy boundary.
Risks / notes:
The first full `npm run check` attempt hit a transient `frontend/dist/index.html` build lock immediately after `check:frontend-host`; a clean retry passed without further code changes. This slice intentionally preserved deferred legacy follow-up requirements and did not map old execution / promotion semantics.

Cycle 21

Chosen task:
Read-only compatibility for the narrative legacy Runtime `*-runtime-followup.md` family.
Why it won:
After Cycle 20, the next highest-ROI bounded gap was the remaining trio of historical Runtime follow-ups that still could not resolve cleanly through canonical truth or the workbench because they used a looser narrative shape rather than the structured deferred/active follow-up format.
Affected layer:
Shared Engine / Runtime truth surface and workbench follow-up read model.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver and workbench inspect the remaining narrative historical Runtime follow-ups directly as read-only Runtime history instead of falling back to invalid artifact state.
Proof path:
`shared/lib/dw-state.ts`
`hosts/web-host/data.ts`
`scripts/check-directive-workspace-composition.ts`
`scripts/check-frontend-host.ts`
`runtime/follow-up/2026-03-20-agent-orchestrator-runtime-followup.md`
`runtime/follow-up/2026-03-20-promptfoo-runtime-followup.md`
`runtime/follow-up/2026-03-20-puppeteer-browser-runtime-followup.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-narrative-followup-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the narrative legacy Runtime follow-up compatibility changes in `shared/lib/dw-state.ts`, `hosts/web-host/data.ts`, `scripts/check-directive-workspace-composition.ts`, and `scripts/check-frontend-host.ts`, then remove the `dw-pressure-engine-legacy-runtime-narrative-followup-compat-2026-03-28` DEEP case chain.
Stop-line:
Resolve the remaining narrative legacy Runtime follow-ups cleanly through canonical truth and the workbench, verify them, and stop without mapping legacy Runtime records or callable/promotion history.
Files touched:
`shared/lib/dw-state.ts`
`hosts/web-host/data.ts`
`scripts/check-directive-workspace-composition.ts`
`scripts/check-frontend-host.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-narrative-followup-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-narrative-followup-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-narrative-followup-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-narrative-followup-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-narrative-followup-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-narrative-followup-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-narrative-followup-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-narrative-followup-compat-2026-03-28-implementation-result.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/follow-up/2026-03-20-agent-orchestrator-runtime-followup.md`
`npm run report:directive-workspace-state -- runtime/follow-up/2026-03-20-promptfoo-runtime-followup.md`
`npm run report:directive-workspace-state -- runtime/follow-up/2026-03-20-puppeteer-browser-runtime-followup.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-narrative-followup-compat-2026-03-28-implementation-result.md`
`npm run check:frontend-host`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The remaining narrative historical Runtime follow-ups now resolve as clean `runtime_follow_up_legacy` history with preserved candidate identity and current status, and the workbench now surfaces them as historical follow-up stubs instead of invalid artifacts.
Next likely move:
Refresh the remaining legacy Runtime surface and decide whether the next best bounded slice is the stable `runtime/records/*-runtime-record.md` family or whether the run has reached the broader policy boundary.
Risks / notes:
This slice intentionally stayed read-only and did not map historical execution, promotion, or callable semantics.

Cycle 22

Chosen task:
Direct canonical focus compatibility for the stable historical `runtime/records/*-runtime-record.md` family.
Why it won:
After Cycle 21, the next highest-ROI bounded gap was the stable Runtime record family that still threw `unsupported Runtime artifact path` even though those files shared a predictable structured shape and could be treated as read-only legacy Runtime history.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect the legacy Runtime record family directly instead of crashing or forcing manual reconstruction of those historical cases.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/records/2026-03-19-agentics-runtime-record.md`
`runtime/records/2026-03-21-promptfoo-runtime-record.md`
`runtime/records/2026-03-23-scientify-literature-monitoring-runtime-record.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-record-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the legacy Runtime record compatibility additions in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-record-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Resolve representative legacy Runtime records cleanly through the canonical report, add focused composition coverage, verify them, and stop without mapping historical proof/execution/promotion/registry semantics.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-record-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-record-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-record-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-record-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-record-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-record-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-record-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-record-focus-compat-2026-03-28-implementation-result.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-19-agentics-runtime-record.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-21-promptfoo-runtime-record.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-23-scientify-literature-monitoring-runtime-record.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-record-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The legacy Runtime record family now resolves directly as clean `runtime_record_legacy` history with preserved candidate identity and proposed host, and the new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Re-rank the remaining historical Runtime families and decide whether there is one more bounded read-only compatibility slice before the run truly reaches the callable/promotion policy boundary.
Risks / notes:
This slice intentionally stayed read-only and did not map historical proof, execution, promotion, or registry semantics into the current non-executing Runtime v0 chain.

Cycle 23

Chosen task:
Direct canonical focus compatibility for the historical `runtime/registry/*-registry-entry.md` family.
Why it won:
After Cycle 22, the next highest-ROI bounded gap was the structured Runtime registry-entry family that still threw `unsupported Runtime artifact path`, while the proof/execution family remained more policy-heavy because those files describe active execution semantics rather than retained read-only runtime history.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect historical Runtime registry entries directly instead of crashing or forcing manual reconstruction of those retained callable-history artifacts.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/registry/2026-03-20-agentics-registry-entry.md`
`runtime/registry/2026-03-21-promptfoo-registry-entry.md`
`runtime/registry/2026-03-22-v0-normalizer-transformation-registry-entry.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-registry-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the legacy Runtime registry compatibility additions in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-registry-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Resolve representative historical Runtime registry entries cleanly through the canonical report, add focused composition coverage, verify them, and stop without mapping promotion-record or proof/execution semantics.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-registry-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-registry-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-registry-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-registry-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-registry-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-registry-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-registry-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-registry-focus-compat-2026-03-28-implementation-result.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/registry/2026-03-20-agentics-registry-entry.md`
`npm run report:directive-workspace-state -- runtime/registry/2026-03-21-promptfoo-registry-entry.md`
`npm run report:directive-workspace-state -- runtime/registry/2026-03-22-v0-normalizer-transformation-registry-entry.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-registry-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The historical Runtime registry-entry family now resolves directly as clean `runtime_registry_legacy` history with preserved candidate identity and proposed host, and the new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Re-rank the remaining historical Runtime families and decide whether promotion-record focus compatibility is still one more bounded read-only slice or whether the run has reached the broader callable/promotion policy boundary.
Risks / notes:
This slice intentionally stayed read-only and did not map promotion-record, proof/execution, or callable continuation semantics into the current non-executing Runtime v0 chain.

Cycle 24

Chosen task:
Direct canonical focus compatibility for the historical `runtime/promotion-records/*-promotion-record.md` family.
Why it won:
After Cycle 23, the promotion-record family was still the last structured historical Runtime family that remained unsupported while staying read-only enough to avoid the active proof/execution policy wall.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect historical Runtime promotion contracts directly instead of crashing or forcing manual reconstruction of those retained callable-history artifacts.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/promotion-records/2026-03-20-agentics-promotion-record.md`
`runtime/promotion-records/2026-03-21-promptfoo-promotion-record.md`
`runtime/promotion-records/2026-03-22-v0-normalizer-transformation-promotion-record.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-promotion-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the legacy Runtime promotion compatibility additions in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-promotion-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Resolve representative historical Runtime promotion records cleanly through the canonical report, add focused composition coverage, verify them, and stop without mapping registry or proof/execution semantics.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-promotion-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-promotion-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-promotion-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-promotion-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-promotion-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-promotion-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-promotion-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-promotion-focus-compat-2026-03-28-implementation-result.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/promotion-records/2026-03-20-agentics-promotion-record.md`
`npm run report:directive-workspace-state -- runtime/promotion-records/2026-03-21-promptfoo-promotion-record.md`
`npm run report:directive-workspace-state -- runtime/promotion-records/2026-03-22-v0-normalizer-transformation-promotion-record.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-promotion-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The historical Runtime promotion-record family now resolves directly as clean `runtime_promotion_record_legacy` history with preserved candidate identity and proposed host, and the new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Only reopen if the repo explicitly chooses to map the remaining mixed proof/execution family, because that remaining surface is no longer one stable artifact contract.
Risks / notes:
This slice intentionally stayed read-only and did not map registry, proof/execution, or callable continuation semantics into the current non-executing Runtime v0 chain.

Cycle 25

Chosen task:
Direct canonical focus compatibility for the historical Runtime transformation record/proof family.
Why it won:
After the promotion-record slice, the remaining Runtime history still had one materially stable read-only subfamily: `runtime/records/*-transformation-record.md` and paired `*-transformation-proof.json`, including one older proof JSON variant. That was a bounded shared-truth improvement with stronger verification than the mixed runtime-slice proof/execution family.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect historical Runtime transformation records and proof JSONs directly instead of crashing or forcing manual reconstruction of those retained transformation cases.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/records/2026-03-22-context-pack-async-latency-transformation-record.md`
`runtime/records/2026-03-22-context-pack-async-latency-transformation-proof.json`
`runtime/records/2026-03-22-v0-normalizer-transformation-record.md`
`runtime/records/2026-03-22-v0-normalizer-transformation-proof.json`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the legacy Runtime transformation compatibility additions in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-transformation-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Resolve representative historical Runtime transformation records and proof JSONs cleanly through the canonical report, add focused composition coverage, verify them, and stop without mapping runtime-slice proof/execution, proof-checklist, registry, or callable continuation semantics.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-focus-compat-2026-03-28-implementation-result.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-22-context-pack-async-latency-transformation-record.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-22-context-pack-async-latency-transformation-proof.json`
`npm run report:directive-workspace-state -- runtime/records/2026-03-22-v0-normalizer-transformation-proof.json`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The historical Runtime transformation record/proof family now resolves directly as clean `runtime_transformation_record_legacy` and `runtime_transformation_proof_legacy` history, including the older `candidate_id` / `baseline_measurement` proof JSON variant, and the new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Re-rank the remaining broken completed Runtime history. The next bounded candidate is the label-style transformation-record subset that still points at descriptive “this record” proof labels instead of canonical artifact paths.
Risks / notes:
This slice intentionally stayed read-only and did not map runtime-slice proof/execution, proof-checklist, registry, or callable continuation semantics into the current non-executing Runtime v0 chain.

Cycle 26

Chosen task:
Normalize descriptive non-artifact baseline/result labels in the remaining historical Runtime transformation records.
Why it won:
After Cycle 25, the remaining broken completed transformation cases collapsed to two records whose only truth drift was descriptive `this record (...)` labels being misread as broken linked artifacts. That was the smallest remaining high-ROI Runtime-history seam.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by clearing the last transformation-record false negatives without widening into runtime-slice proof/execution semantics.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/records/2026-03-22-remaining-backend-test-boilerplate-transformation-record.md`
`runtime/records/2026-03-22-automation-test-boilerplate-transformation-record.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-label-link-normalization-2026-03-28-implementation-result.md`
Rollback path:
Revert the descriptive transformation-link normalization in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-transformation-label-link-normalization-2026-03-28` DEEP case chain.
Stop-line:
Resolve the two label-style historical Runtime transformation records cleanly through the canonical report, verify the focused checker coverage, and stop without touching the runtime-slice proof/execution family.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-label-link-normalization-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-label-link-normalization-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-label-link-normalization-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-label-link-normalization-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-label-link-normalization-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-label-link-normalization-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-label-link-normalization-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-label-link-normalization-2026-03-28-implementation-result.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-22-remaining-backend-test-boilerplate-transformation-record.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-22-automation-test-boilerplate-transformation-record.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-transformation-label-link-normalization-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The two remaining label-style transformation records now resolve as clean `runtime_transformation_record_legacy` history, the queue no longer has transformation-family `completed_inconsistent` rows, and the new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Re-rank the remaining broken completed Runtime history. The next bounded candidate is the historical `runtime-slice-01-proof.md` family if it remains a stable read-only compatibility slice.
Risks / notes:
This slice intentionally treated descriptive labels as notes only when they were not real Directive Workspace artifact references; it did not weaken linked-artifact validation for actual paths.

Cycle 27

Chosen task:
Direct canonical focus compatibility for the historical `runtime/records/*-runtime-slice-01-proof.md` family.
Why it won:
After Cycle 26, the last live `completed_inconsistent` queue rows all pointed at the historical runtime-slice proof family. That was a stable, high-value, read-only subfamily with stronger verification than the remaining execution/checklist surfaces.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect historical runtime-slice proofs directly and by clearing the last stale completed queue warnings while preserving the negative-path hardening in staged verification.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/records/2026-03-21-promptfoo-runtime-slice-01-proof.md`
`runtime/records/2026-03-21-agent-orchestrator-cli-runtime-slice-01-proof.md`
`runtime/records/2026-03-21-superpowers-runtime-slice-01-proof.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-slice-proof-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the legacy Runtime slice-proof compatibility additions in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-slice-proof-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Resolve representative historical runtime-slice proofs cleanly through the canonical report, keep stale completed-status hardening alive in staged verification, and stop without mapping execution/checklist semantics.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-slice-proof-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-slice-proof-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-slice-proof-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-slice-proof-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-slice-proof-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-slice-proof-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-slice-proof-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-slice-proof-focus-compat-2026-03-28-implementation-result.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-21-promptfoo-runtime-slice-01-proof.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-21-agent-orchestrator-cli-runtime-slice-01-proof.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-slice-proof-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The historical runtime-slice proof family now resolves directly as clean `runtime_slice_proof_legacy` history, the live queue no longer has any `completed_inconsistent` rows, and the stale completed-status hardening still holds through staged verification when the recorded result artifact is absent.
Next likely move:
Re-rank the remaining unsupported Runtime history. The next bounded candidates are the three `runtime-slice-01-execution.md` artifacts and the single Scientify proof checklist.
Risks / notes:
This slice intentionally stayed read-only and did not map runtime-slice execution, proof-checklist, transformation-proof, promotion, registry, or callable continuation semantics into the current non-executing Runtime v0 chain.

Cycle 28

Chosen task:
Direct canonical focus compatibility for the historical `runtime/records/*-runtime-slice-01-execution.md` family.
Why it won:
After Cycle 27, the next clean bounded Runtime-history seam was the three stable execution artifacts. They were still unsupported by the canonical resolver, but unlike the remaining checklist family they shared one contract and linked cleanly back to the proof family already normalized.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect historical runtime-slice executions directly instead of crashing or forcing manual reconstruction of those retained Runtime cases.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/records/2026-03-21-agent-orchestrator-cli-runtime-slice-01-execution.md`
`runtime/records/2026-03-21-puppeteer-runtime-slice-01-execution.md`
`runtime/records/2026-03-21-skills-manager-runtime-slice-01-execution.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-slice-execution-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the legacy Runtime slice-execution compatibility additions in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-slice-execution-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Resolve representative historical runtime-slice executions cleanly through the canonical report, add focused composition coverage, verify them, and stop without mapping proof-checklist, transformation-proof, promotion, registry, or callable continuation semantics.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-slice-execution-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-slice-execution-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-slice-execution-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-slice-execution-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-slice-execution-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-slice-execution-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-slice-execution-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-slice-execution-focus-compat-2026-03-28-implementation-result.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-21-agent-orchestrator-cli-runtime-slice-01-execution.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-21-puppeteer-runtime-slice-01-execution.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-21-skills-manager-runtime-slice-01-execution.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-slice-execution-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The historical runtime-slice execution family now resolves directly as clean `runtime_slice_execution_legacy` history with preserved candidate identity, linked proof, and inferred host when available, and the new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Re-rank the remaining unsupported Runtime history. The next bounded candidate is the single historical Scientify proof checklist if it can be normalized as a read-only checklist artifact without importing broader execution semantics.
Risks / notes:
This slice intentionally stayed read-only and did not map proof-checklist, transformation-proof, promotion, registry, or callable continuation semantics into the current non-executing Runtime v0 chain.

Cycle 29

Chosen task:
Direct canonical focus compatibility for the historical Scientify `runtime-slice-01-proof-checklist.md` artifact.
Why it won:
After Cycle 28, the next highest-ROI bounded gap was the single remaining stable proof-checklist artifact. It was still an unsupported direct Runtime focus, but it linked cleanly back to the already-normalized Scientify runtime record and slice proof without requiring a broader legacy policy decision.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect the historical Scientify proof checklist directly instead of crashing or forcing manual reconstruction of that retained Runtime case.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/records/2026-03-23-scientify-literature-monitoring-runtime-slice-01-proof-checklist.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-proof-checklist-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the legacy Runtime proof-checklist compatibility additions in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-proof-checklist-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Resolve the historical Scientify Runtime proof checklist cleanly through the canonical report, add focused composition coverage, verify it, and stop without mapping the linked live-fetch proof or broader legacy Runtime execution semantics.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-proof-checklist-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-proof-checklist-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-proof-checklist-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-proof-checklist-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-proof-checklist-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-proof-checklist-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-proof-checklist-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-proof-checklist-focus-compat-2026-03-28-implementation-result.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-23-scientify-literature-monitoring-runtime-slice-01-proof-checklist.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-proof-checklist-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The historical Scientify proof checklist now resolves directly as clean `runtime_proof_checklist_legacy` history with preserved linked runtime record, linked slice proof, and linked host truth, and the new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Re-rank the remaining unsupported Runtime history. The next bounded candidate is the single Scientify live-fetch proof artifact if it can be normalized as another read-only historical proof contract without opening broader execution semantics.
Risks / notes:
This slice intentionally stayed read-only and did not map the linked live-fetch proof, promotion, registry, or callable continuation semantics into the current non-executing Runtime v0 chain.

Cycle 30

Chosen task:
Direct canonical focus compatibility for the historical Scientify `live-fetch-proof.md` artifact.
Why it won:
After Cycle 29, the next highest-ROI bounded gap was the single remaining stable Scientify live-fetch proof artifact. It linked directly to the already-normalized runtime record and proof checklist, so it was a clean read-only compatibility slice with stronger verification than the remaining JSON evidence artifacts.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect the historical Scientify live-fetch proof directly instead of crashing or dropping its linked Runtime context.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/records/2026-03-23-scientify-literature-monitoring-runtime-slice-02-live-fetch-proof.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-proof-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the legacy Runtime live-fetch proof compatibility additions in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-live-fetch-proof-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Resolve the historical Scientify live-fetch proof cleanly through the canonical report, add focused composition coverage, verify it, and stop without mapping the linked gate snapshot or produced pool artifacts.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-proof-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-proof-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-proof-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-proof-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-proof-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-proof-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-proof-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-proof-focus-compat-2026-03-28-implementation-result.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-23-scientify-literature-monitoring-runtime-slice-02-live-fetch-proof.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-proof-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The historical Scientify live-fetch proof now resolves directly as clean `runtime_live_fetch_proof_legacy` history with preserved linked runtime record, linked proof checklist, and inferred host truth, and the new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Re-rank the remaining unsupported Runtime history. The next bounded candidate is the Scientify live-fetch gate snapshot if it can be normalized as a read-only evidence artifact linked back to the live-fetch proof without opening broader JSON artifact semantics.
Risks / notes:
The blocking bug was a parser edge case: the artifact used immediate sibling bullets under `Linked Runtime record:` and `Linked proof checklist:` rather than indented nested bullets. The shared helper now handles both layouts without broadening path validation.

Cycle 31

Chosen task:
Direct canonical focus compatibility for the historical Scientify `live-fetch-gate-snapshot.json` artifact.
Why it won:
After Cycle 30, the next highest-ROI bounded gap was the single remaining stable Scientify gate-snapshot artifact. It linked cleanly back to the already-normalized live-fetch proof, runtime record, and proof checklist without requiring broader pool-data or execution policy decisions.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect the historical Scientify live-fetch gate snapshot directly instead of crashing or forcing manual reconstruction of the linked proof chain.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/records/2026-03-23-scientify-literature-monitoring-live-fetch-gate-snapshot.json`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-gate-snapshot-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the legacy Runtime live-fetch gate snapshot compatibility additions in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-live-fetch-gate-snapshot-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Resolve the historical Scientify live-fetch gate snapshot cleanly through the canonical report, add focused composition coverage, verify it, and stop without mapping the live qualified-pool or degraded-pool JSON artifacts.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-gate-snapshot-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-gate-snapshot-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-gate-snapshot-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-gate-snapshot-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-gate-snapshot-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-gate-snapshot-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-gate-snapshot-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-gate-snapshot-focus-compat-2026-03-28-implementation-result.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-23-scientify-literature-monitoring-live-fetch-gate-snapshot.json`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-live-fetch-gate-snapshot-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The historical Scientify live-fetch gate snapshot now resolves directly as clean `runtime_live_fetch_gate_snapshot_legacy` history with preserved linkage back to the live-fetch proof and runtime record, and the new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Re-rank the remaining unsupported Runtime history. The next bounded candidate is the live literature-monitoring pool artifact family if it can be normalized as read-only Runtime evidence without widening into sample JSONs or broader output semantics.
Risks / notes:
This slice intentionally inferred the linked live-fetch proof from the snapshot filename rather than inventing new workflow linkage. It stayed bounded to the gate snapshot only and did not normalize the produced pool artifacts.

Cycle 32

Chosen task:
Direct canonical focus compatibility for the historical Scientify live qualified/degraded pool artifacts.
Why it won:
After Cycle 31, the next highest-ROI bounded gap was the pair of live literature-monitoring output artifacts. They shared one stable contract, one linked gate snapshot, and one linked live-fetch proof, so they were a clean read-only evidence-family slice with stronger verification than the remaining sample or note artifacts.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect the historical Scientify live qualified/degraded pool artifacts directly instead of crashing or forcing manual reconstruction from the linked proof chain.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/records/2026-03-23-scientify-literature-monitoring-live-qualified-pool.json`
`runtime/records/2026-03-23-scientify-literature-monitoring-live-degraded-pool.json`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-live-pool-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the legacy Runtime live-pool compatibility additions in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-live-pool-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Resolve the historical Scientify live qualified/degraded pool artifacts cleanly through the canonical report, add focused composition coverage, verify them, and stop without mapping the sample JSON artifacts.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-live-pool-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-live-pool-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-live-pool-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-live-pool-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-live-pool-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-live-pool-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-live-pool-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-live-pool-focus-compat-2026-03-28-implementation-result.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-23-scientify-literature-monitoring-live-qualified-pool.json`
`npm run report:directive-workspace-state -- runtime/records/2026-03-23-scientify-literature-monitoring-live-degraded-pool.json`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-live-pool-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The historical Scientify live qualified/degraded pool artifacts now resolve directly as clean `runtime_live_pool_artifact_legacy` history with preserved linkage back to the live-fetch proof and runtime record, and the new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Re-rank the remaining unsupported Runtime history. The next bounded candidate is the sample literature-monitoring JSON pair if it can be normalized as read-only sample evidence without inventing live proof linkage.
Risks / notes:
This slice intentionally stayed on the live artifact family only. It did not normalize the representative sample JSON outputs, and it preserved the linked proof path rather than inventing a new workflow stage.

Cycle 33

Chosen task:
Direct canonical focus compatibility for the historical Scientify sample qualified/degraded pool artifacts.
Why it won:
After Cycle 32, the sample JSON pair remained the strongest bounded structured evidence family. It was more mechanically stable and more strongly verifiable than the remaining older note and decision artifacts.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect historical sample evidence artifacts directly instead of crashing or forcing manual interpretation outside the shared read surface.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/records/2026-03-23-scientify-literature-monitoring-qualified-pool-sample.json`
`runtime/records/2026-03-23-scientify-literature-monitoring-degraded-quality-sample.json`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-sample-pool-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the sample-pool compatibility additions in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-sample-pool-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Support the historical sample pair only, verify it, and stop without touching the older note / decision family.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-sample-pool-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-sample-pool-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-sample-pool-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-sample-pool-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-sample-pool-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-sample-pool-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-sample-pool-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-sample-pool-focus-compat-2026-03-28-implementation-result.md`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-23-scientify-literature-monitoring-qualified-pool-sample.json`
`npm run report:directive-workspace-state -- runtime/records/2026-03-23-scientify-literature-monitoring-degraded-quality-sample.json`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-sample-pool-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The sample pair now resolves directly as clean `runtime_sample_pool_artifact_legacy` history, with self current-head truth and no invented live proof or host linkage, and the new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Re-rank the remaining unsupported Runtime notes and decision artifacts to see whether any other structured family is still bounded enough for another compatibility slice.
Risks / notes:
This slice intentionally kept sample evidence standalone. It did not infer live proof, gate snapshot, or host linkage beyond what the artifacts themselves truthfully support.

Cycle 34

Chosen task:
Direct canonical focus compatibility for the historical Runtime system-bundle note family.
Why it won:
After Cycle 33, the remaining unsupported Runtime records collapsed into a few families. The five system-bundle notes were the strongest next slice because they shared one stable naming contract, were read-only, and unlocked more truth coverage than the smaller note pairs without opening policy-heavy live semantics.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect the historical Runtime system-bundle note family directly instead of crashing or forcing manual interpretation outside the shared read surface.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/records/2026-03-21-runtime-system-bundle-02-boundary-inventory.md`
`runtime/records/2026-03-21-runtime-system-bundle-03-source-pack-catalog-cleanup.md`
`runtime/records/2026-03-21-runtime-system-bundle-04-promotion-profile-normalization.md`
`runtime/records/2026-03-21-runtime-system-bundle-05-import-source-policy-alignment.md`
`runtime/records/2026-03-21-runtime-system-bundle-06-legacy-live-runtime-normalization.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-system-bundle-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the system-bundle compatibility additions in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-system-bundle-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Support the five system-bundle notes only, verify them, and stop without touching the remaining validation, rehearsal, or decision-note families.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-system-bundle-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-system-bundle-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-system-bundle-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-system-bundle-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-system-bundle-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-system-bundle-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-system-bundle-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-system-bundle-focus-compat-2026-03-28-implementation-result.md`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-21-runtime-system-bundle-02-boundary-inventory.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-21-runtime-system-bundle-03-source-pack-catalog-cleanup.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-21-runtime-system-bundle-04-promotion-profile-normalization.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-21-runtime-system-bundle-05-import-source-policy-alignment.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-21-runtime-system-bundle-06-legacy-live-runtime-normalization.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-system-bundle-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The five historical Runtime system-bundle notes now resolve directly as clean `runtime_system_bundle_note_legacy` history, with self current-head truth and no invented host/proof/promotion linkage, and the new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Refresh the remaining unsupported Runtime record set and choose between the smaller validation-note pair, the daily-status digest, or the agent-orchestrator precondition/decision family based on structure and verification strength.
Risks / notes:
This slice intentionally kept the system-bundle notes read-only. It did not map Mission Control mirrors, host-owned surfaces, or live Runtime continuation semantics.

Cycle 35

Chosen task:
Direct canonical focus compatibility for the historical Runtime docs-maintenance validation note pair.
Why it won:
After Cycle 34, the remaining unsupported Runtime records split into smaller families. The validation-note pair was the strongest next slice because it had a stable two-file contract, lower regression risk than the agent-orchestrator trio, and stronger direct verification than the single-note leftovers.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect the historical Runtime docs-maintenance validation notes directly instead of crashing or forcing manual interpretation outside the shared read surface.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/records/2026-03-20-agentics-docs-maintenance-validation.md`
`runtime/records/2026-03-20-agentics-docs-maintenance-validation-rerun.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-validation-note-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the validation-note compatibility additions in `shared/lib/dw-state.ts` and `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-validation-note-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Support the validation-note pair only, verify it, and stop without touching the daily-status, fallback-rehearsal, CLI-anything, or agent-orchestrator families.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-validation-note-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-validation-note-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-validation-note-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-validation-note-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-validation-note-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-validation-note-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-validation-note-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-validation-note-focus-compat-2026-03-28-implementation-result.md`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-20-agentics-docs-maintenance-validation.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-20-agentics-docs-maintenance-validation-rerun.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-validation-note-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The historical Runtime docs-maintenance validation note pair now resolves directly as clean `runtime_validation_note_legacy` history, with self current-head truth and no invented host/proof/continuation linkage, and the new DEEP case resolves cleanly at `architecture.implementation_result.success`.
Next likely move:
Refresh the remaining unsupported Runtime record set and choose between the agent-orchestrator precondition/decision trio and the smaller standalone notes based on structure and verification strength.
Risks / notes:
This slice intentionally stayed on the validation-note pair only. The first attempt failed on a missing helper name and was corrected before final verification.

### Cycle 36
Chosen task:
Direct canonical focus compatibility for the historical agent-orchestrator precondition/decision note family.
Why it won:
After Cycle 35, the remaining unsupported Runtime records had collapsed to six files. The agent-orchestrator trio was the strongest next slice because it shared one candidate, preserved explicit follow-up linkage, and offered stronger leverage than the singleton note leftovers.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect the historical agent-orchestrator precondition/decision notes directly instead of crashing or forcing manual interpretation outside the shared read surface.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/records/2026-03-21-agent-orchestrator-cli-precondition-proof.md`
`runtime/records/2026-03-21-agent-orchestrator-precondition-correction.md`
`runtime/records/2026-03-21-agent-orchestrator-host-adapter-decision.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-precondition-decision-note-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the precondition/decision-note compatibility additions in `shared/lib/dw-state.ts` and the checker assertions in `scripts/check-directive-workspace-composition.ts`, then remove the `dw-pressure-engine-legacy-runtime-precondition-decision-note-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Support the three agent-orchestrator notes only, verify them, and stop without touching daily-status, fallback-rehearsal, or CLI-anything.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-precondition-decision-note-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-precondition-decision-note-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-precondition-decision-note-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-precondition-decision-note-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-precondition-decision-note-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-precondition-decision-note-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-precondition-decision-note-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-precondition-decision-note-focus-compat-2026-03-28-implementation-result.md`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-21-agent-orchestrator-cli-precondition-proof.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-21-agent-orchestrator-precondition-correction.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-21-agent-orchestrator-host-adapter-decision.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-precondition-decision-note-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The historical agent-orchestrator precondition/decision note family now resolves as clean `runtime_precondition_decision_note_legacy` history, preserves the explicit Runtime follow-up linkage where those notes actually declare it, and does not invent any host, proof, or promotion continuation.
Next likely move:
Refresh the remaining unsupported Runtime record set and choose between the CLI-anything re-entry preconditions slice, the mini-swe fallback rehearsal, and the daily-status digest based on structure and verification strength.
Risks / notes:
The first checker run exposed that these historical notes store their follow-up as an absolute workspace path in `## Source Follow-up`; the slice was corrected by normalizing absolute in-workspace optional links through the shared helper instead of adding a one-off parser.

### Cycle 37
Chosen task:
Direct canonical focus compatibility for the historical CLI-Anything re-entry preconditions note.
Why it won:
After Cycle 36, the remaining unsupported Runtime records had dropped to two singleton notes plus the structured CLI-Anything re-entry preconditions note. That note was the strongest next slice because it already matched the legacy Runtime record contract almost field-for-field, so one narrow path-recognition widening could admit it without inventing a new legacy reader family.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect the historical CLI-Anything re-entry note directly through the shared legacy Runtime record contract instead of forcing manual interpretation outside the canonical read surface.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/records/2026-03-22-cli-anything-reentry-preconditions-slice-01.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-cli-anything-reentry-record-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the narrow legacy Runtime record path-recognition widening and the focused checker assertions, then remove the `dw-pressure-engine-legacy-runtime-cli-anything-reentry-record-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Support the CLI-Anything re-entry note only, verify it, and stop without touching the remaining fallback-rehearsal or daily-status notes.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-cli-anything-reentry-record-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-cli-anything-reentry-record-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-cli-anything-reentry-record-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-cli-anything-reentry-record-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-cli-anything-reentry-record-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-cli-anything-reentry-record-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-cli-anything-reentry-record-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-cli-anything-reentry-record-focus-compat-2026-03-28-implementation-result.md`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-22-cli-anything-reentry-preconditions-slice-01.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-cli-anything-reentry-record-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The historical CLI-Anything re-entry preconditions note now resolves as clean `runtime_record_legacy` history, preserves its declared proposed host, and no longer fails because its external origin path sits outside `directive-workspace`.
Next likely move:
Refresh the remaining unsupported Runtime record set and choose between the mini-swe fallback rehearsal note and the agentics daily-status digest based on structure, verification strength, and policy risk.
Risks / notes:
The first attempt exposed two real constraints and corrected them before final verification:
- `Origin path` for this note points outside `directive-workspace`, so legacy Runtime record parsing now treats that field as optional non-product evidence rather than in-repo artifact linkage.
- The new DEEP case artifacts had to be rewritten into the compact bounded-start/result/adoption/target lifecycle format the canonical Architecture reader already expects.

### Cycle 38
Chosen task:
Direct canonical focus compatibility for the historical mini-swe fallback rehearsal note.
Why it won:
After Cycle 37, the remaining unsupported Runtime notes had dropped to the mini-swe fallback rehearsal and the daily-status digest. The fallback rehearsal was the stronger next slice because it could reuse the existing legacy Runtime slice-execution contract with one narrow filename widening and safe proof-link inference, while the digest was already drifting toward policy-heavy, non-case semantics.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by letting the canonical resolver inspect the historical mini-swe fallback rehearsal directly through the shared legacy Runtime slice-execution contract instead of forcing manual interpretation outside the canonical read surface.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/records/2026-03-20-mini-swe-agent-fallback-rehearsal.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-mini-swe-fallback-rehearsal-focus-compat-2026-03-28-implementation-result.md`
Rollback path:
Revert the narrow legacy Runtime slice-execution path-recognition widening and the focused checker assertions, then remove the `dw-pressure-engine-legacy-runtime-mini-swe-fallback-rehearsal-focus-compat-2026-03-28` DEEP case chain.
Stop-line:
Support the mini-swe fallback rehearsal only, verify it, and stop without touching the daily-status digest.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-mini-swe-fallback-rehearsal-focus-compat-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-mini-swe-fallback-rehearsal-focus-compat-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-mini-swe-fallback-rehearsal-focus-compat-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-mini-swe-fallback-rehearsal-focus-compat-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-mini-swe-fallback-rehearsal-focus-compat-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-legacy-runtime-mini-swe-fallback-rehearsal-focus-compat-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-legacy-runtime-mini-swe-fallback-rehearsal-focus-compat-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-mini-swe-fallback-rehearsal-focus-compat-2026-03-28-implementation-result.md`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-20-mini-swe-agent-fallback-rehearsal.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-legacy-runtime-mini-swe-fallback-rehearsal-focus-compat-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
Result:
The historical mini-swe fallback rehearsal now resolves as clean `runtime_slice_execution_legacy` history, preserves a truthful null proof-link boundary, and no longer sits outside the canonical Runtime truth surface.
Next likely move:
Refresh the remaining unsupported Runtime note set and decide whether the last daily-status digest is still a credible bounded task or the true hard stop.
Risks / notes:
This slice intentionally stayed read-only and corrected one subtle inference seam before verification:
- proof-link inference from slice execution now only happens for standard `-runtime-slice-01-execution.md` filenames, so the fallback rehearsal does not self-link or invent a missing proof artifact.

### Cycle 39
Chosen task:
DEEP policy boundary decision for the legacy daily-status digest.
Why it won:
After Cycle 38, the prior mechanical compatibility loop was complete enough to stop. The last unsupported Runtime note was no longer a stable case-family gap; it was a mixed operator digest already attached to a supported Runtime proof, so the highest-ROI next move was an explicit boundary decision instead of another compatibility widening.
Affected layer:
Shared Engine / Runtime truth boundary.
Owning lane:
Architecture (meta / shared Engine policy).
Mission usefulness:
Improves whole-product truthfulness by making it explicit that the canonical truth anchor remains case-focused here, and by preventing fake progress through synthetic candidate mapping or ad hoc digest semantics.
Proof path:
`runtime/records/2026-03-20-agentics-daily-status-digest.md`
`runtime/records/2026-03-19-agentics-runtime-record.md`
`runtime/records/2026-03-20-agentics-runtime-slice-01-proof.md`
`runtime/follow-up/DIRECTIVE_AGENTICS_SLICE_2_PLAYBOOKS.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-daily-status-digest-policy-boundary-2026-03-28-bounded-result.md`
Rollback path:
Delete the `dw-pressure-engine-legacy-runtime-daily-status-digest-policy-boundary-2026-03-28` DEEP case chain and revert this run-log entry if a later product decision explicitly requires first-class non-case digest semantics.
Stop-line:
Record one explicit DEEP policy decision for the daily-status digest, verify that the new bounded result resolves cleanly and that canonical checks still pass, and stop without changing truth-anchor code.
Files touched:
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-daily-status-digest-policy-boundary-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-daily-status-digest-policy-boundary-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-daily-status-digest-policy-boundary-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-daily-status-digest-policy-boundary-2026-03-28-bounded-result-adoption-decision.json`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/records/2026-03-20-agentics-runtime-slice-01-proof.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-pressure-engine-legacy-runtime-daily-status-digest-policy-boundary-2026-03-28-bounded-result.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
The DEEP policy case now records outcome `D`: do not add direct canonical support for the historical daily-status digest. Treat it as read-only output evidence under the supported Runtime record/proof chain, and prefer future migration of similar digest content into supported record/proof/report artifacts rather than inventing standalone digest case semantics.
Next likely move:
If there is another high-ROI policy seam to reopen later, the strongest remaining one is historical queue lifecycle normalization semantics, not daily-status direct-focus support.
Risks / notes:
No truth-anchor code changed in this cycle. Direct canonical focus on the daily-status digest remains unsupported intentionally, and that is now an explicit boundary rather than an unresolved compatibility gap.

### Cycle 40
Chosen task:
DEEP policy boundary decision for historical queue lifecycle normalization semantics.
Why it won:
After Cycle 39, the next remaining ambiguity was no longer a parser gap. Raw queue `routed` still covered both live routed stubs and already-progressed cases, while the queue header still called queue status authoritative. The highest-ROI next move was an explicit normalization policy, not a stored-history rewrite.
Affected layer:
Shared Engine / Discovery queue truth boundary.
Owning lane:
Architecture (meta / shared Engine policy).
Mission usefulness:
Improves whole-product truthfulness by clarifying when historical queue lifecycle wording should be treated as equivalent to modern state, when it should remain historical evidence only, and why mass migration is not the default.
Proof path:
`discovery/intake-queue.json`
`shared/lib/discovery-intake-queue-writer.ts`
`shared/lib/discovery-intake-queue-transition.ts`
`hosts/web-host/data.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-queue-lifecycle-normalization-policy-boundary-2026-03-28-bounded-result.md`
Rollback path:
Delete the `dw-pressure-engine-discovery-queue-lifecycle-normalization-policy-boundary-2026-03-28` DEEP case chain and revert this run-log entry if a later product decision explicitly requires stored historical queue migration or a different queue source-of-truth boundary.
Stop-line:
Record one explicit DEEP policy decision for historical queue lifecycle normalization, verify that the new bounded result resolves cleanly and that canonical checks still pass, and stop without changing queue code or mass-editing historical rows.
Files touched:
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-queue-lifecycle-normalization-policy-boundary-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-queue-lifecycle-normalization-policy-boundary-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-queue-lifecycle-normalization-policy-boundary-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-queue-lifecycle-normalization-policy-boundary-2026-03-28-bounded-result-adoption-decision.json`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-queue-lifecycle-normalization-policy-boundary-2026-03-28-bounded-result.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
The DEEP policy case now records outcome `C`: partial normalization boundary with interpretive-only normalization. Clean `completed` and still-live `routed` queue entries remain equivalent to modern meaning when resolver truth is clean; `routed` entries that have already progressed downstream stay stored as historical routed evidence and should only be normalized through derived read-model status such as `routed_progressed`, not by mass queue rewrite.
Next likely move:
No automatic queue rewrite should follow from this policy. If a later product need appears, the next separate case would be a narrow reversible migration policy for one stored subset such as `routed_progressed`.
Risks / notes:
No queue code changed in this cycle. The policy intentionally leaves raw historical queue rows intact and treats current-head truth, not queue mutation, as the source of workflow continuation.

## Final handoff
Completed cycles
- 40

Key changes made
- Hardened shared truth and queue semantics so routed/completed rows, Discovery-held routes, and monitor-backed Discovery cases resolve truthfully instead of overstating clean workflow state.
- Repaired current-era and legacy Architecture artifact compatibility so bounded starts, bounded results, adopted artifacts, and implementation-result chains resolve cleanly through the canonical state reader.
- Cleaned the handoff surface end-to-end:
  - surfaced legacy Runtime handoff stubs
  - surfaced the historical CLI-anything deferred Runtime follow-up as a read-only legacy stub
  - removed invalid artifact states from the workbench handoff list
- Advanced ts-edge DEEP Engine work through four real chained seams:
  - extraction -> adaptation
  - extraction + adaptation -> improvement
  - extraction + adaptation + improvement -> proof
  - extraction + adaptation + improvement + proof -> integration
- Added permanent staged Engine verification and extended it with Runtime and Discovery control sources, so the shared Engine check now covers all three lanes.
- Extended legacy Runtime truth coverage through the structured historical families and then closed the remaining bounded singleton notes:
  - structured and narrative legacy follow-ups
  - legacy runtime records
  - legacy slice proof / slice execution artifacts
  - legacy proof checklist / live-fetch / pool artifacts
  - legacy system-bundle and validation notes
  - legacy precondition / host-adapter decision notes
  - CLI-Anything re-entry preconditions
  - mini-swe fallback rehearsal
- Recorded an explicit DEEP policy boundary for the remaining daily-status digest instead of forcing fake compatibility:
  - direct canonical digest support remains closed
  - the digest is treated as output evidence under the supported Runtime record/proof chain
  - future similar digest content should be normalized into supported record/proof/report artifacts if product pressure ever justifies it
- Recorded an explicit DEEP policy boundary for historical queue lifecycle normalization:
  - normalization is partial and interpretive only
  - clean `completed` and still-live `routed` entries keep their modern meaning when resolver truth is clean
  - progressed or deferred historical `routed` rows remain stored evidence and should be surfaced through derived read-model state instead of mass rewrite

Verification summary
- `npm run check` passes.
- `npm run report:directive-workspace-state` passes.
- `npm run check:directive-workspace-composition` passes.
- `npm run check:frontend-host` passes.
- `npm run check:directive-engine-stage-chaining` passes.
- Focused reports for the new DEEP implementation-result artifacts resolve cleanly with `integrityState = ok`.
- The staged Engine verification now proves:
  - progressive Architecture chaining remains real
  - Runtime keeps its default proof and integration behavior
  - Discovery keeps its default intake/routing behavior

Unresolved issues
- There is no longer a remaining safe mechanical compatibility gap in the legacy Runtime record family.
- `runtime/records/2026-03-20-agentics-daily-status-digest.md` remains intentionally unsupported as a direct canonical focus because it is a mixed mission/operator digest rather than a stable case artifact.
- Historical queue lifecycle rows are intentionally preserved as raw evidence and adjusted through interpretive read-model normalization; there is no settled product need for stored historical queue rewrite.

Why the run stopped
- No clear bounded mechanical slice remains in the legacy Runtime compatibility thread.
- The daily-status digest now has an explicit policy boundary, so continuing there would require a separate product-level decision to create a non-case digest surface rather than another safe compatibility widening.
- The queue normalization boundary is now explicit too, so continuing further would require a separate product-level decision to rewrite stored historical queue rows rather than another safe bounded compatibility or policy slice.

Highest-ROI next step
- No automatic next step is required from the current truth.
- First bounded step in that next run:
- only if product pressure appears for stored queue parity, open a separate DEEP shared Engine / Discovery migration case for one reversible subset such as historical `routed_progressed` rows
- define the smallest reversible sync boundary before implementing any queue mutation logic

### Cycle 41
Chosen task:
DEEP Discovery route legality hardening for missing concrete required next artifacts.
Why it won:
The current highest-ROI bounded truth gap was no longer queue policy or legacy compatibility. Discovery routing could still present a legal approval-style next step when a concrete required downstream artifact was absent and the queue no longer carried any downstream stub, because that missing artifact only landed in `missingExpectedArtifacts` and did not trip the integrity gate.
Affected layer:
Shared Engine / Discovery truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by blocking one real false-positive legality case without broadening into generic missing-artifact blocking, broken-link scanning, or stale-status repair.
Proof path:
`shared/lib/dw-state.ts`
`engine/workspace-truth.ts`
`scripts/check-directive-workspace-composition.ts`
`discovery/routing-log/2026-03-25-dw-real-mini-swe-agent-runtime-route-v0-2026-03-25-routing-record.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-discovery-required-next-artifact-legality-hardening-2026-03-28-implementation-result.md`
Rollback path:
Revert the narrow Discovery-route legality rule in `shared/lib/dw-state.ts`, revert the staged composition assertion, and delete the `dw-pressure-engine-discovery-required-next-artifact-legality-hardening-2026-03-28` DEEP case chain.
Stop-line:
Implement one resolver-side legality rule plus one staged composition check, verify the new DEEP case resolves cleanly, run full workspace checks, and stop without broadening into general missing-artifact blocking or any queue/status redesign.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-required-next-artifact-legality-hardening-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-required-next-artifact-legality-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-required-next-artifact-legality-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-required-next-artifact-legality-hardening-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-discovery-required-next-artifact-legality-hardening-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-discovery-required-next-artifact-legality-hardening-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-discovery-required-next-artifact-legality-hardening-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-discovery-required-next-artifact-legality-hardening-2026-03-28-implementation-result.md`
`implement.md`
Verification run:
`npm run check:directive-workspace-composition`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-discovery-required-next-artifact-legality-hardening-2026-03-28-implementation-result.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
Discovery route resolution now blocks the concrete overstatement where a route still looks legally approveable even though its required downstream artifact is absent and the queue no longer carries any downstream stub. The staged composition check reproduces and proves the block, and the full workspace checks remain clean.
Next likely move:
If this hardening thread is intentionally reopened later, the next bounded legality slice would be a separate stale current-head mismatch class, not broader missing-artifact blocking.
Risks / notes:
The slice intentionally leaves future-stage `missingExpectedArtifacts` alone. Only the concrete missing required-next-artifact case is upgraded to an inconsistency.

### Cycle 42
Chosen task:
DEEP stale current-head legality mismatch hardening for Runtime approval-boundary artifacts.
Why it won:
After Cycle 41, the next real truth seam was no longer missing downstream artifacts. The resolver already knew a stronger `currentHead`, but stale Runtime follow-up, record, proof, and capability-boundary artifacts still exposed their old local approval step. That was a bounded, shared, strongly verifiable mismatch.
Affected layer:
Shared Engine / Runtime truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by making stale Runtime approval-boundary artifacts redirect operators to the live `currentHead` instead of advertising a no-longer-satisfiable local approval step.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`runtime/follow-up/2026-03-25-dw-real-mini-swe-agent-runtime-route-v0-2026-03-25-runtime-follow-up-record.md`
`runtime/04-capability-boundaries/2026-03-25-dw-real-mini-swe-agent-runtime-route-v0-2026-03-25-runtime-capability-boundary.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stale-current-head-runtime-approval-legality-hardening-2026-03-28-implementation-result.md`
Rollback path:
Revert the narrow stale-current-head downgrade in `shared/lib/dw-state.ts`, revert the composition assertions, and delete the `dw-pressure-engine-stale-current-head-runtime-approval-legality-hardening-2026-03-28` DEEP case chain.
Stop-line:
Implement one resolver-side stale-local-step downgrade for Runtime approval-boundary artifacts, verify it through focused reports and composition checks, run full workspace checks, and stop without broadening into generic stale-status repair or non-Runtime stale-local semantics.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-runtime-approval-legality-hardening-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-runtime-approval-legality-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-runtime-approval-legality-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-runtime-approval-legality-hardening-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stale-current-head-runtime-approval-legality-hardening-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stale-current-head-runtime-approval-legality-hardening-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-stale-current-head-runtime-approval-legality-hardening-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stale-current-head-runtime-approval-legality-hardening-2026-03-28-implementation-result.md`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/follow-up/2026-03-25-dw-real-mini-swe-agent-runtime-route-v0-2026-03-25-runtime-follow-up-record.md`
`npm run report:directive-workspace-state -- runtime/04-capability-boundaries/2026-03-25-dw-real-mini-swe-agent-runtime-route-v0-2026-03-25-runtime-capability-boundary.md`
`npm run check:directive-workspace-composition`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stale-current-head-runtime-approval-legality-hardening-2026-03-28-implementation-result.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
Stale Runtime approval-boundary artifacts now downgrade their artifact-local next step to an explicit `currentHead` redirect, while the live case-level `nextLegalStep` remains truthful and unchanged. The live pending Runtime follow-up still keeps its ordinary artifact-local approval step.
Next likely move:
If this hardening thread is deliberately reopened later, the next bounded slice should target stale current-head mismatch on Architecture local approval surfaces, not a generic stale-status rewrite.
Risks / notes:
This slice intentionally leaves `integrityState` and case-level `nextLegalStep` unchanged. It only corrects stale artifact-local approval wording on advanced Runtime approval-boundary artifacts.

### Cycle 43
Chosen task:
DEEP truth-anchor reorganization pass to split the `dw-state.ts` Runtime monolith into coherent shared and Runtime modules while keeping the public resolver entrypoint stable.
Why it won:
`shared/lib/dw-state.ts` had become a 5,700+ line central bottleneck. The highest-ROI bounded move was a behavior-preserving structural split that makes future truth/check/report work safer without reopening any Runtime, Architecture, Discovery, or policy thread.
Affected layer:
Shared Engine truth / resolver organization.
Owning lane:
Architecture (meta / shared Engine maintainability).
Mission usefulness:
Reduces structural coupling in the canonical truth anchor, isolates the heaviest Runtime-specific parsing/resolution block, and keeps the stable `resolveDirectiveWorkspaceState(...)` surface intact for hosts, checkers, and reports.
Proof path:
`shared/lib/dw-state.ts`
`shared/lib/dw-state/shared.ts`
`shared/lib/dw-state/runtime.ts`
`scripts/check-directive-workspace-composition.ts`
`scripts/report-directive-workspace-state.ts`
Rollback path:
Revert `shared/lib/dw-state.ts`, delete `shared/lib/dw-state/shared.ts` and `shared/lib/dw-state/runtime.ts`, and rerun the canonical checks to restore the pre-reorganization single-file layout.
Stop-line:
Finish one coherent behavior-preserving extraction pass, keep the top-level `shared/lib/dw-state.ts` import path stable, verify canonical checks and reports, record the result, and stop without mixing in new semantics or policy changes.
Files touched:
`shared/lib/dw-state.ts`
`shared/lib/dw-state/shared.ts`
`shared/lib/dw-state/runtime.ts`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- runtime/05-promotion-readiness/2026-03-27-dw-source-scientify-research-workflow-plugin-2026-03-27-promotion-readiness.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-20-agentics-runtime-slice-01-proof.md`
`npm run report:directive-workspace-state -- runtime/records/2026-03-21-promptfoo-runtime-slice-01-proof.md`
`npm run check:directive-workspace-composition`
`npm run check`
`npm run report:directive-workspace-state`
Result:
The canonical resolver import path stayed stable at `shared/lib/dw-state.ts`, but the file is now down to the public types, Architecture/Discovery/overview resolution, and final dispatch. Shared path/current-head/helper logic moved into `shared/lib/dw-state/shared.ts`, and the entire Runtime reader/state/legacy resolution family moved into `shared/lib/dw-state/runtime.ts`. Canonical checks and reports still pass without semantic drift.
Next likely move:
If another reorganization pass is justified later, the next bounded structural extraction should target the remaining Architecture-heavy block inside `shared/lib/dw-state.ts`, not a new product or policy seam.
Risks / notes:
This cycle intentionally changed structure, not truth meaning. Discovery, Runtime, and Architecture behavior stayed stable under the canonical checks, and the top-level resolver entrypoint remained unchanged for all callers.

### Cycle 44
Chosen task:
Post-reorganization TypeScript repair for the extracted `dw-state` module boundary.
Why it won:
The reorganization pass left real editor/compiler regressions in the extracted helper file even though the runtime strip-types checks still passed. The highest-ROI next slice was to restore the missing shared type surface and typed JSON field handling so the new module boundary is valid for both the compiler and the IDE.
Affected layer:
Shared Engine truth / resolver typing surface.
Owning lane:
Architecture (meta / shared Engine maintainability).
Mission usefulness:
Makes the new `shared/lib/dw-state/` structure safe to maintain by removing false editor breakage and restoring compiler-verifiable contracts across the extracted Runtime/shared helper boundary.
Proof path:
`shared/lib/dw-state/shared.ts`
`shared/lib/dw-state/runtime.ts`
`shared/lib/dw-state.ts`
`shared/lib/discovery-route-opener.ts`
Rollback path:
Revert the shared type/helper additions in `shared/lib/dw-state/shared.ts`, revert the small type import cleanup in `shared/lib/dw-state.ts`, revert the queue-document type alignment in `shared/lib/discovery-route-opener.ts`, and rerun the compiler/check commands.
Stop-line:
Fix the extracted-module TypeScript errors only, verify the affected files with a direct `tsc` pass plus canonical checks, and stop without changing truth semantics.
Files touched:
`shared/lib/dw-state/shared.ts`
`shared/lib/dw-state.ts`
`shared/lib/discovery-route-opener.ts`
`implement.md`
Verification run:
`tsc --noEmit --allowImportingTsExtensions --module nodenext --moduleResolution nodenext --target es2022 --lib es2022 --types node --skipLibCheck shared/lib/dw-state.ts shared/lib/dw-state/shared.ts shared/lib/dw-state/runtime.ts shared/lib/discovery-route-opener.ts`
`npm run check:directive-workspace-composition`
`npm run report:directive-workspace-state -- runtime/05-promotion-readiness/2026-03-27-dw-source-scientify-research-workflow-plugin-2026-03-27-promotion-readiness.md`
`npm run check`
Result:
The missing Runtime/legacy Runtime artifact type aliases are now present where the shared readers use them, unsafe `unknown` JSON string reads were replaced with a typed helper, the refactor-specific `currentHead`/type-import issues in `dw-state.ts` were corrected, and the route opener now uses the canonical queue document type instead of a hand-written partial queue shape. The extracted truth modules now typecheck cleanly under `tsc`.
Next likely move:
No additional semantic work should follow from this repair. If another structural cleanup is justified later, the next bounded extraction target is the remaining Architecture-heavy block in `shared/lib/dw-state.ts`.
Risks / notes:
This was a typing/structure repair only. Canonical runtime behavior and reports stayed unchanged.

### Cycle 45
Chosen task:
DEEP stale current-head legality mismatch hardening for Architecture bounded-result artifacts.
Why it won:
After the truth-anchor reorganization and Runtime-side stale-current-head downgrade, the highest-ROI remaining shared truth seam was a stale Architecture local-step mismatch. The resolver already knew a stronger `currentHead`, but historical Architecture bounded-result artifacts still exposed their old artifact-local next step even when the live case had reopened or advanced elsewhere.
Affected layer:
Shared Engine / Architecture truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by making stale Architecture bounded-result artifacts redirect operators to the live `currentHead` instead of advertising a no-longer-satisfiable local next step.
Proof path:
`shared/lib/dw-state/shared.ts`
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-bounded-result.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stale-current-head-architecture-bounded-result-legality-hardening-2026-03-28-implementation-result.md`
Rollback path:
Revert the narrow stale-current-head downgrade in `shared/lib/dw-state/shared.ts`, revert the composition assertions, and delete the `dw-pressure-engine-stale-current-head-architecture-bounded-result-legality-hardening-2026-03-28` DEEP case chain.
Stop-line:
Implement one resolver-side stale-local-step downgrade for `architecture_bounded_result`, verify it through focused reports and composition checks, run full workspace checks, and stop without broadening into generic stale-status repair or other Architecture artifact families.
Files touched:
`shared/lib/dw-state/shared.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-bounded-result-legality-hardening-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-bounded-result-legality-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-bounded-result-legality-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-bounded-result-legality-hardening-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stale-current-head-architecture-bounded-result-legality-hardening-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stale-current-head-architecture-bounded-result-legality-hardening-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-stale-current-head-architecture-bounded-result-legality-hardening-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stale-current-head-architecture-bounded-result-legality-hardening-2026-03-28-implementation-result.md`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-bounded-result.md`
`npm run check:directive-workspace-composition`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stale-current-head-architecture-bounded-result-legality-hardening-2026-03-28-implementation-result.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
Stale Architecture bounded-result artifacts now downgrade their artifact-local next step to an explicit `currentHead` redirect, while the live case-level `nextLegalStep` remains truthful and unchanged. The focused reopened GPT Researcher bounded-result case now reports the live continuation point instead of still advertising the old bounded-result action.
Next likely move:
If this hardening thread is deliberately reopened later, the next bounded slice should target stale current-head mismatch on the next Architecture local approval surface, not generic stale-status cleanup.
Risks / notes:
This slice intentionally leaves `integrityState` and case-level `nextLegalStep` unchanged. It only corrects stale artifact-local wording on advanced `architecture_bounded_result` artifacts.

### Cycle 46
Chosen task:
DEEP stale current-head legality mismatch hardening for downstream Architecture local approval surfaces.
Why it won:
After Cycle 45, the same stronger `currentHead` still lost against stale downstream Architecture artifact-local next steps. Adoption, implementation-target, implementation-result, and retained focuses on the reopened GPT Researcher chain still advertised their old local action even though the live case had already moved back to a reopened bounded start.
Affected layer:
Shared Engine / Architecture truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Improves whole-product truthfulness by finishing the remaining downstream Architecture stale-current-head wording family, so old downstream Architecture artifacts redirect operators to the live `currentHead` instead of advertising no-longer-satisfiable local steps.
Proof path:
`shared/lib/dw-state/shared.ts`
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/03-adopted/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-adopted-planned-next.md`
`architecture/04-implementation-targets/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-implementation-target.md`
`architecture/05-implementation-results/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-implementation-result.md`
`architecture/06-retained/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-retained.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stale-current-head-architecture-downstream-legality-hardening-2026-03-28-implementation-result.md`
Rollback path:
Revert the narrow stale-current-head downgrade in `shared/lib/dw-state/shared.ts`, revert the composition assertions, and delete the `dw-pressure-engine-stale-current-head-architecture-downstream-legality-hardening-2026-03-28` DEEP case chain.
Stop-line:
Implement one resolver-side stale-local-step downgrade for downstream Architecture artifacts, verify it through focused reports and composition checks, run full workspace checks, and stop without broadening into handoff/start/evaluation semantics or generic stale-status repair.
Files touched:
`shared/lib/dw-state/shared.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-downstream-legality-hardening-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-downstream-legality-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-downstream-legality-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-downstream-legality-hardening-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stale-current-head-architecture-downstream-legality-hardening-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stale-current-head-architecture-downstream-legality-hardening-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-stale-current-head-architecture-downstream-legality-hardening-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stale-current-head-architecture-downstream-legality-hardening-2026-03-28-implementation-result.md`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- architecture/03-adopted/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-adopted-planned-next.md`
`npm run report:directive-workspace-state -- architecture/04-implementation-targets/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-implementation-target.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-implementation-result.md`
`npm run report:directive-workspace-state -- architecture/06-retained/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-retained.md`
`npm run check:directive-workspace-composition`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stale-current-head-architecture-downstream-legality-hardening-2026-03-28-implementation-result.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
Stale downstream Architecture artifacts now downgrade their artifact-local next step to an explicit `currentHead` redirect, while the live case-level `nextLegalStep` remains truthful and unchanged. The reopened GPT Researcher chain no longer advertises stale local actions from adoption through retained.
Next likely move:
If this hardening thread is deliberately reopened later, the next bounded slice would be the earlier Architecture local surfaces (`architecture_handoff`, `architecture_bounded_start`, or reopened evaluation wording), but that is weaker and should be reranked against other whole-product candidates rather than continued automatically.
Risks / notes:
This slice intentionally leaves `integrityState` and case-level `nextLegalStep` unchanged. It only corrects stale artifact-local wording on downstream Architecture artifacts.

### Cycle 47
Chosen task:
DEEP stale current-head legality mismatch hardening for Architecture opening surfaces.
Why it won:
After Cycle 46, the remaining strongest stale-current-head family was still mechanical and shared: old Architecture handoff and bounded-start artifacts were still advertising artifact-local actions even though the live case had already advanced downstream.
Affected layer:
Shared Engine / Architecture truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Finishes the remaining Architecture opening-surface stale-local-step family so operators are redirected to the live `currentHead` instead of seeing no-longer-satisfiable handoff/start actions.
Proof path:
`shared/lib/dw-state/shared.ts`
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-engine-handoff.md`
`architecture/02-experiments/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-bounded-start.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-implementation-result.md`
Rollback path:
Revert the narrow stale-current-head downgrade in `shared/lib/dw-state/shared.ts`, revert the composition assertions, and delete the `dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28` DEEP case chain.
Stop-line:
Implement one resolver-side stale-local-step downgrade for `architecture_handoff` and `architecture_bounded_start`, verify it through focused reports and composition checks, run full workspace checks, and stop without broadening into later Architecture surfaces or generic stale-status repair.
Files touched:
`shared/lib/dw-state/shared.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-implementation-result.md`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-engine-handoff.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-bounded-start.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
`npm run report:directive-workspace-state`
Result:
Stale Architecture handoff and bounded-start artifacts now downgrade their artifact-local next step to an explicit `currentHead` redirect, while the live case-level `nextLegalStep` remains truthful and unchanged.
Next likely move:
If the stale-current-head thread stays top-ranked, the next bounded slice would be the remaining Architecture closure surfaces: integration, consumption, and stale pre-reopen evaluation wording.
Risks / notes:
This slice intentionally leaves `integrityState` and case-level `nextLegalStep` unchanged. It only corrects stale artifact-local wording on Architecture opening surfaces.

### Cycle 48
Chosen task:
DEEP stale current-head legality mismatch hardening for Architecture closure surfaces.
Why it won:
After Cycle 47, the remaining strongest stale-current-head family was still mechanical and shared: integration, consumption, and the older pre-reopen evaluation artifact still advertised artifact-local actions even though the live case had already moved back to the reopened bounded start.
Affected layer:
Shared Engine / Architecture truth surface.
Owning lane:
Architecture (meta / shared Engine quality).
Mission usefulness:
Completes the remaining Architecture stale-current-head legality family visible in current truth, so old closure artifacts redirect to the live continuation point instead of advertising no-longer-satisfiable local steps.
Proof path:
`shared/lib/dw-state/shared.ts`
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/07-integration-records/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-integration-record.md`
`architecture/08-consumption-records/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-consumption.md`
`architecture/09-post-consumption-evaluations/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-evaluation.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-implementation-result.md`
Rollback path:
Revert the narrow stale-current-head downgrade in `shared/lib/dw-state/shared.ts`, revert the composition assertions, and delete the `dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28` DEEP case chain.
Stop-line:
Implement one resolver-side stale-local-step downgrade for the remaining Architecture closure surfaces, verify it through focused reports and composition checks, run full workspace checks, and stop without broadening into generic stale-status repair or other lanes.
Files touched:
`shared/lib/dw-state/shared.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-implementation-result.md`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- architecture/07-integration-records/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-integration-record.md`
`npm run report:directive-workspace-state -- architecture/08-consumption-records/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-consumption.md`
`npm run report:directive-workspace-state -- architecture/09-post-consumption-evaluations/2026-03-24-dw-real-gpt-researcher-engine-handoff-2026-03-24-continuation-evaluation.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-implementation-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
`npm run report:directive-workspace-state`
Result:
Stale Architecture integration, consumption, and evaluation artifacts now downgrade their artifact-local next step to an explicit `currentHead` redirect, while the live case-level `nextLegalStep` remains truthful and unchanged.
Next likely move:
No automatic next move was taken. The guarded execution loop stopped here because the 4-cycle cap for this run was reached.
Risks / notes:
This slice intentionally leaves `integrityState` and case-level `nextLegalStep` unchanged. It only corrects stale artifact-local wording on Architecture closure surfaces.

### Cycle 49
Chosen task:
Repair the two malformed March 28 Architecture handoff stubs and add one frontend-host regression guard.
Why it won:
Live frontend truth showed the strongest current correctness issue was exactly two repo-generated Architecture handoff files surfacing `handoffWarnings`, while broader Engine and parked-case work remained intentionally stopped.
Affected layer:
Architecture records + frontend host validation.
Owning lane:
Architecture.
Mission usefulness:
Removes a current repo-generated parsing regression from the user-facing handoff surface and prevents the same stub-shape drift from silently reappearing.
Proof path:
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-engine-handoff.md`
`shared/lib/architecture-handoff-start.ts`
`hosts/web-host/data.ts`
`scripts/check-frontend-host.ts`
Rollback path:
Revert the two repaired handoff files to their prior malformed lightweight note form, revert the frontend-host assertion, and remove this log entry.
Stop-line:
Make the two current handoff files satisfy the canonical handoff reader, add one focused guard proving frontend handoff warnings stay empty for them, verify, and stop without touching unrelated truth semantics.
Files touched:
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-engine-handoff.md`
`scripts/check-frontend-host.ts`
`implement.md`
Verification run:
direct canonical handoff-reader verification for both repaired stubs
direct frontend snapshot verification that `handoffWarnings` is now empty
`npm run check:frontend-host`
`npm run check`
`npm run report:directive-workspace-state`
Result:
The two March 28 Architecture handoff stubs now parse as canonical `architecture_handoff` artifacts with no frontend handoff warnings, and the frontend-host check now guards that these current repo-generated handoffs stay warning-free.
Next likely move:
Re-rank from fresh repo truth instead of continuing Architecture hardening or retention by momentum.
Risks / notes:
This was a bounded content-shape repair only. It intentionally did not change handoff semantics, queue policy, or any parked-case state. Focused `report:directive-workspace-state` on either repaired handoff still walks into a separate linked bounded-start artifact shape issue, which stayed out of scope for this cycle.

### Cycle 50
Chosen task:
Repair the two malformed March 28 Architecture bounded-start artifacts and extend the existing bounded-start composition guard to cover them.
Why it won:
After the handoff repair, the next strongest live repo-generated truth defect was exactly two linked bounded-start files that still failed the canonical bounded-start reader and broke focused Architecture truth on those cases.
Affected layer:
Architecture records + shared composition validation.
Owning lane:
Architecture.
Mission usefulness:
Restores clean canonical focus on the repaired March 28 Architecture cases and prevents those current repo-generated bounded-starts from silently regressing.
Proof path:
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-bounded-start.md`
`shared/lib/architecture-bounded-closeout.ts`
`scripts/check-directive-workspace-composition.ts`
Rollback path:
Revert the two repaired bounded-start files to their prior note-shaped form, remove them from the internal 2026-03-28 bounded-start guard list, and revert this log entry.
Stop-line:
Make the two current bounded-start files satisfy the canonical bounded-start reader, extend one narrow guard that they resolve cleanly, verify, and stop without broadening into more March 28 artifact-family cleanup.
Files touched:
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-bounded-start.md`
`scripts/check-directive-workspace-composition.ts`
`implement.md`
Verification run:
direct canonical bounded-start-reader verification for both repaired starts
`npm run check:directive-workspace-composition`
`npm run check`
`npm run report:directive-workspace-state`
Result:
The two March 28 Architecture bounded-start files now parse as canonical `architecture_bounded_start` artifacts, focused handoff-path reads no longer fail because of start-parser errors, and the composition check now guards those current repo-generated starts as part of the existing internal 2026-03-28 bounded-start family.
Next likely move:
Rerank from fresh repo truth instead of continuing more March 28 artifact cleanup by momentum.
Risks / notes:
This was a bounded content-shape repair only. It intentionally did not change Architecture semantics, queue policy, or any parked-case state.

### Cycle 51
Chosen task:
Repair the two malformed March 28 Architecture bounded-result artifacts and add one direct bounded-result reader guard.
Why it won:
After Cycle 50, the next strongest live repo-generated truth defect was exactly the paired bounded-result files linked to those same March 28 cases. Both still failed the canonical bounded-result reader with `candidate id is required`.
Affected layer:
Architecture records + shared composition validation.
Owning lane:
Architecture.
Mission usefulness:
Restores clean canonical bounded-result parsing for those repo-generated cases and prevents the pair from silently regressing without broadening into the later adoption chain.
Proof path:
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-bounded-result.md`
`shared/lib/architecture-bounded-closeout.ts`
`scripts/check-directive-workspace-composition.ts`
Rollback path:
Revert the two repaired bounded-result files to their prior note-shaped form, remove the direct bounded-result parse guard, and revert this log entry.
Stop-line:
Make the two current bounded-result files satisfy the canonical bounded-result reader, add one narrow parser guard for them, verify, and stop without broadening into more downstream March 28 artifacts.
Files touched:
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-bounded-result.md`
`scripts/check-directive-workspace-composition.ts`
`implement.md`
Verification run:
direct canonical bounded-result-reader verification for both repaired results
`npm run check:directive-workspace-composition`
`npm run check`
`npm run report:directive-workspace-state`
Result:
The two March 28 Architecture bounded-result files now parse as canonical `architecture_bounded_result` artifacts, and the composition check now directly guards their parse contract without pulling in later downstream artifacts.
Next likely move:
Rerank from fresh repo truth instead of continuing more March 28 artifact cleanup by momentum.
Risks / notes:
This was a bounded content-shape repair only. It intentionally did not change Architecture semantics, queue policy, or any parked-case state.

### Cycle 52
Chosen task:
Repair the two malformed March 28 Architecture adoption artifacts and add one direct adoption-reader guard.
Why it won:
After Cycle 51, the repaired March 28 handoff and bounded-result paths now resolved far enough to expose exactly two linked adoption artifacts that still failed direct canonical focus with `legacy adoption candidate id is required`.
Affected layer:
Architecture records + shared composition validation.
Owning lane:
Architecture.
Mission usefulness:
Restores clean canonical adoption focus for those repo-generated cases and prevents the pair from silently regressing without broadening into later implementation or retention work.
Proof path:
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-adopted-planned-next.md`
`shared/lib/architecture-result-adoption.ts`
`scripts/check-directive-workspace-composition.ts`
Rollback path:
Revert the two repaired adoption files to their prior note-shaped form, remove the direct adoption parse guard, and revert this log entry.
Stop-line:
Make the two current adoption files satisfy the canonical adoption reader, add one narrow parser guard for them, verify, and stop without broadening into later implementation-target or implementation-result artifacts.
Files touched:
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stale-current-head-architecture-opening-legality-hardening-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-stale-current-head-architecture-closure-legality-hardening-2026-03-28-adopted-planned-next.md`
`scripts/check-directive-workspace-composition.ts`
`implement.md`
Verification run:
direct canonical adoption-reader verification for both repaired adoptions
focused `npm run report:directive-workspace-state -- <adoption-path>` for both repaired adoptions
`npm run check:directive-workspace-composition`
`npm run check`
`npm run report:directive-workspace-state`
Result:
The two March 28 Architecture adoption files now parse as canonical `architecture_adoption` artifacts with `finalStatus = adopt_planned_next`, the composition check now directly guards their parse contract, and the next linked implementation-target pair already resolves cleanly.
Next likely move:
Stop the guarded correctness-fix loop here and rerank from fresh full-product truth; the next linked implementation-target pair is already clean, so the strongest remaining work is no longer a direct live repo-generated parsing defect.
Risks / notes:
This was a bounded content-shape repair only. It intentionally did not change Architecture semantics, queue policy, or any parked-case state.

### Cycle 53
Chosen task:
Run one bounded Discovery intake for Inspect AI and preserve the remaining scout shortlist as a lightweight reserve list.
Why it won:
Fresh source throughput was the highest-ROI next move after the March 28 repair loop closed. Inspect AI had already been selected as the best new external source candidate, and the task explicitly required a single bounded Discovery front-door run without reopening parked work or auto-continuing internal chains.
Affected layer:
Discovery front door + shared Discovery queue truth.
Owning lane:
Discovery.
Mission usefulness:
Adds one real new external source to the system, tests the NOTE-mode front door on a fresh evaluator-framework candidate, and records a truthful route for later human review without opening implementation work.
Proof path:
`shared/lib/discovery-front-door.ts`
`discovery/intake/2026-03-28-dw-source-inspect-ai-2026-03-28-intake.md`
`discovery/triage/2026-03-28-dw-source-inspect-ai-2026-03-28-triage.md`
`discovery/routing-log/2026-03-28-dw-source-inspect-ai-2026-03-28-routing-record.md`
`architecture/02-experiments/2026-03-28-dw-source-inspect-ai-2026-03-28-engine-handoff.md`
`discovery/intake-queue.json`
Rollback path:
Delete the new Inspect AI intake / triage / routing / handoff artifacts, remove the new engine run record/report pair, revert `shared/lib/discovery-front-door.ts`, remove the Inspect AI queue entry, and revert this log entry.
Stop-line:
Process exactly one new external source through Discovery intake + triage + routing, persist an explicit NOTE-mode classification, open at most one justified downstream handoff target, record the reserve list informationally only, verify, and stop.
Files touched:
`shared/lib/discovery-front-door.ts`
`discovery/intake/2026-03-28-dw-source-inspect-ai-2026-03-28-intake.md`
`discovery/triage/2026-03-28-dw-source-inspect-ai-2026-03-28-triage.md`
`discovery/routing-log/2026-03-28-dw-source-inspect-ai-2026-03-28-routing-record.md`
`architecture/02-experiments/2026-03-28-dw-source-inspect-ai-2026-03-28-engine-handoff.md`
`runtime/standalone-host/engine-runs/2026-03-28T00-00-00-000Z-dw-source-inspect-ai-2026-03-28-402b52cf.json`
`runtime/standalone-host/engine-runs/2026-03-28T00-00-00-000Z-dw-source-inspect-ai-2026-03-28-402b52cf.md`
`discovery/intake-queue.json`
`implement.md`
Verification run:
direct queue-entry verification for `dw-source-inspect-ai-2026-03-28`
`npm run report:directive-workspace-state -- discovery/routing-log/2026-03-28-dw-source-inspect-ai-2026-03-28-routing-record.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-inspect-ai-2026-03-28-engine-handoff.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
Inspect AI now exists as one real NOTE-mode Discovery candidate. The shared Engine initially routed it to Runtime, but operator review overrode the case to Architecture because the retained value is evaluator/proof framework patterns rather than adopting the Python framework itself as reusable runtime capability. One handoff stub was opened and the queue now records `operating_mode = note`, `routing_target = architecture`, and the handoff as `result_record_path`.
Next likely move:
No automatic next move was opened. If human review approves continuing this source later, the next bounded step would be one NOTE-mode Architecture review/result slice focused on evaluator/proof pattern retention only.
Risks / notes:
This run exposed a routing weakness: evaluator-framework sources can still overread as direct runtime capability even when the retained value is narrower and Engine-facing. The remaining useful scout shortlist was preserved below as informational reserve only; no queue or routing artifacts were created for it.

## Deferred Source Reserve (2026-03-28)

1. Source name: OpenEvals
   Source URL: `https://github.com/langchain-ai/openevals`
   Why it still looks useful: Lightweight evaluator primitives with TypeScript and Python coverage could sharpen Directive Workspace proof/evaluator boundaries with less platform overhead than a full evaluation framework.
   Likely primary lane: Architecture
   Likely mode: STANDARD
   Why it was not chosen now: Inspect AI offered a richer, more differentiated evaluator-framework surface for the next bounded Discovery run.
   Condition that would make it the right next source later: choose it when the next source slot should focus on smaller evaluator-library primitives rather than a fuller evaluation platform.

2. Source name: PromptWizard
   Source URL: `https://github.com/microsoft/PromptWizard`
   Why it still looks useful: Feedback-driven prompt refinement and synthetic example generation could inform bounded Architecture work around instruction refinement and evaluator-guided prompt improvement.
   Likely primary lane: Architecture
   Likely mode: NOTE
   Why it was not chosen now: Prompt optimization is weaker than evaluator/proof quality against the current mission pressure.
   Condition that would make it the right next source later: choose it when prompt-improvement discipline becomes a clearer bottleneck than evaluator/proof structure.

3. Source name: Bespoke Curator
   Source URL: `https://github.com/bespokelabsai/curator`
   Why it still looks useful: Structured-output and batch data curation patterns could later help extraction pipelines, fault recovery, and higher-throughput structured source adaptation.
   Likely primary lane: Monitor
   Likely mode: NOTE
   Why it was not chosen now: It is farther from the current evaluator/proof and Engine-shaping pressure than Inspect AI.
   Condition that would make it the right next source later: choose it when Discovery / extraction throughput becomes the main bottleneck and structured batch pipeline patterns matter more than evaluator quality.

### Cycle 54
Chosen task:
Open one bounded DEEP Engine routing-quality slice for framework-source Runtime overread and implement the smallest rule that covers Inspect AI and ts-edge.
Why it won:
Inspect AI did not justify downstream continuation, but it exposed a repeated shared routing weakness that already had two live proof cases. Fixing that one bounded misrouting class improved future source throughput more than opening another source immediately.
Affected layer:
Shared Engine routing quality.
Owning lane:
Architecture.
Mission usefulness:
Improves how Discovery interprets framework/tooling repos whose retained value is Engine-facing pattern extraction rather than reusable runtime capability.
Proof path:
`engine/routing.ts`
`engine/types.ts`
`scripts/check-directive-engine-stage-chaining.ts`
`runtime/standalone-host/engine-runs/2026-03-28T00-00-00-000Z-dw-source-inspect-ai-2026-03-28-402b52cf.json`
`runtime/standalone-host/engine-runs/2026-03-27T00-00-00-000Z-dw-source-ts-edge-2026-03-27-0aacdf59.json`
Rollback path:
Revert the routing signal in `engine/routing.ts`, revert `engine/types.ts`, revert the focused proof-case assertions in `scripts/check-directive-engine-stage-chaining.ts`, remove the DEEP case chain below, and revert this log entry.
Stop-line:
Open one explicit DEEP routing-quality case, define one bounded misrouting class, implement one narrow correction seam for that class, verify it against Inspect AI and ts-edge, and stop.
Files touched:
`engine/routing.ts`
`engine/types.ts`
`scripts/check-directive-engine-stage-chaining.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-framework-source-runtime-overread-routing-hardening-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-framework-source-runtime-overread-routing-hardening-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-framework-source-runtime-overread-routing-hardening-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-discovery-framework-source-runtime-overread-routing-hardening-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-discovery-framework-source-runtime-overread-routing-hardening-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-discovery-framework-source-runtime-overread-routing-hardening-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-discovery-framework-source-runtime-overread-routing-hardening-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-discovery-framework-source-runtime-overread-routing-hardening-2026-03-28-implementation-result.md`
`implement.md`
Verification run:
`npm run check:directive-engine-stage-chaining`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-discovery-framework-source-runtime-overread-routing-hardening-2026-03-28-implementation-result.md`
`npm run report:directive-workspace-state -- discovery/routing-log/2026-03-28-dw-source-inspect-ai-2026-03-28-routing-record.md`
`npm run report:directive-workspace-state -- discovery/routing-log/2026-03-27-dw-source-ts-edge-2026-03-27-routing-record.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
The shared Engine now recognizes one bounded misrouting class: framework/tooling repos whose own text says to retain the pattern without adopting the source itself as runtime capability or dependency. Inspect AI and ts-edge both replay to Architecture, while the runtime control case remains Runtime.
Next likely move:
No automatic continuation was opened. If routing-quality work resumes later, the next bounded slice should be a different misrouting class rather than expanding this one by momentum.
Risks / notes:
This slice intentionally leaves stored historical engine-run artifacts unchanged. It corrects future routing behavior and proof-case replays, not past recorded runs.

### Cycle 55
Chosen task:
Run one bounded Discovery intake for OpenEvals through the front door and stop after triage, routing, explicit mode classification, and at most one justified next target.
Why it won:
The framework-source routing-quality fix was complete, Inspect AI was already parked at a NOTE handoff, and the next highest-ROI move was a fresh external source run that exercised the improved router without reopening any parked case.
Affected layer:
Discovery front door.
Owning lane:
Discovery, routing to Architecture.
Mission usefulness:
Adds a fresh evaluator-library source while testing whether the improved router can correctly keep lighter-weight evaluator-pattern sources on the Architecture side.
Proof path:
`shared/lib/discovery-front-door.ts`
`discovery/intake/2026-03-28-dw-source-openevals-2026-03-28-intake.md`
`discovery/triage/2026-03-28-dw-source-openevals-2026-03-28-triage.md`
`discovery/routing-log/2026-03-28-dw-source-openevals-2026-03-28-routing-record.md`
`architecture/02-experiments/2026-03-28-dw-source-openevals-2026-03-28-engine-handoff.md`
Rollback path:
Remove the OpenEvals intake, triage, routing, handoff, and engine-run artifacts, revert the queue entry in `discovery/intake-queue.json`, and revert this log entry.
Stop-line:
Process exactly one new external source through Discovery intake, triage, routing, explicit mode classification, and open only one justified downstream target if the route clearly requires it.
Files touched:
`architecture/02-experiments/2026-03-28-dw-source-openevals-2026-03-28-engine-handoff.md`
`discovery/intake-queue.json`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- discovery/routing-log/2026-03-28-dw-source-openevals-2026-03-28-routing-record.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-openevals-2026-03-28-engine-handoff.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
OpenEvals entered through Discovery first and routed cleanly to Architecture in NOTE mode without any operator override. One bounded Architecture handoff was opened because the routing record explicitly required that artifact, and no deeper Architecture or Runtime chain was opened.
Next likely move:
No automatic continuation was opened. Re-rank from fresh live truth rather than continuing OpenEvals by momentum.
Risks / notes:
This run stayed lightweight by design. It preserved the remaining reserve candidates as reserve only and did not create any new active queue or routing artifacts beyond OpenEvals.

### Cycle 56
Chosen task:
Run one bounded Discovery intake for PromptWizard through the front door and stop after triage, routing, explicit mode classification, and at most one justified next target.
Why it won:
Inspect AI and OpenEvals were both already parked at NOTE handoffs, the routing-quality fix had validated cleanly, and the next highest-ROI move was another reserve-source intake that tested fresh throughput rather than continuing any existing chain.
Affected layer:
Discovery front door.
Owning lane:
Discovery, routing to Architecture.
Mission usefulness:
Adds a fresh prompt-optimization source while testing whether lighter-weight prompt/evaluator-pattern sources also route cleanly into Architecture without runtime overread.
Proof path:
`shared/lib/discovery-front-door.ts`
`discovery/intake/2026-03-28-dw-source-promptwizard-2026-03-28-intake.md`
`discovery/triage/2026-03-28-dw-source-promptwizard-2026-03-28-triage.md`
`discovery/routing-log/2026-03-28-dw-source-promptwizard-2026-03-28-routing-record.md`
`architecture/02-experiments/2026-03-28-dw-source-promptwizard-2026-03-28-engine-handoff.md`
Rollback path:
Remove the PromptWizard intake, triage, routing, handoff, and engine-run artifacts, revert the queue entry in `discovery/intake-queue.json`, and revert this log entry.
Stop-line:
Process exactly one new external source through Discovery intake, triage, routing, explicit mode classification, and open only one justified downstream target if the route clearly requires it.
Files touched:
`architecture/02-experiments/2026-03-28-dw-source-promptwizard-2026-03-28-engine-handoff.md`
`discovery/intake-queue.json`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- discovery/routing-log/2026-03-28-dw-source-promptwizard-2026-03-28-routing-record.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-promptwizard-2026-03-28-engine-handoff.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
PromptWizard entered through Discovery first and routed cleanly to Architecture in NOTE mode without any operator override. One bounded Architecture handoff was opened because the routing record explicitly required that artifact, and no deeper Architecture or Runtime chain was opened.
Next likely move:
No automatic continuation was opened. Re-rank from fresh live truth rather than continuing PromptWizard by momentum.
Risks / notes:
This run stayed lightweight by design. It preserved Bespoke Curator as reserve only and did not create any new active queue or routing artifacts beyond PromptWizard.

### Cycle 57
Chosen task:
Open one bounded DEEP NOTE-mode Architecture route/stop-line alignment slice and correct the shared handoff/route contract so NOTE-mode Architecture cases stop at the truthful result boundary instead of advertising a bounded start.
Why it won:
Three fresh NOTE-mode Architecture proof cases now existed, and all of them exposed the same shared mismatch: doctrine says NOTE-mode Architecture is handoff plus one bounded result, but live truth still advertised a STANDARD-style bounded start. Fixing that one shared seam beat opening another source or continuing any handoff by momentum.
Affected layer:
Shared Engine and truth-quality resolution.
Owning lane:
Architecture.
Mission usefulness:
Keeps NOTE-mode Architecture routing honest and prevents the system from over-advertising STANDARD-style downstream work on lightweight Architecture cases.
Proof path:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-source-inspect-ai-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-source-openevals-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-source-promptwizard-2026-03-28-engine-handoff.md`
Rollback path:
Revert the NOTE-mode route/handoff wording change in `shared/lib/dw-state.ts`, revert the focused proof-case assertions in `scripts/check-directive-workspace-composition.ts`, remove the DEEP case chain below, and revert this log entry.
Stop-line:
Open one explicit DEEP NOTE-mode Architecture case, define one bounded misalignment class, implement one narrow route/contract correction seam, verify it against Inspect AI, OpenEvals, and PromptWizard, and stop.
Files touched:
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-note-mode-architecture-route-stop-line-alignment-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-note-mode-architecture-route-stop-line-alignment-2026-03-28-bounded-start.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-note-mode-architecture-route-stop-line-alignment-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-pressure-engine-note-mode-architecture-route-stop-line-alignment-2026-03-28-bounded-result-adoption-decision.json`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-note-mode-architecture-route-stop-line-alignment-2026-03-28-adopted-planned-next.md`
`architecture/03-adopted/2026-03-28-dw-pressure-engine-note-mode-architecture-route-stop-line-alignment-2026-03-28-adopted-planned-next-adoption-decision.json`
`architecture/04-implementation-targets/2026-03-28-dw-pressure-engine-note-mode-architecture-route-stop-line-alignment-2026-03-28-implementation-target.md`
`architecture/05-implementation-results/2026-03-28-dw-pressure-engine-note-mode-architecture-route-stop-line-alignment-2026-03-28-implementation-result.md`
`implement.md`
Verification run:
`npm run check`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-inspect-ai-2026-03-28-engine-handoff.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-openevals-2026-03-28-engine-handoff.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-promptwizard-2026-03-28-engine-handoff.md`
`npm run report:directive-workspace-state -- architecture/05-implementation-results/2026-03-28-dw-pressure-engine-note-mode-architecture-route-stop-line-alignment-2026-03-28-implementation-result.md`
`npm run report:directive-workspace-state`
Result:
Discovery-routed Architecture cases in NOTE mode now advertise the truthful downstream boundary: review the handoff and record one bounded result, with no bounded start required. The three NOTE proof cases resolved cleanly after the fix, while the existing ts-edge STANDARD control stayed unchanged.
Next likely move:
No automatic continuation was opened. If NOTE-mode alignment resumes later, the next slice should be a different proved misalignment rather than broadening this one by momentum.
Risks / notes:
This slice intentionally left Runtime semantics, STANDARD and DEEP Architecture semantics, and the broader Architecture chain untouched.

### Cycle 58
Chosen task:
Open one bounded NOTE-mode Architecture materialization slice so operator-approved NOTE continuation can close a handoff directly to a bounded result without opening a bounded start.
Why it won:
Live truth had already aligned NOTE-mode Architecture wording at the route and handoff layers, but the write path still could not materialize that boundary. Continuing another source or another handoff first would only pile more NOTE handoffs onto the same incomplete seam.
Affected layer:
Shared Architecture materialization and truth resolution.
Owning lane:
Architecture.
Mission usefulness:
Turns the NOTE-mode Architecture boundary from a truthful read-only contract into an operable path, and proves it on one live external-source case without changing STANDARD or DEEP behavior.
Proof path:
`shared/lib/architecture-handoff-start.ts`
`shared/lib/architecture-bounded-closeout.ts`
`shared/lib/dw-state.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-source-openevals-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-source-openevals-2026-03-28-bounded-result.md`
Rollback path:
Delete the OpenEvals bounded-result and paired adoption-decision artifact, restore the queue entry in `discovery/intake-queue.json` to the handoff as the current result record, revert the NOTE direct-closeout code path, and revert this log entry.
Stop-line:
Implement only the NOTE-mode direct handoff-to-result materialization seam, prove it on one bounded NOTE Architecture case, verify shared truth stays aligned, and stop.
Files touched:
`shared/lib/architecture-handoff-start.ts`
`shared/lib/architecture-bounded-closeout.ts`
`shared/lib/dw-state.ts`
`shared/lib/architecture-implementation-target.ts`
`hosts/web-host/server.ts`
`hosts/web-host/data.ts`
`scripts/check-directive-workspace-composition.ts`
`architecture/02-experiments/2026-03-28-dw-source-openevals-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-source-openevals-2026-03-28-bounded-result-adoption-decision.json`
`discovery/intake-queue.json`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- discovery/routing-log/2026-03-28-dw-source-openevals-2026-03-28-routing-record.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-openevals-2026-03-28-engine-handoff.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-openevals-2026-03-28-bounded-result.md`
`npm run check:directive-workspace-composition`
`npm run check`
`npm run report:directive-workspace-state`
Result:
OpenEvals now resolves from NOTE handoff to a direct NOTE bounded result with no bounded start. The queue entry is completed, the routing record resolves cleanly to the bounded-result current head, and Inspect AI plus PromptWizard remain at the original NOTE handoff boundary.
Next likely move:
Do not auto-continue OpenEvals. Re-rank from live truth again. If NOTE-mode Architecture alignment resumes later, the next exact slice is whether NOTE-mode approved continuation should also update route-local required-next-artifact semantics instead of leaving routing records as historical handoff contracts.
Risks / notes:
This slice intentionally left the frontend action wiring untouched, left STANDARD and DEEP Architecture materialization untouched, and treated OpenEvals as the single live proof case instead of migrating every NOTE handoff in one pass.

### Cycle 59
Chosen task:
Use the already-landed NOTE-mode Architecture direct closeout path on Inspect AI and stop after one bounded result.
Why it won:
The shared seam was already in place, OpenEvals had already proven it once, and Inspect AI was the strongest remaining parked NOTE Architecture handoff. This added real product progress without reopening routing work, PromptWizard, reserve-source intake, or Runtime seams.
Affected layer:
Architecture NOTE-mode case progression.
Owning lane:
Architecture.
Mission usefulness:
Closes one high-signal evaluator-framework source into a truthful NOTE bounded result, preserving retained evaluator/proof patterns while keeping deeper adoption unopened.
Proof path:
`architecture/02-experiments/2026-03-28-dw-source-inspect-ai-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-source-inspect-ai-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-source-inspect-ai-2026-03-28-bounded-result-adoption-decision.json`
`discovery/intake-queue.json`
`scripts/check-directive-workspace-composition.ts`
Rollback path:
Delete the Inspect AI bounded-result and paired decision artifact, restore the queue entry in `discovery/intake-queue.json` to the handoff as the result record, revert the proof-case expectation change in `scripts/check-directive-workspace-composition.ts`, and revert this log entry.
Stop-line:
Materialize exactly one NOTE bounded result for Inspect AI, verify focused truth plus full checks, and stop without continuing PromptWizard.
Files touched:
`architecture/02-experiments/2026-03-28-dw-source-inspect-ai-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-source-inspect-ai-2026-03-28-bounded-result-adoption-decision.json`
`discovery/intake-queue.json`
`scripts/check-directive-workspace-composition.ts`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-inspect-ai-2026-03-28-engine-handoff.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-inspect-ai-2026-03-28-bounded-result.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-openevals-2026-03-28-bounded-result.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-promptwizard-2026-03-28-engine-handoff.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
Inspect AI now resolves cleanly to a NOTE-mode bounded-result current head with no bounded-start artifact. OpenEvals remains clean on the same path, PromptWizard remains parked at handoff, and no Runtime or ts-edge drift occurred.
Next likely move:
Do not auto-continue PromptWizard. If another NOTE closeout is justified later, PromptWizard is the exact next same-shape case.
Risks / notes:
This slice intentionally used the existing NOTE closeout path without reopening shared seam work. It also left PromptWizard, reserve sources, Runtime cases, and frontend wiring untouched.

### Cycle 60
Chosen task:
Use the already-landed NOTE-mode Architecture direct closeout path on PromptWizard and stop after one bounded result.
Why it won:
PromptWizard was the last remaining parked NOTE Architecture handoff after OpenEvals and Inspect AI had already closed cleanly through the same path. This completed the remaining same-shape NOTE source case without reopening shared seam work, Runtime, reserve-source intake, or a broader rerank.
Affected layer:
Architecture NOTE-mode case progression.
Owning lane:
Architecture.
Mission usefulness:
Closes one prompt-optimization source into a truthful NOTE bounded result, preserving prompt-refinement and evaluator-guided improvement patterns for future Architecture work while keeping deeper adoption explicitly unopened.
Proof path:
`architecture/02-experiments/2026-03-28-dw-source-promptwizard-2026-03-28-engine-handoff.md`
`architecture/02-experiments/2026-03-28-dw-source-promptwizard-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-source-promptwizard-2026-03-28-bounded-result-adoption-decision.json`
`discovery/intake-queue.json`
`scripts/check-directive-workspace-composition.ts`
Rollback path:
Delete the PromptWizard bounded-result and paired decision artifact, restore the queue entry in `discovery/intake-queue.json` to the handoff as the result record, revert the proof-case expectation change in `scripts/check-directive-workspace-composition.ts`, and revert this log entry.
Stop-line:
Materialize exactly one NOTE bounded result for PromptWizard, verify focused truth plus full checks, and stop without opening any second move.
Files touched:
`architecture/02-experiments/2026-03-28-dw-source-promptwizard-2026-03-28-bounded-result.md`
`architecture/02-experiments/2026-03-28-dw-source-promptwizard-2026-03-28-bounded-result-adoption-decision.json`
`discovery/intake-queue.json`
`scripts/check-directive-workspace-composition.ts`
`implement.md`
Verification run:
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-promptwizard-2026-03-28-engine-handoff.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-promptwizard-2026-03-28-bounded-result.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-openevals-2026-03-28-bounded-result.md`
`npm run report:directive-workspace-state -- architecture/02-experiments/2026-03-28-dw-source-inspect-ai-2026-03-28-bounded-result.md`
`npm run check`
`npm run report:directive-workspace-state`
Result:
PromptWizard now resolves cleanly to a NOTE-mode bounded-result current head with no bounded-start artifact. OpenEvals and Inspect AI remain clean on the same path, and no Runtime or ts-edge drift occurred.
Next likely move:
Do not auto-continue any NOTE Architecture case. Re-anchor on live truth and rerank from the now-fully-closed NOTE Architecture source set.
Risks / notes:
This slice intentionally reused the existing NOTE closeout seam without reopening shared Architecture flow work. It also left reserve sources, Runtime cases, retention, and frontend untouched.

### Cycle 61
Chosen task:
Refresh the stale Architecture materialization due-check proof script so it matches the live zero-due surface.
Why it won:
Current repo truth showed `npm run report:architecture-materialization-due-check` clean with `totalDueItems: 0`, but the targeted checker still asserted that at least one due item must exist. That was the highest-ROI bounded correctness fix after relocation closeout because it corrected a stale proof surface without reopening legacy backfill or frozen Runtime seams.
Affected layer:
Shared Architecture proof/reporting.
Owning lane:
Architecture.
Mission usefulness:
Keeps the Architecture materialization proof surface aligned with current repo-backed state, so operators can trust a clean due-check instead of inheriting obsolete backlog assumptions.
Proof path:
`scripts/check-architecture-materialization-due-check.ts`
`npm run check:architecture-materialization-due-check`
Rollback path:
Revert the zero-due assertions in `scripts/check-architecture-materialization-due-check.ts` and remove this log entry.
Stop-line:
Update the stale targeted due-check assertions to current zero-due truth, verify them, and stop without changing the canonical report semantics or broadening into legacy artifact cleanup.
Files touched:
`scripts/check-architecture-materialization-due-check.ts`
`implement.md`
Verification run:
`npm run check:architecture-materialization-due-check`
`npm run report:architecture-materialization-due-check`
`npm run check`
Result:
The targeted Architecture materialization checker now passes against the live clean state: zero due items, zero decision-backed due adoptions, zero due-adoption decision gaps, and no due adopted summary when the surface is empty. The grouped legacy warning surface remains visible and unchanged.
Next likely move:
Re-rank from fresh truth again. The strongest remaining bounded seam is the single unreadable warning in the due-check: classify the historical Scientify Architecture-to-Runtime handoff under `architecture/03-adopted` as an out-of-scope handoff/non-adoption artifact instead of an unreadable adoption.
Risks / notes:
This slice intentionally did not normalize the 33 legacy-incompatible adoption artifacts or change the due-check reader. It only repaired the stale proof script so current clean-state truth is enforced honestly.

### Cycle 62
Chosen task:
Reclassify the historical Scientify Architecture-to-Runtime handoff in the Architecture materialization due-check so it counts as an out-of-scope handoff artifact instead of an unreadable adoption.
Why it won:
After Cycle 61, the only misleading live warning inside this exact lane was the due-check/report treating `architecture/03-adopted/2026-03-23-scientify-literature-monitoring-runtime-handoff.md` as unreadable. Current repo truth showed the artifact was readable and decision-backed; the bug was purely its classification in materialization accounting.
Affected layer:
Shared Architecture materialization reader/report behavior.
Owning lane:
Architecture.
Mission usefulness:
Keeps the Architecture materialization due-check truthful by separating historical Architecture-to-Runtime handoffs from actual adopted Architecture outputs that should still ratchet toward implementation targets/results.
Proof path:
`shared/lib/architecture-materialization-due-check.ts`
`scripts/check-architecture-materialization-due-check.ts`
Rollback path:
Revert the out-of-scope runtime-handoff classification in `shared/lib/architecture-materialization-due-check.ts`, revert the focused assertions in `scripts/check-architecture-materialization-due-check.ts`, and remove this log entry.
Stop-line:
Add one narrow decision-backed handoff classification rule, verify the Scientify warning disappears from the due-check/report output, and stop without broadening into general legacy adoption cleanup.
Files touched:
`shared/lib/architecture-materialization-due-check.ts`
`scripts/check-architecture-materialization-due-check.ts`
`implement.md`
Verification run:
`npm run check:architecture-materialization-due-check`
`npm run report:architecture-materialization-due-check`
`npm run check`
Result:
The due-check/report now classifies the historical Scientify record as one `skippedRuntimeHandoffArtifacts` item and no longer counts it under `skippedUnreadableAdoptions`. The live report stays clean on the main metric (`totalDueItems: 0`) and the warning list drops to the separate grouped legacy-compatibility warning only.
Next likely move:
Stop and rerank. The only remaining warning class in this surface is the grouped `skippedLegacyIncompatibleAdoptions` bucket, which is broader legacy compatibility work rather than another narrow historical handoff misclassification.
Risks / notes:
This slice intentionally did not touch Runtime behavior, structural mapping, planner/execution seams, or the broad legacy adopted corpus. It only changed Architecture materialization accounting for decision-backed `hand_off_to_runtime` artifacts.

### Cycle 63
Chosen task:
Wire the Architecture materialization due-check into the standard top-level validation path.
Why it won:
The Architecture materialization due-check surface had just needed two bounded truth repairs, but `npm run check` still did not execute `check:architecture-materialization-due-check`. Adding that one focused validation step was the highest-ROI proof-wiring move because it closes a real regression gap without reopening any frozen lane.
Affected layer:
Shared validation / proof wiring.
Owning lane:
Architecture.
Mission usefulness:
Keeps future regressions in the Architecture materialization due-check/report surface from slipping past the default repo validation path.
Proof path:
`package.json`
`npm run check:architecture-materialization-due-check`
`npm run check`
Rollback path:
Revert the `check` script wiring in `package.json` and remove this log entry.
Stop-line:
Make `npm run check` execute `check:architecture-materialization-due-check`, verify both validations pass, and stop without broadening top-level validation beyond this one repaired surface.
Files touched:
`package.json`
`implement.md`
Verification run:
`npm run check:architecture-materialization-due-check`
`npm run check`
Result:
The standard `npm run check` chain now executes `check:architecture-materialization-due-check` between `check:directive-workspace-composition` and `check:directive-engine-stage-chaining`. The focused due-check still passes with `totalDueItems: 0`, `skippedUnreadableAdoptions: 0`, and `skippedRuntimeHandoffArtifacts: 1`, and the full repo check still passes.
Next likely move:
Re-rank from fresh repo truth outside the frozen Runtime exposure, structural-mapping, and parked legacy-adoption lanes.
Risks / notes:
This slice intentionally did not broaden validation to unrelated checks. It only promoted the already-repaired Architecture materialization due-check into the default proof path.

### Cycle 64
Chosen task:
Normalize stale old-root Directive Workspace path references in current product knowledge docs.
Why it won:
Live repo truth still exposed `.openclaw\workspace\directive-workspace` as the product root in several `knowledge/*.md` guidance docs even though relocation is complete and the canonical product root is now `C:\Users\User\projects\directive-workspace`. That was a concrete post-relocation truth defect and a tighter next move than speculative new validation work.
Affected layer:
Product knowledge / continuation guidance.
Owning lane:
Architecture.
Mission usefulness:
Keeps future operators and agents from being routed back toward the non-canonical product root when using current Directive Workspace knowledge docs.
Proof path:
`knowledge/architecture-completion-rubric.md`
`knowledge/architecture-map.md`
`knowledge/charter.md`
`knowledge/delivery-workflow.md`
`knowledge/delivery-plan.md`
`knowledge/project-plan.md`
`rg -n "C:\\Users\\User\\.openclaw\\workspace\\directive-workspace|C:/Users/User/.openclaw/workspace/directive-workspace" ...`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Revert the six touched knowledge docs and remove this log entry.
Stop-line:
Replace only stale Directive Workspace root references in the current knowledge docs, verify those references are gone from that bounded surface, and stop without broad documentation cleanup.
Files touched:
`knowledge/architecture-completion-rubric.md`
`knowledge/architecture-map.md`
`knowledge/charter.md`
`knowledge/delivery-workflow.md`
`knowledge/delivery-plan.md`
`knowledge/project-plan.md`
`implement.md`
Verification run:
`rg -n "C:\\Users\\User\\.openclaw\\workspace\\directive-workspace|C:/Users/User/.openclaw/workspace/directive-workspace" knowledge/architecture-completion-rubric.md knowledge/architecture-map.md knowledge/charter.md knowledge/delivery-workflow.md knowledge/delivery-plan.md knowledge/project-plan.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
The six current knowledge docs no longer identify `.openclaw\workspace\directive-workspace` as the product root. The authoritative report still resolves the canonical root as `C:/Users/User/projects/directive-workspace`, and the full check chain remains green.
Next likely move:
Re-rank from fresh truth. Do not continue broad relocation cleanup by momentum; only reopen another old-root slice if it appears in a current authoritative guidance surface rather than historical records.
Risks / notes:
This slice intentionally left historical Architecture artifacts, external Mission Control/OpenClaw paths, and other non-Directive Workspace root references untouched.

### Cycle 65
Chosen task:
Clarify doctrine-level meaning of `external source`, then process one fresh real source through Discovery first for the Engine-building mission.
Why it won:
Internal truth surfaces were clean enough that the product needed fresh source pressure rather than more maintenance. A repo-local `gh-aw` document source was already available, and the Safe Outputs specification was the strongest bounded fit because it offers contract/schema, proof-boundary, sanitization, provenance, and gate-ordering patterns that can improve Engine quality without reopening runtime execution or host-admin seams.
Affected layer:
Doctrine plus Discovery-to-Architecture NOTE intake.
Owning lane:
Architecture.
Mission usefulness:
Clarifies that Discovery may draw from either unprocessed in-context sources or one newly found outside source when current pressure is exhausted, then uses that rule to intake one real Engine-improving source instead of inventing maintenance work.
Proof path:
`CLAUDE.md`
`discovery/intake/2026-03-30-dw-source-gh-aw-safe-outputs-spec-2026-03-30-intake.md`
`discovery/triage/2026-03-30-dw-source-gh-aw-safe-outputs-spec-2026-03-30-triage.md`
`discovery/routing-log/2026-03-30-dw-source-gh-aw-safe-outputs-spec-2026-03-30-routing-record.md`
`architecture/02-experiments/2026-03-30-dw-source-gh-aw-safe-outputs-spec-2026-03-30-engine-handoff.md`
`architecture/02-experiments/2026-03-30-dw-source-gh-aw-safe-outputs-spec-2026-03-30-bounded-result.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Revert the `CLAUDE.md` clarification, delete the GH-AW Safe Outputs source-case artifacts and engine run, restore the prior queue/state entries, and remove this log entry.
Stop-line:
Record the doctrine clarification, route one fresh real source through Discovery first, close it at the honest NOTE-mode Architecture stop-line, and stop without forcing deeper Architecture materialization or reopening parked Runtime lanes.
Files touched:
`CLAUDE.md`
`discovery/intake-queue.json`
`discovery/intake/2026-03-30-dw-source-gh-aw-safe-outputs-spec-2026-03-30-intake.md`
`discovery/triage/2026-03-30-dw-source-gh-aw-safe-outputs-spec-2026-03-30-triage.md`
`discovery/routing-log/2026-03-30-dw-source-gh-aw-safe-outputs-spec-2026-03-30-routing-record.md`
`architecture/02-experiments/2026-03-30-dw-source-gh-aw-safe-outputs-spec-2026-03-30-engine-handoff.md`
`architecture/02-experiments/2026-03-30-dw-source-gh-aw-safe-outputs-spec-2026-03-30-bounded-result.md`
`architecture/02-experiments/2026-03-30-dw-source-gh-aw-safe-outputs-spec-2026-03-30-bounded-result-adoption-decision.json`
`runtime/standalone-host/engine-runs/2026-03-30T00-00-00-000Z-dw-source-gh-aw-safe-outputs-spec-2026-03-30-d7ec1192.json`
`runtime/standalone-host/engine-runs/2026-03-30T00-00-00-000Z-dw-source-gh-aw-safe-outputs-spec-2026-03-30-d7ec1192.md`
`state/cases/dw-source-gh-aw-safe-outputs-spec-2026-03-30.json`
`state/case-events/dw-source-gh-aw-safe-outputs-spec-2026-03-30.jsonl`
`implement.md`
Verification run:
`npm run report:directive-workspace-state`
`npm run check`
`rg -n "dw-source-gh-aw-2026-03-30|dw-source-gh-aw-safe-outputs-spec-2026-03-30" discovery architecture runtime state -S`
Result:
`CLAUDE.md` now makes explicit that an external source may be either an unprocessed in-context source or a newly found outside source when current pressure is exhausted, while keeping Discovery as the required front door. The accidental broad repo-level `gh-aw` runtime intake was removed, then a narrower fresh source (`sources/intake/gh-aw/docs/src/content/docs/reference/safe-outputs-specification.md`) was processed through Discovery, routed to Architecture with `usefulnessLevel: meta`, opened as a NOTE-mode handoff, and closed as a NOTE-mode bounded result with `nextDecision: defer`. Main repo truth surfaces still pass.
Next likely move:
Stop and rerank from fresh truth. Do not continue this case unless a later decision explicitly promotes one narrower Safe Outputs pattern into a bounded Architecture adaptation slice.
Risks / notes:
This slice intentionally did not reopen runtime execution, host-admin seams, planner-driven execution, structural-mapping expansion, or the parked legacy adoption bucket. It also corrected an in-flight misfit by removing the earlier broad `gh-aw` repo-level runtime route before recording the narrower document-level source.

### Cycle 66
Chosen task:
Process one fresh repo-local source through Discovery first after parking the Safe Outputs case.
Why it won:
The Safe Outputs NOTE case is explicitly parked, internal truth surfaces are clean, and the product still needs fresh mission-conditioned source pressure. `sources/intake/autoresearch/guide/advanced-patterns.md` was the strongest fresh candidate because it offers guarded verification, custom evaluator-script, composite metric, and recovery-discipline patterns that improve Engine proof quality without reopening runtime execution or orchestration lanes.
Affected layer:
Discovery-to-Architecture NOTE intake.
Owning lane:
Architecture.
Mission usefulness:
Adds one fresh real source to the Engine-building loop and captures proof/evaluator-pattern pressure that can improve how Directive Workspace judges, proves, and adapts future sources.
Proof path:
`discovery/intake/2026-03-30-dw-source-autoresearch-advanced-patterns-2026-03-30-intake.md`
`discovery/triage/2026-03-30-dw-source-autoresearch-advanced-patterns-2026-03-30-triage.md`
`discovery/routing-log/2026-03-30-dw-source-autoresearch-advanced-patterns-2026-03-30-routing-record.md`
`architecture/02-experiments/2026-03-30-dw-source-autoresearch-advanced-patterns-2026-03-30-engine-handoff.md`
`architecture/02-experiments/2026-03-30-dw-source-autoresearch-advanced-patterns-2026-03-30-bounded-result.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Delete the Autoresearch Advanced Patterns case artifacts, remove its queue/state entries, and remove this log entry.
Stop-line:
Process exactly one fresh source through Discovery first, close it at the honest NOTE-mode Architecture boundary, and stop without forcing a new adaptation slice from pattern guidance alone.
Files touched:
`discovery/intake-queue.json`
`discovery/intake/2026-03-30-dw-source-autoresearch-advanced-patterns-2026-03-30-intake.md`
`discovery/triage/2026-03-30-dw-source-autoresearch-advanced-patterns-2026-03-30-triage.md`
`discovery/routing-log/2026-03-30-dw-source-autoresearch-advanced-patterns-2026-03-30-routing-record.md`
`architecture/02-experiments/2026-03-30-dw-source-autoresearch-advanced-patterns-2026-03-30-engine-handoff.md`
`architecture/02-experiments/2026-03-30-dw-source-autoresearch-advanced-patterns-2026-03-30-bounded-result.md`
`architecture/02-experiments/2026-03-30-dw-source-autoresearch-advanced-patterns-2026-03-30-bounded-result-adoption-decision.json`
`runtime/standalone-host/engine-runs/2026-03-30T00-00-00-000Z-dw-source-autoresearch-advanced-patterns-2026-03-30-0b83a61b.json`
`runtime/standalone-host/engine-runs/2026-03-30T00-00-00-000Z-dw-source-autoresearch-advanced-patterns-2026-03-30-0b83a61b.md`
`state/cases/dw-source-autoresearch-advanced-patterns-2026-03-30.json`
`state/case-events/dw-source-autoresearch-advanced-patterns-2026-03-30.jsonl`
`implement.md`
Verification run:
`npm run report:directive-workspace-state`
`npm run check`
`rg -n "dw-source-autoresearch-advanced-patterns-2026-03-30" discovery architecture runtime state discovery/intake-queue.json -S`
Result:
Fresh source `sources/intake/autoresearch/guide/advanced-patterns.md` entered through Discovery first, routed to Architecture with `usefulnessLevel: meta`, and closed honestly as a NOTE-mode bounded result with `nextDecision: defer` and verdict `stay_experimental`. The retained value is a bounded pattern set for guard-backed verification, custom verify scripts, composite metrics, and explicit recovery discipline. Main repo truth surfaces remain green.
Next likely move:
Stop and rerank from fresh truth. Do not continue this NOTE case by momentum unless a later bounded judgment isolates one concrete Architecture adaptation target from these retained patterns.
Risks / notes:
This slice intentionally left runtime execution, host-admin seams, planner-driven execution, structural-mapping expansion, the parked legacy adoption bucket, and the parked Safe Outputs case untouched.

### Cycle 67
Chosen task:
Process one fresh repo-local source through Discovery first after parking the Safe Outputs and advanced-patterns NOTE cases.
Why it won:
The pressure loop still needed fresh Architecture-facing sources, and `sources/intake/agentics/docs/repo-ask.md` was the strongest local candidate that could improve source-analysis quality, routing rationale quality, and evidence gathering without reopening execution seams.
Affected layer:
Discovery-to-Architecture NOTE intake.
Owning lane:
Architecture.
Mission usefulness:
Adds fresh source pressure around question-conditioned repository interrogation, explicit evidence gathering, and bounded external lookup as possible Engine-owned source-analysis improvements.
Proof path:
`discovery/intake/2026-03-30-dw-source-agentics-repo-ask-2026-03-30-intake.md`
`discovery/triage/2026-03-30-dw-source-agentics-repo-ask-2026-03-30-triage.md`
`discovery/routing-log/2026-03-30-dw-source-agentics-repo-ask-2026-03-30-routing-record.md`
`architecture/02-experiments/2026-03-30-dw-source-agentics-repo-ask-2026-03-30-engine-handoff.md`
`architecture/02-experiments/2026-03-30-dw-source-agentics-repo-ask-2026-03-30-bounded-result.md`
Rollback path:
Delete the Agentics Repo Ask case artifacts, remove its queue/state entries, and remove this log entry.
Stop-line:
Process exactly one fresh source through Discovery first, close it at the honest NOTE-mode Architecture boundary if no concrete adaptation target appears, and rerank instead of continuing the case by momentum.
Files touched:
`discovery/intake-queue.json`
`discovery/intake/2026-03-30-dw-source-agentics-repo-ask-2026-03-30-intake.md`
`discovery/triage/2026-03-30-dw-source-agentics-repo-ask-2026-03-30-triage.md`
`discovery/routing-log/2026-03-30-dw-source-agentics-repo-ask-2026-03-30-routing-record.md`
`architecture/02-experiments/2026-03-30-dw-source-agentics-repo-ask-2026-03-30-engine-handoff.md`
`architecture/02-experiments/2026-03-30-dw-source-agentics-repo-ask-2026-03-30-bounded-result.md`
`architecture/02-experiments/2026-03-30-dw-source-agentics-repo-ask-2026-03-30-bounded-result-adoption-decision.json`
`runtime/standalone-host/engine-runs/2026-03-30T00-00-00-000Z-dw-source-agentics-repo-ask-2026-03-30-bd643258.json`
`runtime/standalone-host/engine-runs/2026-03-30T00-00-00-000Z-dw-source-agentics-repo-ask-2026-03-30-bd643258.md`
`state/cases/dw-source-agentics-repo-ask-2026-03-30.json`
`state/case-events/dw-source-agentics-repo-ask-2026-03-30.jsonl`
`implement.md`
Verification run:
`architecture/02-experiments/2026-03-30-dw-source-agentics-repo-ask-2026-03-30-bounded-result.md`
`architecture/02-experiments/2026-03-30-dw-source-agentics-repo-ask-2026-03-30-bounded-result-adoption-decision.json`
Result:
Fresh source `sources/intake/agentics/docs/repo-ask.md` entered through Discovery first, routed to Architecture with `usefulnessLevel: meta`, and closed honestly as a NOTE-mode bounded result with `nextDecision: defer` and verdict `stay_experimental`. It added fresh source-analysis pressure but still did not isolate a concrete promotion-worthy Architecture artifact.
Next likely move:
Rerank again from fresh truth rather than stopping on one NOTE closeout.
Risks / notes:
This slice intentionally kept GitHub comment execution, assistant runtime packaging, and any broader question-answering program out of scope.

### Cycle 68
Chosen task:
Process the next strongest fresh source after the Repo Ask NOTE closeout and stop if it clearly routes somewhere other than Architecture.
Why it won:
The pressure loop needed either one real bounded Architecture slice or an honest alternative stop condition. `sources/intake/gpt-researcher/mcp-server/README.md` was the strongest remaining local source, and the live router favored Discovery-held monitor with high confidence instead of another weak Architecture NOTE.
Affected layer:
Discovery front door plus Discovery monitor lifecycle.
Owning lane:
Discovery.
Mission usefulness:
Adds fresh source pressure around deeper research-backed source acquisition and evidence gathering while preserving the rule that unclear downstream adoption targets should remain Discovery-held instead of being forced into Architecture or Runtime.
Proof path:
`discovery/intake/2026-03-30-dw-source-gpt-researcher-mcp-server-2026-03-30-intake.md`
`discovery/triage/2026-03-30-dw-source-gpt-researcher-mcp-server-2026-03-30-triage.md`
`discovery/routing-log/2026-03-30-dw-source-gpt-researcher-mcp-server-2026-03-30-routing-record.md`
`discovery/monitor/2026-03-30-dw-source-gpt-researcher-mcp-server-2026-03-30-monitor-record.md`
Rollback path:
Delete the GPT Researcher MCP Server case artifacts, remove its queue/state entries, and remove this log entry.
Stop-line:
If the strongest fresh source clearly routes to Discovery-held monitor with no bounded Architecture target, record that route honestly and stop the pressure loop instead of forcing another Architecture NOTE case.
Files touched:
`discovery/intake-queue.json`
`discovery/intake/2026-03-30-dw-source-gpt-researcher-mcp-server-2026-03-30-intake.md`
`discovery/triage/2026-03-30-dw-source-gpt-researcher-mcp-server-2026-03-30-triage.md`
`discovery/routing-log/2026-03-30-dw-source-gpt-researcher-mcp-server-2026-03-30-routing-record.md`
`discovery/monitor/2026-03-30-dw-source-gpt-researcher-mcp-server-2026-03-30-monitor-record.md`
`runtime/standalone-host/engine-runs/2026-03-30T00-00-00-000Z-dw-source-gpt-researcher-mcp-server-2026-03-30-59767548.json`
`runtime/standalone-host/engine-runs/2026-03-30T00-00-00-000Z-dw-source-gpt-researcher-mcp-server-2026-03-30-59767548.md`
`state/cases/dw-source-gpt-researcher-mcp-server-2026-03-30.json`
`state/case-events/dw-source-gpt-researcher-mcp-server-2026-03-30.jsonl`
`implement.md`
Verification run:
`discovery/monitor/2026-03-30-dw-source-gpt-researcher-mcp-server-2026-03-30-monitor-record.md`
`state/cases/dw-source-gpt-researcher-mcp-server-2026-03-30.json`
Result:
Fresh source `sources/intake/gpt-researcher/mcp-server/README.md` entered through Discovery first and was routed to `monitor` with `usefulnessLevel: meta` and current stage `discovery.monitor.active`. That created the honest stop condition for this run: the strongest remaining source pressure is Discovery-held, not a new bounded Architecture slice.
Next likely move:
Stop and report that no bounded Architecture slice emerged in this run because the next strongest fresh source belongs in Discovery monitor.
Risks / notes:
This slice intentionally did not open MCP installation, runtime integration, host execution, or any generic deep-research program.

### Cycle 69
Chosen task:
Wire planner-parity truth checking into the standard top-level validation path.
Why it won:
The live state report still names stale statuses and overstated next steps as the highest-value whole-product seam, and `check:case-planner-parity` is the existing bounded check that exercises those semantics across parked NOTE cases, explicit stops, review gates, and Discovery monitor holds. The top-level `npm run check` path was not yet covering that truth surface.
Affected layer:
Shared whole-product validation wiring.
Owning lane:
Engine truth/checking hardening.
Mission usefulness:
Raises the default proof floor for case-level continuation legality so future regressions in parked-stop semantics, Discovery monitor holds, or overstated next steps are caught by the standard validation path.
Proof path:
`package.json`
`npm run check:case-planner-parity`
`npm run check`
`npm run report:directive-workspace-state`
Rollback path:
Remove `npm run check:case-planner-parity` from the top-level `check` script and remove this log entry.
Stop-line:
Stop once the standard `npm run check` path includes planner parity, the main truth surfaces still pass, and no broader validation expansion is required by live repo truth.
Files touched:
`package.json`
`implement.md`
Verification run:
`npm run check:case-planner-parity`
`npm run check`
`npm run report:directive-workspace-state`
Result:
The default validation chain now includes `check:case-planner-parity`, so the main repo proof path covers parked NOTE-case stop semantics, review-gated boundaries, and Discovery monitor hold behavior instead of relying on targeted manual runs.
Next likely move:
Rerank from fresh truth. Do not broaden validation wiring again unless another specific uncovered truth surface is clearly dominant.
Risks / notes:
This slice stayed inside validation/proof wiring only and did not reopen parked NOTE cases, Runtime seams, structural mapping, legacy adoption cleanup, or authority surfaces.

### Cycle 70
Chosen task:
Use `awesome-scalability` as an outside source-selection map to find one stronger source and process it through Discovery first.
Why it won:
The recent local source pool had already been pressure-tested and was no longer producing a clearly promotion-worthy bounded Architecture slice. An outside source-selection pass was therefore the honest next move. `Data Checking at Dropbox` won because it is more concrete and current-mission-relevant than nearby awesome-scalability candidates: `boundary-layer` pressures frozen planner/execution seams, `API Best Practices` is too generic for the current Engine-building phase, and `Secret Detector` is more repo-hygiene-oriented than the current checker/evaluator-truth need.
Affected layer:
Discovery front door plus NOTE-mode Architecture closeout.
Owning lane:
Architecture.
Mission usefulness:
Adds outside source pressure around checker-system design, validation coverage, violation tracking, simple operator triage, and checker-self-testing that could improve Directive Workspace proof/evaluator quality and Engine self-improvement discipline without reopening runtime execution or host seams.
Proof path:
`discovery/intake/2026-03-30-dw-source-dropbox-data-checking-2026-03-30-intake.md`
`discovery/triage/2026-03-30-dw-source-dropbox-data-checking-2026-03-30-triage.md`
`discovery/routing-log/2026-03-30-dw-source-dropbox-data-checking-2026-03-30-routing-record.md`
`architecture/02-experiments/2026-03-30-dw-source-dropbox-data-checking-2026-03-30-engine-handoff.md`
`architecture/02-experiments/2026-03-30-dw-source-dropbox-data-checking-2026-03-30-bounded-result.md`
`architecture/02-experiments/2026-03-30-dw-source-dropbox-data-checking-2026-03-30-bounded-result-adoption-decision.json`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Delete the Data Checking at Dropbox case artifacts and queue/state entries, then remove this log entry.
Stop-line:
Process exactly one outside source chosen from `awesome-scalability` through Discovery first, route it honestly, and stop at the truthful NOTE/STANDARD boundary instead of forcing a deeper Architecture slice.
Files touched:
`discovery/intake-queue.json`
`discovery/intake/2026-03-30-dw-source-dropbox-data-checking-2026-03-30-intake.md`
`discovery/triage/2026-03-30-dw-source-dropbox-data-checking-2026-03-30-triage.md`
`discovery/routing-log/2026-03-30-dw-source-dropbox-data-checking-2026-03-30-routing-record.md`
`architecture/02-experiments/2026-03-30-dw-source-dropbox-data-checking-2026-03-30-engine-handoff.md`
`architecture/02-experiments/2026-03-30-dw-source-dropbox-data-checking-2026-03-30-bounded-result.md`
`architecture/02-experiments/2026-03-30-dw-source-dropbox-data-checking-2026-03-30-bounded-result-adoption-decision.json`
`runtime/standalone-host/engine-runs/2026-03-30T00-00-00-000Z-dw-source-dropbox-data-checking-2026-03-30-83e78a78.json`
`runtime/standalone-host/engine-runs/2026-03-30T00-00-00-000Z-dw-source-dropbox-data-checking-2026-03-30-83e78a78.md`
`state/cases/dw-source-dropbox-data-checking-2026-03-30.json`
`state/case-events/dw-source-dropbox-data-checking-2026-03-30.jsonl`
`implement.md`
Verification run:
`npm run report:directive-workspace-state`
`npm run check`
`npx tsx -` with `resolveDirectiveWorkspaceState(...)` focused on `discovery/routing-log/2026-03-30-dw-source-dropbox-data-checking-2026-03-30-routing-record.md`
Result:
`Data Checking at Dropbox` entered through Discovery first, routed to Architecture with `usefulnessLevel: meta`, and then closed honestly as a NOTE-mode bounded result with verdict `stay_experimental` and `nextDecision: defer`. The retained value is checker-system design guidance for future Engine proof/evaluator work, but no concrete bounded product artifact emerged yet, so deeper Architecture materialization remains intentionally unopened.
Next likely move:
Stop and rerank from fresh truth. Do not continue this case by momentum unless a later explicit judgment isolates one concrete checker/evaluator artifact that current contracts do not already cover.
Risks / notes:
The first submission attempt failed cleanly because `method` is not a supported canonical Discovery source type; rerunning as `workflow-writeup` resolved that without leaving partial artifacts. This slice intentionally did not reopen runtime execution, planner seams, structural mapping, legacy adoption cleanup, or parked NOTE cases.

### Cycle 71
Chosen task:
Align the live `runtime/source-packs/` classification surface with the new repo-baseline ownership contract.
Why it won:
The new baseline contract explicitly classified `runtime/source-packs/` as runtime assets, not runtime records and not shared product logic. The strongest remaining live ambiguity symptom was `runtime/source-packs/README.md`, which still used stale Forge-era ownership language and an old product-root path, blurring asset storage with product authority.
Affected layer:
Runtime documentation and structural-boundary clarity.
Owning lane:
Architecture structural alignment in support of Runtime boundary clarity.
Mission usefulness:
Turns the new baseline contract into an active boundary rule on the highest-noise runtime surface, so future work sees `runtime/source-packs/` as a curated runtime asset root rather than as a runtime-records or shared-logic surface.
Proof path:
`runtime/source-packs/README.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous README wording and remove this log entry.
Stop-line:
Stop once the README clearly matches the repo-baseline contract, the main truth surfaces still pass, and no broader runtime-asset move is introduced.
Files touched:
`runtime/source-packs/README.md`
`implement.md`
Verification run:
`rg -n "runtime assets surface|runtime records surface|shared product-logic surface" runtime/source-packs/README.md`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`runtime/source-packs/README.md` now explicitly classifies the directory as a runtime assets surface, removes stale Forge-era ownership framing, removes the old product-root path reference, and keeps the catalog/readiness/import rules intact without implying that the folder is a runtime-records or shared-logic surface.
Next likely move:
Stop and rerank from fresh truth. Do not broaden this into folder movement, runtime execution work, or a larger source-pack program unless a new bounded ambiguity clearly emerges.
Risks / notes:
This slice stayed documentation-only. It did not move folders, change runtime code, reopen runtime execution seams, reopen structural mapping, or broaden into legacy cleanup.

### Cycle 72
Chosen task:
Align the live `sources/` ownership wording with the repo-baseline contract after the `runtime/source-packs/` clarification.
Why it won:
The strongest remaining same-class ambiguity was `sources/README.md`, which still used stale Forge-era wording and described raw-source boundaries as if Forge were the downstream owner alongside Architecture. That directly blurred the current Directive Workspace hierarchy after the new baseline contract established Discovery, Runtime, and Architecture as Engine lanes.
Affected layer:
Raw-source surface wording and top-level ownership clarity.
Owning lane:
Architecture structural alignment in support of Discovery/Runtime/Architecture boundary clarity.
Mission usefulness:
Keeps the raw-source surface aligned with the current product hierarchy so future source pressure lands through the correct lanes instead of inheriting stale Forge-era ownership language.
Proof path:
`sources/README.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous README wording and remove this log entry.
Stop-line:
Stop once the raw-source README clearly matches the repo-baseline contract, the main truth surfaces still pass, and no broader source-surface rewrite is introduced.
Files touched:
`sources/README.md`
`implement.md`
Verification run:
`rg -n "Forge|Runtime follow-up|Discovery, Runtime, and Architecture|source warehouses" sources/README.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`sources/README.md` now treats `sources/` as the canonical raw-source surface without stale Forge-era ownership wording. It now says the lane directories should reference the raw-source surface and produce Directive-owned outputs in their own lanes, and it no longer frames Runtime workflow artifacts as if they belonged under a Forge-owned downstream track.
Next likely move:
Stop and rerank from fresh truth. Do not broaden this into a general README sweep unless a later rerank shows one clearly stronger remaining ambiguity.
Risks / notes:
This slice stayed documentation-only. It did not move folders, rename surfaces, reopen frozen lanes, or broaden into historical cleanup.

### Cycle 73
Chosen task:
Align the shared schemas README with the repo-baseline contract by removing one remaining high-authority ownership/root-path ambiguity.
Why it won:
The strongest remaining same-class ambiguity was `shared/schemas/README.md`, a high-authority README in the Engine-owned declarative layer. It still described shared schemas as "architecture contract truth" and anchored its canonical references to the old `.openclaw\workspace\directive-workspace` root, which blurred both ownership and current repo authority.
Affected layer:
Shared declarative-layer wording and canonical reference clarity.
Owning lane:
Architecture structural alignment in support of Engine/shared boundary clarity.
Mission usefulness:
Keeps one of the highest-authority shared-layer READMEs aligned with the baseline contract so future schema work reads as Engine-owned shared contract authority rather than an Architecture-local surface with stale root assumptions.
Proof path:
`shared/schemas/README.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous README wording and remove this log entry.
Stop-line:
Stop once the shared schemas README uses current ownership wording and current-path references, the main truth surfaces still pass, and no broader doc sweep is introduced.
Files touched:
`shared/schemas/README.md`
`implement.md`
Verification run:
`rg -n "architecture contract truth|C:\\Users\\User\\.openclaw\\workspace\\directive-workspace|Engine-owned shared contract truth" shared/schemas/README.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`shared/schemas/README.md` now treats the schemas as Engine-owned shared contract truth and uses repo-relative references instead of the old `.openclaw\workspace\directive-workspace` root, aligning the shared schema surface with the current repo-baseline ownership contract.
Next likely move:
Stop and rerank from fresh truth. Do not broaden this into a general old-path sweep unless a later rerank shows one clearly stronger remaining ambiguity.
Risks / notes:
This slice stayed documentation-only. It did not move folders, rename surfaces, refactor schema code, or reopen frozen lanes.

### Cycle 74
Chosen task:
Align the top-level Runtime README with the repo-baseline contract after the shared-layer and source-surface clarifications.
Why it won:
`runtime/README.md` is a high-authority lane README and still carried two same-class contradictions: old `.openclaw\workspace\directive-workspace` canonical references and wording that overstated Runtime as shared-core ownership rather than a lane surface with explicit lane-local modules.
Affected layer:
Runtime top-level documentation and lane-boundary clarity.
Owning lane:
Architecture structural alignment in support of Runtime boundary clarity.
Mission usefulness:
Keeps the main Runtime README aligned with the baseline contract so future readers see Runtime as a bounded lane with explicit lane-local modules, runtime records, and runtime assets rather than as a competing shared-core surface.
Proof path:
`runtime/README.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous README wording and remove this log entry.
Stop-line:
Stop once the Runtime README uses current-path references and lane-aligned ownership wording, the main truth surfaces still pass, and no broader runtime rewrite is introduced.
Files touched:
`runtime/README.md`
`implement.md`
Verification run:
`rg -n "host-agnostic product-owned contracts and logic|curated external source packages|C:\\Users\\User\\.openclaw\\workspace\\directive-workspace|explicit Runtime lane modules|curated runtime asset packs" runtime/README.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`runtime/README.md` now uses repo-relative references, treats `core/` as explicit Runtime lane modules and contracts, and treats `source-packs/` as curated runtime asset packs instead of as a generic external source surface.
Next likely move:
Rerank the remaining Runtime-adjacent READMEs. Do not broaden beyond one surface per cycle.
Risks / notes:
This slice stayed documentation-only. It did not move folders, rename runtime stages, change runtime code, or reopen Runtime execution seams.

### Cycle 75
Chosen task:
Align the Runtime follow-up README with the repo-baseline contract after the top-level Runtime README clarification.
Why it won:
`runtime/follow-up/README.md` is the next strongest same-class ambiguity because it still used generic "product-owned" wording for a lane corpus surface and still pointed at the old `.openclaw\workspace\directive-workspace` template path.
Affected layer:
Runtime follow-up documentation and lane-ownership clarity.
Owning lane:
Architecture structural alignment in support of Runtime boundary clarity.
Mission usefulness:
Keeps the follow-up surface legible as a Runtime lane workflow surface instead of an undifferentiated product-ownership claim, while removing one more stale canonical-root reference from a current README.
Proof path:
`runtime/follow-up/README.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous README wording and remove this log entry.
Stop-line:
Stop once the Runtime follow-up README uses lane-aligned ownership wording and current-path references, the main truth surfaces still pass, and no broader Runtime-doc rewrite is introduced.
Files touched:
`runtime/follow-up/README.md`
`implement.md`
Verification run:
`rg -n "These files are product-owned|C:\\Users\\User\\.openclaw\\workspace\\directive-workspace|Runtime lane-owned workflow artifacts" runtime/follow-up/README.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`runtime/follow-up/README.md` now describes the folder as Runtime lane-owned workflow artifacts and uses the current repo-relative template reference instead of the old `.openclaw\workspace\directive-workspace` path.
Next likely move:
Rerank the remaining Runtime-adjacent READMEs. Do not broaden beyond one surface per cycle.
Risks / notes:
This slice stayed documentation-only. It did not move folders, change runtime workflow semantics, or reopen Runtime execution seams.

### Cycle 76
Chosen task:
Align the Runtime promotion-records README with the repo-baseline contract by removing the remaining stale canonical-root references.
Why it won:
`runtime/promotion-records/README.md` is a current Runtime README with clear same-class ambiguity: it still pointed every canonical reference at the old `.openclaw\workspace\directive-workspace` root even though the surface itself is otherwise structurally correct.
Affected layer:
Runtime promotion-record documentation and canonical reference clarity.
Owning lane:
Architecture structural alignment in support of Runtime boundary clarity.
Mission usefulness:
Keeps a current Runtime stage README aligned with the product root and avoids teaching future work the wrong canonical path for promotion artifacts and contracts.
Proof path:
`runtime/promotion-records/README.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous README references and remove this log entry.
Stop-line:
Stop once the promotion-records README uses current repo-relative references, the main truth surfaces still pass, and no broader Runtime-doc rewrite is introduced.
Files touched:
`runtime/promotion-records/README.md`
`implement.md`
Verification run:
`rg -n "C:\\Users\\User\\.openclaw\\workspace\\directive-workspace|shared/templates/promotion-record.md|shared/contracts/runtime-to-host.md|runtime/PROMOTION_PROFILES.json" runtime/promotion-records/README.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`runtime/promotion-records/README.md` now uses current repo-relative references for the promotion template, runtime-to-host contract, promotion profiles, and current backlog instead of the old `.openclaw\workspace\directive-workspace` root.
Next likely move:
Rerank the remaining authoritative Runtime/Shared READMEs. Do not broaden beyond one surface per cycle.
Risks / notes:
This slice stayed documentation-only. It did not alter promotion semantics, move files, or reopen Runtime execution seams.

### Cycle 77
Chosen task:
Align the shared-lib README with the current repo root after the shared schemas and Runtime README clarifications.
Why it won:
`shared/lib/README.md` is a higher-authority shared-layer surface than the remaining Runtime stage READMEs, and it still carried a stale `.openclaw\workspace\directive-workspace` reference for the host integration-kit guidance even though its ownership wording was otherwise already aligned.
Affected layer:
Shared support-layer documentation and canonical reference clarity.
Owning lane:
Architecture structural alignment in support of Engine/shared boundary clarity.
Mission usefulness:
Keeps the Engine-owned reusable support surface aligned with the canonical product root so future shared-lib work does not inherit stale path guidance from an otherwise authoritative README.
Proof path:
`shared/lib/README.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous README reference and remove this log entry.
Stop-line:
Stop once the shared-lib README uses the current repo-relative host reference, the main truth surfaces still pass, and no broader shared-lib rewrite is introduced.
Files touched:
`shared/lib/README.md`
`implement.md`
Verification run:
`rg -n "C:\\Users\\User\\.openclaw\\workspace\\directive-workspace|hosts/integration-kit/README.md" shared/lib/README.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`shared/lib/README.md` now points at `hosts/integration-kit/README.md` instead of the old `.openclaw\workspace\directive-workspace` path, keeping the shared support-layer reference surface aligned with current repo truth.
Next likely move:
Rerank the remaining authoritative READMEs. Do not broaden beyond one surface per cycle.
Risks / notes:
This slice stayed documentation-only. It did not change shared-lib ownership rules, move files, or reopen frozen lanes.

### Cycle 78
Chosen task:
Align the Runtime registry README with the current repo root after the Runtime top-level and stage README clarifications.
Why it won:
`runtime/registry/README.md` is still a current authoritative Runtime stage README, and its only remaining same-class ambiguity was the stale `.openclaw\workspace\directive-workspace` template reference.
Affected layer:
Runtime registry documentation and canonical reference clarity.
Owning lane:
Architecture structural alignment in support of Runtime boundary clarity.
Mission usefulness:
Keeps the accepted-runtime-state surface aligned with the canonical product root so future registry work is not pointed at stale path authority.
Proof path:
`runtime/registry/README.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous README reference and remove this log entry.
Stop-line:
Stop once the registry README uses the current repo-relative template reference, the main truth surfaces still pass, and no broader registry-doc rewrite is introduced.
Files touched:
`runtime/registry/README.md`
`implement.md`
Verification run:
`rg -n "C:\\Users\\User\\.openclaw\\workspace\\directive-workspace|shared/templates/registry-entry.md" runtime/registry/README.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`runtime/registry/README.md` now points at `shared/templates/registry-entry.md` instead of the old `.openclaw\workspace\directive-workspace` root while preserving the existing acceptance semantics.
Next likely move:
Rerank the remaining authoritative docs. Do not broaden beyond one surface per cycle.
Risks / notes:
This slice stayed documentation-only. It did not change registry semantics, move files, or reopen Runtime execution seams.

### Cycle 79
Chosen task:
Align the Discovery gap-worklist contract with the current repo root after the README-level structural clarifications.
Why it won:
`shared/contracts/discovery-gap-worklist.md` is a current high-authority shared contract, and its remaining same-class ambiguity was entirely stale `.openclaw\workspace\directive-workspace` canonical references for the worklist inputs and generator.
Affected layer:
Shared Discovery contract documentation and canonical reference clarity.
Owning lane:
Architecture structural alignment in support of Engine/shared and Discovery boundary clarity.
Mission usefulness:
Keeps a live Discovery contract anchored to the actual product root so future gap-priority work reads from the correct canonical surfaces instead of stale path authority.
Proof path:
`shared/contracts/discovery-gap-worklist.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous contract references and remove this log entry.
Stop-line:
Stop once the gap-worklist contract uses current repo-relative canonical surfaces, the main truth surfaces still pass, and no broader shared-contract sweep is introduced.
Files touched:
`shared/contracts/discovery-gap-worklist.md`
`implement.md`
Verification run:
`rg -n "C:\\Users\\User\\.openclaw\\workspace\\directive-workspace|discovery/capability-gaps.json|shared/lib/discovery-gap-worklist-generator.ts" shared/contracts/discovery-gap-worklist.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`shared/contracts/discovery-gap-worklist.md` now references the canonical Discovery and shared-lib surfaces through current repo-relative paths instead of the old `.openclaw\workspace\directive-workspace` root.
Next likely move:
Rerank the remaining shared contracts. Do not broaden beyond one surface per cycle.
Risks / notes:
This slice stayed documentation-only. It did not alter Discovery scoring rules, move files, or reopen frozen lanes.

### Cycle 80
Chosen task:
Align the Discovery mission-routing contract with the current repo root after the gap-worklist contract clarification.
Why it won:
`shared/contracts/discovery-mission-routing.md` was the last clearly dominant current contract in this ambiguity family. Its remaining same-class issue was stale `.openclaw\workspace\directive-workspace` references for the canonical routing inputs and shared-lib surfaces.
Affected layer:
Shared Discovery contract documentation and canonical reference clarity.
Owning lane:
Architecture structural alignment in support of Engine/shared and Discovery boundary clarity.
Mission usefulness:
Keeps the mission-routing contract pointed at the real shared-lib and Discovery surfaces so future routing work does not inherit stale root authority from an otherwise current contract.
Proof path:
`shared/contracts/discovery-mission-routing.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous contract references and remove this log entry.
Stop-line:
Stop once the mission-routing contract uses current repo-relative canonical surfaces, the main truth surfaces still pass, and no broader contract sweep is introduced.
Files touched:
`shared/contracts/discovery-mission-routing.md`
`implement.md`
Verification run:
`rg -n "C:\\Users\\User\\.openclaw\\workspace\\directive-workspace|shared/lib/discovery-mission-routing.ts|discovery/capability-gaps.json" shared/contracts/discovery-mission-routing.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`shared/contracts/discovery-mission-routing.md` now references the canonical shared-lib, mission, and Discovery surfaces through current repo-relative paths instead of the old `.openclaw\workspace\directive-workspace` root.
Next likely move:
Stop and rerank. Remaining same-class issues are now scattered across specialized guard contracts and historical runtime records rather than one clearly dominant current surface.
Risks / notes:
This slice stayed documentation-only. It did not alter routing semantics, move files, or reopen frozen lanes.

### Cycle 81
Chosen task:
Align the doctrine-level system-surface wording with the repo-baseline contract after the current README and contract path clarifications.
Why it won:
`knowledge/doctrine.md` is a high-authority current doctrine surface, and its System Surfaces section still described `architecture/`, `runtime/`, and `discovery/` as product-owned folder surfaces while also giving `runtime/` host-agnostic core logic ownership that conflicts with the repo-baseline contract.
Affected layer:
Doctrine-level structural ownership wording for the top-level lane surfaces.
Owning lane:
Architecture structural alignment in support of Engine/shared and lane-boundary clarity.
Mission usefulness:
Keeps the doctrine-level baseline aligned with the canonical repo-baseline contract so future work does not inherit lane-folder ownership claims that belong to `engine/` or `shared/`.
Proof path:
`knowledge/doctrine.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous System Surfaces wording in `knowledge/doctrine.md` and remove this log entry.
Stop-line:
Stop once the doctrine section treats the lane folders as workflow/corpus surfaces, the main truth surfaces still pass, and no broader doctrine rewrite is introduced.
Files touched:
`knowledge/doctrine.md`
`implement.md`
Verification run:
`rg -n "product-owned Architecture surface|product-owned Runtime surface|product-owned Discovery front door|host-agnostic core logic|lane workflow/corpus surface|lane-local Runtime support" knowledge/doctrine.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`knowledge/doctrine.md` now treats `architecture/`, `runtime/`, and `discovery/` as lane workflow/corpus surfaces and limits `runtime/` to lane-local Runtime support instead of shared core ownership, keeping the doctrine aligned with the repo-baseline contract.
Next likely move:
Rerank the remaining current-surface hits. Stop if the remaining same-class issues are scattered specialized guard contracts, runtime asset records, or other surfaces that no longer present one clearly dominant high-confidence contradiction.
Risks / notes:
This slice stayed documentation-only. It did not move folders, change runtime execution boundaries, or reopen frozen lanes.

### Cycle 82
Chosen task:
Align the OpenClaw-to-Discovery contract with the canonical Directive Workspace Discovery queue path after the doctrine-level lane-surface clarification.
Why it won:
`shared/contracts/openclaw-to-discovery.md` is a current high-authority shared contract, and its remaining same-class ambiguity was the stale `.openclaw\workspace\directive-workspace` path for the authoritative Discovery intake queue.
Affected layer:
Shared Discovery contract documentation and canonical target-path clarity.
Owning lane:
Architecture structural alignment in support of Engine/shared and Discovery boundary clarity.
Mission usefulness:
Keeps a live upstream-submission contract pointed at the canonical Discovery queue inside the current product root without changing the surrounding OpenClaw or Mission Control host references.
Proof path:
`shared/contracts/openclaw-to-discovery.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous Discovery queue references in `shared/contracts/openclaw-to-discovery.md` and remove this log entry.
Stop-line:
Stop once the contract uses the current repo-relative Discovery queue target, the main truth surfaces still pass, and no broader OpenClaw contract rewrite is introduced.
Files touched:
`shared/contracts/openclaw-to-discovery.md`
`implement.md`
Verification run:
`rg -n "C:\\Users\\User\\.openclaw\\workspace\\directive-workspace\\discovery\\intake-queue.json|discovery/intake-queue.json" shared/contracts/openclaw-to-discovery.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`shared/contracts/openclaw-to-discovery.md` now references the canonical Discovery queue through `discovery/intake-queue.json` instead of the stale `.openclaw\workspace\directive-workspace` root while preserving the surrounding upstream helper and host API references.
Next likely move:
Rerank the remaining current shared contracts. Stop if the remaining same-class issues are no longer one clearly dominant current-surface contradiction.
Risks / notes:
This slice stayed documentation-only. It did not alter submission semantics, move files, or reopen frozen lanes.

### Cycle 83
Chosen task:
Align the OpenClaw maintenance-watchdog signal contract with the canonical Directive Workspace Discovery queue path after the upstream submission contract clarification.
Why it won:
`shared/contracts/openclaw-maintenance-watchdog-signal.md` is a current high-authority shared contract, and its remaining same-class ambiguity was the stale `.openclaw\workspace\directive-workspace` path for the Discovery submission target.
Affected layer:
Shared Discovery contract documentation and canonical target-path clarity.
Owning lane:
Architecture structural alignment in support of Engine/shared and Discovery boundary clarity.
Mission usefulness:
Keeps the watchdog degradation signal contract pointed at the actual Discovery queue inside the current product root so a live upstream signal surface does not inherit stale target authority.
Proof path:
`shared/contracts/openclaw-maintenance-watchdog-signal.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous Discovery submission target in `shared/contracts/openclaw-maintenance-watchdog-signal.md` and remove this log entry.
Stop-line:
Stop once the contract uses the current repo-relative Discovery queue target, the main truth surfaces still pass, and no broader watchdog-contract rewrite is introduced.
Files touched:
`shared/contracts/openclaw-maintenance-watchdog-signal.md`
`implement.md`
Verification run:
`rg -n "C:\\Users\\User\\.openclaw\\workspace\\directive-workspace\\discovery\\intake-queue.json|discovery/intake-queue.json" shared/contracts/openclaw-maintenance-watchdog-signal.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`shared/contracts/openclaw-maintenance-watchdog-signal.md` now references the canonical Discovery queue through `discovery/intake-queue.json` instead of the stale `.openclaw\workspace\directive-workspace` root while preserving the surrounding external watchdog-state and helper references.
Next likely move:
Rerank the remaining current shared contracts. Stop if the remaining same-class issues are no longer one clearly dominant current-surface contradiction.
Risks / notes:
This slice stayed documentation-only. It did not alter watchdog signal semantics, move files, or reopen frozen lanes.

### Cycle 84
Chosen task:
Align the promotion quality-gate contract with the canonical Runtime promotion-profile inventory path after the Discovery submission contract clarifications.
Why it won:
`shared/contracts/promotion-quality-gate.md` is a current high-authority shared contract, and its remaining same-class ambiguity was the stale `.openclaw\workspace\directive-workspace` canonical inventory path for Runtime promotion profiles.
Affected layer:
Shared Runtime contract documentation and canonical inventory-path clarity.
Owning lane:
Architecture structural alignment in support of Engine/shared and Runtime boundary clarity.
Mission usefulness:
Keeps a general Runtime promotion contract anchored to the actual product inventory path so promotion-proof work does not inherit stale root authority.
Proof path:
`shared/contracts/promotion-quality-gate.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous canonical inventory path in `shared/contracts/promotion-quality-gate.md` and remove this log entry.
Stop-line:
Stop once the contract uses the current repo-relative promotion-profile inventory path, the main truth surfaces still pass, and no broader quality-gate rewrite is introduced.
Files touched:
`shared/contracts/promotion-quality-gate.md`
`implement.md`
Verification run:
`rg -n "C:\\Users\\User\\.openclaw\\workspace\\directive-workspace\\runtime\\PROMOTION_PROFILES.json|runtime/PROMOTION_PROFILES.json" shared/contracts/promotion-quality-gate.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`shared/contracts/promotion-quality-gate.md` now references the canonical Runtime promotion inventory through `runtime/PROMOTION_PROFILES.json` instead of the stale `.openclaw\workspace\directive-workspace` root.
Next likely move:
Rerank the remaining current shared contracts. Stop if the remaining same-class issues are no longer one clearly dominant current-surface contradiction.
Risks / notes:
This slice stayed documentation-only. It did not alter promotion thresholds, move files, or reopen frozen lanes.

### Cycle 85
Chosen task:
Align the skill-lifecycle guard contract with the canonical Runtime promotion-profile inventory path after the general promotion quality-gate clarification.
Why it won:
`shared/contracts/skill-lifecycle-guard.md` is a current high-authority shared contract, and its remaining same-class ambiguity was the stale `.openclaw\workspace\directive-workspace` canonical inventory path for Runtime promotion profiles.
Affected layer:
Shared Runtime contract documentation and canonical inventory-path clarity.
Owning lane:
Architecture structural alignment in support of Engine/shared and Runtime boundary clarity.
Mission usefulness:
Keeps a live specialized Runtime promotion guard anchored to the actual promotion-profile inventory so skill-lifecycle proof work does not inherit stale root authority.
Proof path:
`shared/contracts/skill-lifecycle-guard.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous canonical inventory path in `shared/contracts/skill-lifecycle-guard.md` and remove this log entry.
Stop-line:
Stop once the contract uses the current repo-relative promotion-profile inventory path, the main truth surfaces still pass, and no broader skill-lifecycle contract rewrite is introduced.
Files touched:
`shared/contracts/skill-lifecycle-guard.md`
`implement.md`
Verification run:
`rg -n "C:\\Users\\User\\.openclaw\\workspace\\directive-workspace\\runtime\\PROMOTION_PROFILES.json|runtime/PROMOTION_PROFILES.json" shared/contracts/skill-lifecycle-guard.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`shared/contracts/skill-lifecycle-guard.md` now references the canonical Runtime promotion inventory through `runtime/PROMOTION_PROFILES.json` instead of the stale `.openclaw\workspace\directive-workspace` root.
Next likely move:
Rerank the remaining current shared contracts. Stop if the remaining same-class issues are no longer one clearly dominant current-surface contradiction.
Risks / notes:
This slice stayed documentation-only. It did not alter skill-lifecycle guard semantics, move files, or reopen frozen lanes.

### Cycle 86
Chosen task:
Align the command-class approval policy with the canonical linked contract path after the promotion-inventory contract clarifications.
Why it won:
`shared/contracts/command-class-approval-policy.md` is a current high-authority shared contract, and its remaining same-class ambiguity was the stale `.openclaw\workspace\directive-workspace` linked-contract path.
Affected layer:
Shared Runtime-adjacent contract documentation and canonical contract-link clarity.
Owning lane:
Architecture structural alignment in support of Engine/shared contract authority.
Mission usefulness:
Keeps a live approval-policy contract anchored to the actual linked contract inside the current product root without changing any runtime mediation policy.
Proof path:
`shared/contracts/command-class-approval-policy.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous linked-contract path in `shared/contracts/command-class-approval-policy.md` and remove this log entry.
Stop-line:
Stop once the contract uses the current repo-relative linked-contract path, the main truth surfaces still pass, and no broader command-mediation rewrite is introduced.
Files touched:
`shared/contracts/command-class-approval-policy.md`
`implement.md`
Verification run:
`rg -n "C:\\Users\\User\\.openclaw\\workspace\\directive-workspace\\shared\\contracts\\command-mediation-contract.md|shared/contracts/command-mediation-contract.md" shared/contracts/command-class-approval-policy.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`shared/contracts/command-class-approval-policy.md` now references the canonical linked contract through `shared/contracts/command-mediation-contract.md` instead of the stale `.openclaw\workspace\directive-workspace` root.
Next likely move:
Rerank the remaining current shared contracts. Stop if the remaining same-class issues are no longer one clearly dominant current-surface contradiction.
Risks / notes:
This slice stayed documentation-only. It did not alter approval-policy semantics, move files, or reopen frozen lanes.

### Cycle 87
Chosen task:
Align the agent eval guard contract with the canonical Runtime promotion-profile inventory path after the command-policy path clarification.
Why it won:
`shared/contracts/agent-eval-guard.md` is a current high-authority shared contract, and its remaining same-class ambiguity was the stale `.openclaw\workspace\directive-workspace` canonical inventory path for Runtime promotion profiles.
Affected layer:
Shared Runtime contract documentation and canonical inventory-path clarity.
Owning lane:
Architecture structural alignment in support of Engine/shared and Runtime boundary clarity.
Mission usefulness:
Keeps a live specialized Runtime eval guard anchored to the actual promotion-profile inventory so eval proof work does not inherit stale root authority.
Proof path:
`shared/contracts/agent-eval-guard.md`
`npm run report:directive-workspace-state`
`npm run check`
Rollback path:
Restore the previous canonical inventory path in `shared/contracts/agent-eval-guard.md` and remove this log entry.
Stop-line:
Stop once the contract uses the current repo-relative promotion-profile inventory path, the main truth surfaces still pass, and no broader eval-guard rewrite is introduced.
Files touched:
`shared/contracts/agent-eval-guard.md`
`implement.md`
Verification run:
`rg -n "C:\\Users\\User\\.openclaw\\workspace\\directive-workspace\\runtime\\PROMOTION_PROFILES.json|runtime/PROMOTION_PROFILES.json" shared/contracts/agent-eval-guard.md -S`
`npm run report:directive-workspace-state`
`npm run check`
Result:
`shared/contracts/agent-eval-guard.md` now references the canonical Runtime promotion inventory through `runtime/PROMOTION_PROFILES.json` instead of the stale `.openclaw\workspace\directive-workspace` root.
Next likely move:
Rerank the remaining current shared contracts. Stop if the remaining same-class issues are no longer one clearly dominant current-surface contradiction.
Risks / notes:
This slice stayed documentation-only. It did not alter eval-guard semantics, move files, or reopen frozen lanes.

Run stop note:
The structural-alignment wording/authority loop is intentionally paused here at the current verified boundary. The remaining same-class fixes are smaller than the overhead of full standalone cycle logging.
Treat the last fully rerun report/check boundary in this loop as the stable exit point for handoff purposes; do not resume with more standalone micro-cycle entries by momentum.

Future logging rule for this repair family:
- use one batched run header for the loop
- record one compact bullet per verified micro-fix
- end with one stop summary
- reserve full standalone cycle entries for rule changes, new contracts/checks, or slices that require non-trivial product interpretation

### Batched loop run 2026-03-30B - structural-authority micro-repairs
Run scope:
- continue the same-class wording/authority loop using compact batched logging instead of more standalone micro-cycle entries
- stay limited to current high-authority contracts and one lane README

Verified micro-fixes:
- `shared/contracts/browser-smoke-guard.md`: canonical inventory now uses `runtime/PROMOTION_PROFILES.json`.
- `shared/contracts/design-review-skill-guard.md`: canonical inventory now uses `runtime/PROMOTION_PROFILES.json`.
- `shared/contracts/context-operator-import-guard.md`: canonical inventory now uses `runtime/PROMOTION_PROFILES.json`.
- `shared/contracts/dw-web-host-seam-review-guard.md`: canonical inventory now uses `runtime/PROMOTION_PROFILES.json`.
- `shared/contracts/bounded-literature-monitoring-workflow.md`: related-artifact references now use current repo-relative shared contract/template/schema paths.
- `shared/contracts/literature-monitoring-degraded-state-guard.md`: relationship references now use current repo-relative shared contract/template/schema paths.
- `shared/contracts/host-integration-acceptance.md`: host acceptance wording now says the host respects the canonical Discovery lifecycle.
- `runtime/records/README.md`: repo-relative template reference now points at `shared/templates/runtime-record.md`, and the folder description no longer implies active runtime execution ownership.

Verification run:
- `rg -n "C:\\Users\\User\\.openclaw\\workspace\\directive-workspace\\runtime\\PROMOTION_PROFILES.json|C:\\Users\\User\\.openclaw\\workspace\\directive-workspace\\shared\\contracts\\bounded-literature-monitoring-workflow.md|C:\\Users\\User\\.openclaw\\workspace\\directive-workspace\\shared\\contracts\\evaluator-contract.md|C:\\Users\\User\\.openclaw\\workspace\\directive-workspace\\shared\\templates\\literature-monitoring-digest.md|C:\\Users\\User\\.openclaw\\workspace\\directive-workspace\\shared\\templates\\runtime-record.md|product-owned Discovery lifecycle|active Runtime execution records" shared/contracts runtime/records/README.md -S`
- `npm run report:directive-workspace-state`
- `npm run check`

Stop summary:
- Stop once the batch is verified and the remaining same-class hits are mostly historical runtime records, promotion/registry artifacts, or older inventory documents rather than current high-authority doctrine/contract/README surfaces.

