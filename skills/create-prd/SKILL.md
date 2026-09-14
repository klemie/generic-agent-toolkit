---
name: create-prd
description: Workflow to draft a product requirements document. Use when the user wants a PRD or spec from scratch.
user-invocable: true
---

# Create a PRD

## Phases

1. Scope — audience, problem, non-goals. If the brief is thin, load `clarify-prd` instead.
2. Confirm — `get_skill("challenge-assumptions")` before drafting at length.
3. Draft — problem, users, requirements, success metrics, rollout, open questions.
4. Handoff — ask whether to file work with `open-work-item`.

Do not create tracker issues in this skill. Point at `open-work-item` when the user wants tickets.
