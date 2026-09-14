# Skill composition

Two layers in this public catalog. No inheritance. Compose by explicit `get_skill` load.

| Layer | Owns | Must not own |
| --- | --- | --- |
| Behavior | Questions, confirm UX | Field IDs, API payloads, channel maps |
| Workflow | Phases, guards, when to write | Copied org-specific fact tables |

Orgs may add a third **facts** layer later (platform IDs, templates, how to call another MCP). This repo does not ship those packages.

## Handoff

1. Name the workflow.
2. Load it before the write.
3. One hop: the writer loads what it needs itself.
4. Point at a file key in the `get_skill` response (`references/…`). Markdown links alone are not a load.

After a skill is loaded in the session, further “follow `X.md`” is enough.

## Anti-patterns

- Pasting tracker custom fields into a workflow.
- Behavior skills naming platforms’ IDs.
- Deep chains of reference files.
- Two skills with the same triggers.
