# Verification Failed Example

Cycle 7

Chosen task:
Tighten template validation for handoff records.

Proof path:
`npm run check:agent-control`

Verification run:
`npm run check:agent-control`

Result:
Failed. The checker reported that `templates/handoff.md` is missing `## Risks / notes`.

Stop-line:
Do not claim template validation is complete until the missing heading is restored and the checker passes.

Next likely move:
Restore the missing heading or revise the checker and template together if the contract changed intentionally.

