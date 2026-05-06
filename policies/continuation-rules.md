# Continuation Rules

## Task Selection

At each cycle:
1. refresh repo truth from code, records, and relevant docs
2. identify candidate next tasks
3. rank by mission usefulness, bounded scope, verification strength, readiness, regression risk, and shared value
4. choose exactly one bounded task

If close, prefer stronger verification, lower risk, immediate usefulness, and less doctrinal ambiguity.

## Cycle Framing

Before implementing, record:
- affected layer
- chosen task and why it won
- mission usefulness
- proof path
- rollback path
- stop-line
- owning stop-line card from `policies/stop-line-cards.json`

Implement only to the stop-line.

## Persistence

Continue through bounded verified steps while a clear high-ROI next move exists.

Stop when no credible bounded task remains, human judgment/access is needed, validation is blocked, or the next useful move would require broad redesign.

Do not use a numeric continuation quota.
