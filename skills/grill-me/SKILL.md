---
name: challenge-assumptions
description: Behavior skill. Use before a consequential write when the plan is ambiguous, risky, or the user has not confirmed. Question format only — no platform field IDs.
user-invocable: true
---

# Challenge assumptions

Use this when a workflow says to confirm with the user. Do not mention tracker field IDs, repo names, or channel lists here.

## Cycle

1. State the proposed action in one short paragraph.
2. Ask the smallest set of questions that would change the plan (cap at five).
3. Wait for answers. Do not write to another MCP in the same turn.
4. Repeat until the user confirms or aborts.

## Question style

- One decision per question.
- Offer concrete options when you already know the enum.
- If the user already answered, do not re-ask.

Workflows name this skill at the confirm phase. They call the other MCP at the write phase.
