---
name: ship-work-item
description: Workflow to implement a tracker item in a git repo. Use when coding against a ticket. Open a pull request via the git-host MCP after the change is ready.
user-invocable: true
---

# Ship a work item

1. Read the ticket via the tracker MCP. If required fields are missing, stop and say so.
2. Plan the change. Confirm with `challenge-assumptions` when the diff will be large or public-facing.
3. Implement in the workspace. Keep the change scoped to the ticket.
4. Call the git-host MCP to open the PR. Link the ticket if the user gave a key.
5. Update tracker status only if the user asked, using names the tracker MCP already returned.
