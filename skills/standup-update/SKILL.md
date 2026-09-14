---
name: standup-update
description: Workflow to produce a daily standup from tracker activity. Use for yesterday / today / blockers summaries.
user-invocable: true
---

# Standup update

1. Ask the time window and which people or boards to include.
2. Query the tracker MCP for done, in-progress, and blocked items.
3. Optionally scan the git-host MCP for merged PRs in the same window.
4. Write yesterday / today / blockers. Keep it short.
5. If posting to chat, use the chat MCP. Do not post without asking. Ask which channel if unknown.
