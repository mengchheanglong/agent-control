# Project Memory

Imported projects can keep their active agent memory at `memory/project.md`.

Project memory is a compact operating state for coding agents. It should help the next agent understand the goal, current truth, constraints, accepted decisions, useful suggestions, open questions, next best move, and proof path.

Do not use project memory as a transcript, diary, or full log. Put detailed history under `logs/`; keep memory short and current.

Start one with:

```bash
npm run agent-control -- init-memory --goal "..."
```

Update it after meaningful cycles with:

```bash
npm run agent-control -- update-memory --recent-change "..." --next "..." --proof "..."
```

Show the current next move with:

```bash
npm run agent-control -- show-next
```

