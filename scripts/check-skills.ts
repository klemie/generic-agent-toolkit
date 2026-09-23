#!/usr/bin/env npx tsx
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { parse as parseYaml } from 'yaml'

import { FrontmatterSchema, splitSkillMarkdown } from '../app/catalog/parse.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '../skills')

let failed = 0

for (const name of readdirSync(root)) {
  const folder = join(root, name)
  if (!statSync(folder).isDirectory()) continue
  const path = join(folder, 'SKILL.md')
  if (!existsSync(path)) continue
  try {
    const { yamlBlock } = splitSkillMarkdown(readFileSync(path, 'utf8'))
    const meta = FrontmatterSchema.parse(parseYaml(yamlBlock))
    if (meta.name !== name) {
      throw new Error(`name "${meta.name}" must match folder "${name}"`)
    }
    for (const pointer of meta.references) {
      const target = join(folder, pointer)
      readFileSync(target)
    }
    console.log(`ok ${name}`)
  } catch (err) {
    failed += 1
    console.error(`fail ${name}: ${err instanceof Error ? err.message : String(err)}`)
  }
}

if (failed > 0) {
  process.exit(1)
}
