---
name: create-prd
description: Workflow to draft a product requirements document. Use when the user wants a PRD or spec from scratch.
user-invocable: true
---

# Create a PRD

## Phases

1. Scope — audience, problem, non-goals. If the brief is thin, load `clarify-prd` instead.
2. Confirm — `get_skill("grill-me")` before drafting at length.
3. Draft — problem, users, requirements, success metrics, rollout, open questions.
4. Handoff — ask whether to turn the approved PRD into executable work with `create-agent-tasks`.

Do not hide implementation planning inside the PRD. Point at `create-agent-tasks` when the user is ready to build.
