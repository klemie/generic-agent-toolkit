---
name: create-agent-tasks
description: Turn a product requirements document (PRD) into small, ordered tasks that coding agents can execute independently. Use after a PRD is complete and before implementation starts.
user-invocable: true
---

# Create Agent Tasks

Convert an approved PRD into an execution plan for agents.

## Before creating tasks

1. Read the entire PRD and inspect the relevant codebase.
2. Resolve material gaps with `grill-me`. Do not hide open product decisions inside implementation tasks.
3. Identify dependencies, shared files, and work that can run in parallel.

## Task format

Give every task:

- A stable ID and action-oriented title
- One objective
- Relevant PRD requirements
- Expected files or system areas
- Dependencies on other task IDs
- Concrete acceptance criteria
- Required validation (tests, type checks, or manual checks)
- A short completion handoff for the next agent

## Task boundaries

- Each task should be executable in one focused agent session.
- Prefer vertical, testable outcomes over layer-only work.
- Separate tasks only when they can be reviewed independently.
- Do not create a task for an unresolved decision.
- Mark tasks that can safely run in parallel.

## Output

Start with a dependency-ordered task list. Then provide each full task brief.

Ask the user to confirm the plan before agents begin. After confirmation, hand the first unblocked task to `implement-agent-task`.
