import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import type { SkillCatalog } from '../catalog/types.js'
import { attachSkillPrompts } from './from-skills.js'

export function attachPrompts(server: McpServer, catalog: SkillCatalog): void {
  attachSkillPrompts(server, catalog)
}
