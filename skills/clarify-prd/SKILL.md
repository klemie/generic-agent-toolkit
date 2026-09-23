---
name: clarify-prd
description: Workflow to interrogate a vague product idea until it is spec-ready. Use when a PRD or feature brief is underspecified.
user-invocable: true
references:
  - references/taxonomy.md
---

# Clarify a PRD

1. Load [references/taxonomy.md](references/taxonomy.md) for the question buckets.
2. Use `grill-me` for the interview.
3. Stop when each bucket has an answer or an explicit “unknown”.
4. Offer `create-prd` to write the document. After approval, use `create-agent-tasks` to prepare implementation.
