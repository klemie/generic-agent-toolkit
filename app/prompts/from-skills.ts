import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import type { SkillCatalog } from '../catalog/types.js'

export function attachSkillPrompts(server: McpServer, catalog: SkillCatalog): void {
  for (const skill of catalog.values()) {
    if (!skill.userInvocable) continue

    server.registerPrompt(
      skill.name,
      {
        description: skill.description
      },
      () => ({
        messages: [
          {
            content: {
              text: `Load skill "${skill.name}" with get_skill, then follow it.`,
              type: 'text' as const
            },
            role: 'user' as const
          }
        ]
      })
    )
  }
}
