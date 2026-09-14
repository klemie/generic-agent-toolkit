import { z } from 'zod'

const NAME_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export const FrontmatterSchema = z.object({
  'allowed-tools': z.string().optional(),
  compatibility: z.string().max(500).optional(),
  description: z.string().min(1).max(1024),
  'disable-model-invocation': z.boolean().optional().default(false),
  license: z.string().optional(),
  metadata: z.record(z.string(), z.string()).optional(),
  name: z.string().min(1).max(64).regex(NAME_PATTERN),
  references: z.array(z.string().min(1)).optional().default([]),
  'user-invocable': z.boolean().optional().default(true)
})

export type Frontmatter = z.infer<typeof FrontmatterSchema>

const DIVIDER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/

export function splitSkillMarkdown(raw: string): { body: string; yamlBlock: string } {
  const match = DIVIDER.exec(raw)
  if (!match) {
    throw new Error('SKILL.md must start with YAML frontmatter between --- fences')
  }
  return { body: match[2] ?? '', yamlBlock: match[1] ?? '' }
}
