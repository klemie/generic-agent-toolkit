export type SkillRecord = {
  allowedTools?: string
  body: string
  compatibility?: string
  description: string
  disableModelInvocation: boolean
  extras: Record<string, string>
  license?: string
  metadata?: Record<string, string>
  name: string
  pointers: string[]
  userInvocable: boolean
}

export type SkillCatalog = Map<string, SkillRecord>
