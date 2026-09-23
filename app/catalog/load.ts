import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

import { parse as parseYaml } from 'yaml'

import { FrontmatterSchema, splitSkillMarkdown } from './parse.js'
import type { SkillCatalog, SkillRecord } from './types.js'

const here = dirname(fileURLToPath(import.meta.url))
const SKILLS_ROOT = join(here, '../../skills')

function collectMarkdown(dir: string, root: string, acc: Record<string, string>): void {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const info = statSync(full)
    if (info.isDirectory()) {
      collectMarkdown(full, root, acc)
      continue
    }
    if (!entry.endsWith('.md')) continue
    const rel = relative(root, full).replaceAll('\\', '/')
    if (rel === 'SKILL.md') continue
    acc[rel] = readFileSync(full, 'utf8')
  }
}

function readPackage(folder: string): SkillRecord {
  const skillFile = join(folder, 'SKILL.md')
  const { body, yamlBlock } = splitSkillMarkdown(readFileSync(skillFile, 'utf8'))
  const parsed = FrontmatterSchema.parse(parseYaml(yamlBlock))
  const extras: Record<string, string> = {}
  collectMarkdown(folder, folder, extras)

  return {
    allowedTools: parsed['allowed-tools'],
    body: body.trimStart(),
    compatibility: parsed.compatibility,
    description: parsed.description,
    disableModelInvocation: parsed['disable-model-invocation'],
    extras,
    license: parsed.license,
    metadata: parsed.metadata,
    name: parsed.name,
    pointers: parsed.references,
    userInvocable: parsed['user-invocable']
  }
}

export function loadCatalog(): SkillCatalog {
  const catalog: SkillCatalog = new Map()

  for (const name of readdirSync(SKILLS_ROOT)) {
    const folder = join(SKILLS_ROOT, name)
    if (!statSync(folder).isDirectory()) continue
    if (!existsSync(join(folder, 'SKILL.md'))) continue
    const record = readPackage(folder)
    if (record.name !== name) {
      throw new Error(`Folder skills/${name} does not match frontmatter name "${record.name}"`)
    }
    catalog.set(record.name, record)
  }

  return catalog
}
