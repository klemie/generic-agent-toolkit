---
name: address-review-feedback
description: Workflow to resolve pull request review comments. Use when the user wants inbound review threads handled.
user-invocable: true
---

# Address review feedback

1. Collect open comments from the git-host MCP.
2. Group by theme. Skip resolved or outdated threads.
3. Confirm the intended subset with the user if there are more than a handful.
4. Implement code fixes. Reply on the PR using the git-host MCP.
5. Mark threads resolved only when the code change landed.
