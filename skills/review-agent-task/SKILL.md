---
name: review-agent-task
description: Review one completed agent task against its PRD requirements, task boundaries, acceptance criteria, and validation evidence. Use before dependent tasks continue.
user-invocable: true
---

# Review an Agent Task

Review the implementation, not just the completion summary.

## Inputs

Read:

- The source PRD
- The exact task brief
- Dependency handoffs
- The implementation diff or changed files
- Test and validation output

## Review

1. Verify every acceptance criterion with evidence.
2. Confirm the change stays inside the task boundary.
3. Check compatibility with the PRD and completed dependencies.
4. Look for missing tests, regressions, unsafe assumptions, and blockers for later tasks.
5. Re-run focused validation when practical.

## Verdict

Return one verdict:

- **Pass** — criteria are satisfied and dependent tasks may continue.
- **Revise** — list specific required changes, tied to criteria.
- **Blocked** — state the missing decision, dependency, or evidence.

Do not expand the PRD during review. Route product ambiguity through `grill-me`, then update the task plan if the answer changes downstream work.
