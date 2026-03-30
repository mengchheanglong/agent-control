# 2026-03-30 Control Authority Thin Entrypoint Shape Guard

Chosen task:
- extend the existing `control/` authority checker with one shape guard that prevents `implement.md` from quietly regrowing into a larger pseudo-runbook

Why it won:
- the split authority model was already in place, but the checker still relied mostly on wording snippets; the smallest useful final hardening step was to assert that `implement.md` stays structurally thin

Affected layer:
- control authority / repo validation

Owning lane:
- Architecture structural alignment

Mission usefulness:
- preserves the control split by catching drift before `implement.md` can absorb active runbook content again

Proof path:
- `scripts/check-control-authority.ts`

Rollback path:
- revert the shape assertions added to `scripts/check-control-authority.ts`
- remove this log entry

Stop-line:
- stop once the checker enforces thin-entrypoint shape, targeted verification passes, and the standard repo truth/check surfaces still pass

Files touched:
- `scripts/check-control-authority.ts`
- `control/logs/2026-03/2026-03-30-control-authority-thin-entrypoint-shape-guard.md`

Verification run:
- `npm run check:control-authority`
- `npm run report:directive-workspace-state`
- `npm run check`

Result:
- the repo now fails fast if `implement.md` grows beyond a thin entrypoint shape even without reusing the exact old monolithic headings
