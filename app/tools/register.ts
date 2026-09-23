import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import type { SkillCatalog } from '../catalog/types.js'
import { registerCatalogTool } from './catalog.js'
import { registerRetrieveTool } from './retrieve.js'

export function attachTools(server: McpServer, catalog: SkillCatalog): void {
  registerCatalogTool(server, catalog)
  registerRetrieveTool(server, catalog)
}
