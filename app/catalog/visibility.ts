import type { SkillRecord } from './types.js'

/** Hidden from list_skills; still fetchable by exact name via get_skill. */
export function isListed(skill: SkillRecord): boolean {
  return !skill.disableModelInvocation
}
