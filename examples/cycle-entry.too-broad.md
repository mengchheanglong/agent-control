# Cycle Entry Example - Too Broad

Cycle N

Chosen task:
Build a full autonomous agent orchestrator with background scheduling, cross-repo mutation, and automatic task selection.

Why it is flawed:
This crosses the current scope stop-line. It combines runtime design, automation, external mutation, and task selection into one unverifiable slice.

Stop signal:
Split this into a smaller helper or do not start it in this repo.

Better bounded replacement:
Add a CLI command that scaffolds one cycle entry with required proof and rollback fields.

