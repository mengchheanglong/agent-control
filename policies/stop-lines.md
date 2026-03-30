# Stop-Lines

## Current Standalone Migration Stop-Line

Allowed now:
- root-relative docs and scripts
- minimal package and check scaffolding
- bounded cleanup that removes parent-workspace assumptions

Explicitly not allowed now:
- reintroducing a sibling workspace as a required parent
- hardcoded hidden-workspace or sibling-root assumptions
- treating archived logs as active instructions
- compatibility shims that hide missing standalone structure instead of fixing it

Reopen criteria:
- only reopen external-coupling work if a concrete integration requirement is identified and documented
- keep the default repo self-contained

Anti-drift warning:
- future docs and scripts must treat this repo as its own root
- historical references must be labeled as historical context, not active truth

## Current Scope Stop-Line

Allowed now:
- workflow and loop control surfaces
- verification and reporting improvements
- templates, handoff discipline, and small helper scripts

Explicitly not allowed now:
- building a full agent runtime or orchestrator inside this repo
- speculative multi-service architecture
- unrelated product features
- broad redesign without bounded proof

Reopen criteria:
- only expand scope when a smaller verified slice can no longer solve the active problem
- new scope must come with a clear proof path and rollback path

## Current Loop Execution Stop-Line

Allowed now:
- manual and documented loop planning
- check scripts and verification helpers
- limited automation only when its inputs, outputs, and stop conditions are explicit

Explicitly not allowed now:
- hidden infinite loops
- autonomous execution without stop-lines or proof path
- unverified state mutation across external repos
- planner-driven execution claims without working verification

Reopen criteria:
- only broaden execution authority after a concrete use case exists and the verification surface is already in place
- keep loop control explicit and reviewable by default
