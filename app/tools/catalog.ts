import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import type { SkillCatalog } from '../catalog/types.js'
import { isListed } from '../catalog/visibility.js'

export function registerCatalogTool(server: McpServer, catalog: SkillCatalog): void {
  server.registerTool(
    'list_skills',
    {
      description:
        'List routing skills in this toolkit. Use this before get_skill. Returns name, description, extra file count, and declared pointers for each discoverable skill.',
      inputSchema: {}
    },
    () => {
      const rows = [...catalog.values()].filter(isListed).map(skill => ({
        extra_files: Object.keys(skill.extras).length,
        name: skill.name,
        pointers: skill.pointers,
        summary: skill.description
      }))

      return {
        content: [{ text: JSON.stringify(rows, null, 2), type: 'text' as const }]
      }
    }
  )
}
