---
name: request-design
description: Workflow to file a design request. Use when the user needs design-tool work. Call the design MCP only after confirm.
user-invocable: true
---

# Request design

1. Capture surface, problem, and constraints (platforms, brand, deadline).
2. Confirm with `challenge-assumptions`.
3. Call the design MCP if one is connected. Ask for file keys the user did not give.
4. If the org files design work in the tracker, create that item with `open-work-item` and link the file.
