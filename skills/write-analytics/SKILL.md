---
name: write-analytics
description: Workflow and naming rules for product analytics events. Use when adding or renaming tracking events.
user-invocable: true
---

# Write analytics

This catalog does not send events. It governs names so agents stay consistent.

1. Prefer existing event names over new ones. Search the codebase and docs.
2. Name object + action in past tense or the org’s documented tense — stay consistent inside one codebase.
3. Properties are snake_case or the repo’s existing style. No PII.
4. Confirm with the user before adding a new top-level event.
5. Point implementers at the analytics SDK already in the repo. Do not invent a vendor.
