---
name: implement-agent-task
description: Execute one agent-ready task derived from a PRD. Use when an agent receives a task brief with an objective, dependencies, acceptance criteria, and validation steps.
user-invocable: true
---

# Implement an Agent Task

Work on one confirmed task at a time.

## Workflow

1. Read the task brief, source PRD, and outputs from dependency tasks.
2. Inspect the codebase before asking questions. Use `grill-me` only for ambiguity that changes the result.
3. Restate the objective, acceptance criteria, and boundaries.
4. Implement only the task's scope.
5. Run the required validation and relevant repository checks.
6. Compare the result with every acceptance criterion.

## Completion handoff

Report:

- What changed
- Files changed
- Validation run and results
- Acceptance criteria satisfied
- Any remaining risk or blocker
- Information the next dependent task needs

Do not claim completion when validation failed or an acceptance criterion remains unmet. Hand the result to `review-agent-task`.
