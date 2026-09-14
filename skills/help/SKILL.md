---
name: help
description: Router map for this toolkit. Use when choosing which skill or external MCP to load next, or when the user asks what this catalog can do.
user-invocable: true
references:
  - references/routes.md
---

# Help — routing map

This toolkit does not replace issue-tracker, git, chat, or design MCP servers. It tells the agent **which of those to use, when, and which workflow to load first**.

## Always

1. Call `list_skills`.
2. Call `get_skill` for the best match.
3. Call the other MCP only after the workflow says to. Do not invent org-specific IDs.

## Pick a lane

| Situation | Load | Then talk to |
| --- | --- | --- |
| User wants a product spec | `create-prd` or `clarify-prd` | docs / wiki MCP if needed |
| File a bug or story | `open-work-item` | issue-tracker MCP |
| Implement a ticket | `ship-work-item` | git-host MCP |
| Review a ticket or PR | `review-work-item` | tracker + git MCPs |
| PR feedback loop | `address-review-feedback` | git MCP |
| Incoming bug | `triage-bug` | tracker MCP |
| Incoming feature ask | `triage-feature` | tracker MCP |
| Order the backlog | `prioritize-backlog` | tracker MCP |
| Daily status | `standup-update` | tracker + chat MCPs |
| Analytics event names | `write-analytics` | your analytics docs, not a required MCP |
| Design ask | `request-design` | design MCP if connected |
| Confirm a risky plan | `challenge-assumptions` | none |
| Author a new skill | `create-skill` | none |

Follow [references/routes.md](references/routes.md) for load order and anti-patterns.
