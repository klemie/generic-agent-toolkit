---
name: triage-bug
description: Workflow to classify a bug report, check duplicates, and file or reject it. Use on incoming defects.
user-invocable: true
---

# Triage a bug

1. Restate impact, expected vs actual, and repro.
2. Search the tracker MCP for duplicates.
3. If it is not a bug, say so and stop (or route to `triage-feature`).
4. Confirm with `challenge-assumptions` when severity or product area is unclear.
5. File with `open-work-item`. Do not file silently.
