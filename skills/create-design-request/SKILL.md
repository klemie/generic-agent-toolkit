---
name: create-design-request
description: Workflow to file a design request. Use when the user needs design-tool work. Call the design MCP only after confirm.
user-invocable: true
---

# Create a design request

1. Capture surface, problem, and constraints (platforms, brand, deadline).
2. Confirm with `grill-me`.
3. Call the design MCP if one is connected. Ask for file keys the user did not give.
4. If design work is part of an approved PRD, include its output and dependency in `create-agent-tasks`.
