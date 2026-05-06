# Project Memory

Imported projects can keep their active agent memory at `memory/project.md`.

Project memory is a compact operating state for coding agents. It should help the next agent understand the project context, current truth, constraints, accepted decisions, useful suggestions, open questions, next best move, and proof path.

`memory/state.json` is a generated context capsule for tools. Regenerate it from Markdown instead of hand-editing it.

Do not use project memory as a transcript, diary, or full log. Put detailed history under `logs/`; keep memory short and current.

Start a new imported project after the agent has inspected the host project and asked the user for optional extra context:

```bash
npm run agent-control -- bootstrap --context "..."
```

The CLI should not infer context by itself. The AI agent should analyze the project, ask one short optional question, then pass the resulting context into `bootstrap`.

Update it after meaningful cycles with:

```bash
npm run agent-control -- update-memory --recent-change "..." --next "..." --proof "..."
```

Show the current next move with:

```bash
npm run agent-control -- show-next
```

Compare possible next moves with:

```bash
npm run agent-control -- score-next --candidate "Fix the highest-risk failing test and update memory"
```

Audit memory quality with:

```bash
npm run agent-control -- audit-memory
```

Trim stale list sections with:

```bash
npm run agent-control -- compact-memory
```
