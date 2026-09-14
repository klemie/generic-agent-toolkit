# Agent notes

This repo is a **router MCP**. Before writing to an external platform, call `list_skills`, then `get_skill` for the matching workflow.

Do not invent field IDs, channel names, or API shapes. Ask the user or use what the other MCP returns.

Layers:

- Behavior: how to ask and confirm (`challenge-assumptions`)
- Workflow: phases and handoffs (`open-work-item`, `ship-work-item`, …)

This public catalog does not ship platform fact hubs. Orgs can add their own later via `create-skill`.

New skills: follow `create-skill` and `create-skill/references/composition.md`.
