# Skill composition

Two layers in this public catalog. No inheritance. Compose by explicit `get_skill` load.

| Layer | Owns | Must not own |
| --- | --- | --- |
| Behavior | Questions, confirm UX | Product requirements, tool payloads |
| Workflow | Phases, guards, handoffs | Copied instructions from other skills |

Projects may add a third **facts** layer later (local architecture, templates, or tool guidance). This repo does not ship project-specific packages.

## Handoff

1. Name the workflow.
2. Load it before the write.
3. One hop: the writer loads what it needs itself.
4. Point at a file key in the `get_skill` response (`references/…`). Markdown links alone are not a load.

After a skill is loaded in the session, further “follow `X.md`” is enough.

## Anti-patterns

- Pasting project-specific settings into a reusable workflow.
- Behavior skills prescribing tool payloads.
- Deep chains of reference files.
- Two skills with the same triggers.
