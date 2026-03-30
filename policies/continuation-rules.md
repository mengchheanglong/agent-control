# Continuation Rules

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
   - shared project value
5. choose exactly one bounded next step

If multiple tasks are close, prefer the one with:
1. stronger verification
2. lower regression risk
3. more immediate workflow usefulness
4. less doctrinal ambiguity

If the best task is blocked, skip to the next highest-ROI bounded task instead of stalling.

## Required cycle framing

Before each cycle, determine and record:
- affected layer
- chosen task
- why it is the highest-ROI next move
- mission usefulness
- proof path
- rollback path
- stop-line

Implement only up to the stop-line, even if more work is possible.

Do not mix unrelated tasks into the same cycle unless they are tightly required to complete the chosen bounded slice.

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

## Continuation stopping rule

Continue through additional bounded cycles when current repo truth still shows a clear high-ROI next move.

Do not use a numeric continuation quota as a reason to keep going or to stop.

A true hard stop means:
- no credible bounded high-ROI task remains
- all remaining paths are blocked by missing authority, missing access, or unresolved doctrine conflict
- further work would likely create regressions or false progress
