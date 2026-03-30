# Active Runbook

## Run purpose

This is the active runbook for autonomous work in this standalone Agent Control repo.

Before doing substantive work, the agent must:
1. read `README.md`
2. read `implement.md`
3. read `runbook/active.md`
4. read `runbook/current-priority.md`
5. read the relevant files under `policies/`
6. refresh current repo truth from code and records
7. then proceed in bounded verified cycles

This runbook works with the other repo surfaces:
- `runbook/current-priority.md` for current mission focus and run priority
- `policies/stop-lines.md` for active execution guardrails
- `policies/continuation-rules.md` for task selection and continuation rules
- `policies/logging-rules.md` for logging and handoff rules

Historical logs do not belong here. They belong under `logs/`.

## Scope for this run

In scope:
- bounded, reversible, measurable changes
- workflow, loop, and handoff improvements
- stronger verification, reporting, and decision discipline
- lightweight helper scripts and checks
- docs, templates, and code alignment when grounded in actual repo truth

Out of scope:
- broad speculative platform redesign
- unrelated cleanup
- generic framework expansion without workflow pressure
- bundling several separate improvements into one cycle
- treating archived material as current doctrine

## Repo-specific constraints

The agent must preserve these truths while working:

- this standalone repo is the product surface
- optimize for agent workflow usefulness, not framework breadth
- keep loops bounded, explicit, and verifiable
- do not couple active instructions to sibling repos or hidden home-directory layouts
- do not turn archived logs into active doctrine
- do not drop decide, report, or handoff discipline
- keep changes reversible, measurable, and evidence-based

If work touches doctrine-sensitive areas, prefer the smallest change that increases real operating value.

## Instruction priority

When instructions conflict, use this order:
1. direct user instruction in the current session
2. `README.md`
3. `implement.md`
4. `runbook/active.md`
5. nearest local docs for the touched area
6. code truth and established repo patterns

If uncertainty remains, inspect more before changing code.

## Verification rules

Never claim success without evidence.

Use the strongest practical verification available for the touched area, preferring:
1. targeted checks for the changed behavior
2. existing workflow checks
3. targeted tests
4. broader repo validation if needed

Prefer targeted verification before broad noisy validation.

If relevant, use commands like:

```bash
npm run check
npm run check:agent-control
```

If the touched area has its own targeted check or report script, use that first.

If no adequate verification exists and the change truly needs it, add minimal focused verification rather than broad test scaffolding.

If verification fails:
- fix the bounded slice if practical
- otherwise stop honestly at the failed boundary and record the issue clearly

## Change discipline

Keep edits:
- minimal
- coherent
- reversible
- evidence-based

Rules:
- do not silently redesign adjacent systems
- do not broaden scope just because a nearby cleanup is tempting
- do not make records claim more than code truth supports
- do not move parked work unless clearly justified by current repo truth
- do not treat partial work as completed work
- do not create drift between instructions, templates, and actual behavior

When touching records, reports, or handoff files, ensure they reflect actual implementation truth.
