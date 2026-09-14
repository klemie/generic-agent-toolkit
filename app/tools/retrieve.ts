import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

import type { SkillCatalog } from '../catalog/types.js'

export function registerRetrieveTool(server: McpServer, catalog: SkillCatalog): void {
  server.registerTool(
    'get_skill',
    {
      description:
        'Load one skill by name, including SKILL.md and extra markdown. Call list_skills first. Follow pointers when you need detail beyond the main body.',
      inputSchema: {
        skill_name: z.string().describe('Skill name as returned by list_skills')
      }
    },
    ({ skill_name }) => {
      const skill = catalog.get(skill_name)
      if (!skill) {
        const names = [...catalog.keys()].join(', ')
        return {
          content: [
            {
              text: `Unknown skill "${skill_name}". Catalog: ${names}`,
              type: 'text' as const
            }
          ]
        }
      }

      const payload = {
        ...skill.extras,
        'SKILL.md': skill.body,
        name: skill.name,
        pointers: skill.pointers,
        summary: skill.description
      }

      return {
        content: [{ text: JSON.stringify(payload, null, 2), type: 'text' as const }]
      }
    }
  )
}
