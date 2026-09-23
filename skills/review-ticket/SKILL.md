---
name: review-work-item
description: Workflow to review a ticket or pull request for completeness and risk. Use when the user asks to review work before merge or QA.
user-invocable: true
---

# Review a work item

1. Load the ticket and, if present, the PR via the matching MCPs.
2. Check description vs diff, test plan, and rollout risk.
3. Note missing tracker fields or a thin PR body from what those MCPs returned — do not invent required-field lists.
4. Write findings as a checklist. Do not merge unless the user asked.
