# 2026-03-30 Control Authority Guardrail

Chosen task:
- add one focused guardrail that catches future drift between the thin `implement.md` entrypoint and the split `control/` authority surfaces

Why it won:
- the `control/` refactor was complete, and the highest-ROI final hardening slice was one minimal checker that prevents monolithic-runbook drift from returning silently

Affected layer:
- control authority / repo validation

Owning lane:
- Architecture structural alignment

Mission usefulness:
- preserves the new control split without changing product semantics, doctrine, or stop-lines

Proof path:
- `scripts/check-control-authority.ts`
- `package.json`

Rollback path:
- remove `scripts/check-control-authority.ts`
- remove `check:control-authority` from `package.json`
- remove this log entry

Stop-line:
- stop once the checker exists, the standard `npm run check` path includes it, verification passes, and no broader control redesign is introduced

Files touched:
- `scripts/check-control-authority.ts`
- `package.json`
- `control/logs/2026-03/2026-03-30-control-authority-guardrail.md`

Verification run:
- `npm run check:control-authority`
- `npm run report:directive-workspace-state`
- `npm run check`

Result:
- the repo now fails fast if `implement.md` regrows active monolithic runbook sections or if the split `control/runbook/` and `control/policies/` authority stops being explicit
