import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import { loadCatalog } from './catalog/load.js'
import { attachPrompts } from './prompts/register.js'
import { attachTools } from './tools/register.js'

const VERSION = '0.1.0'

const ROUTER_INSTRUCTIONS = `\
This MCP is a skill and MCP router. The host harness may also expose other \
MCP servers (issue trackers, git hosts, chat, design tools).

REQUIRED: Before using another MCP to write or make a consequential change, \
call list_skills, then get_skill for the matching workflow.

Routing hints:
  - Issue tracker create/edit → open-work-item
  - Issue tracker reads       → tracker MCP via the workflow skill
  - Pull requests             → ship-work-item / review-work-item
  - Chat posts                → standup-update (ask before posting)
  - Design files              → request-design
  - Product docs              → create-prd / clarify-prd
  - Which skill to pick       → help

This catalog ships workflows only. Do not invent org-specific field IDs, \
channels, or project keys — ask the user or use what the other MCP returns.`

export function createRouterServer(): McpServer {
  const catalog = loadCatalog()
  const server = new McpServer(
    {
      name: 'generic-agent-toolkit',
      version: VERSION
    },
    { instructions: ROUTER_INSTRUCTIONS }
  )

  attachTools(server, catalog)
  attachPrompts(server, catalog)
  return server
}
