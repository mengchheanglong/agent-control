# Cycle Entry Example - Good

Cycle 4

Chosen task:
Add a repo-local reuse check that copies the repo to a temp directory and runs the authority checker there.

Why it won:
It directly proves the self-contained repo claim and has a clear pass/fail command.

Affected layer:
scripts

Owning lane:
repo-boundary

Mission usefulness:
Confirms Agent Control can be adopted outside the current checkout.

Proof path:
`npm run check:reusable`

Rollback path:
Remove the reuse check script and package script.

Stop-line:
Do not add external installation or publishing automation.

Files touched:
`scripts/check-reusable-install.mjs`, `package.json`

Verification run:
`npm run check:reusable`

Result:
Passed.

Next likely move:
Wire the reuse check into the authority checker if it becomes a recurring release gate.

Risks / notes:
Temp directory copy filters must keep ignoring `.git` and `node_modules`.

