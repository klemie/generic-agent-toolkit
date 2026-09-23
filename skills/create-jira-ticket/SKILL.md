---
name: open-work-item
description: Workflow to create a bug or story in an issue tracker. Use when filing work. Call the tracker MCP after confirm — do not invent field IDs.
user-invocable: true
---

# Open a work item

This skill does not create issues by itself. It sequences the other MCP.

1. Classify bug vs story vs task from the user request.
2. Search the tracker MCP for duplicates.
3. Confirm the plan with `challenge-assumptions`.
4. Call the issue-tracker MCP. Do not invent custom fields. Use the project, type, and required fields the user or the MCP provides.

After create, offer `ship-work-item` if implementation starts now.
