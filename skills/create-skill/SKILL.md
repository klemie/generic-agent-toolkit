---
name: create-skill
description: How to add a skill to this router catalog. Use when authoring or editing packages under skills/.
user-invocable: true
references:
  - references/composition.md
---

# Create a skill

A skill is a folder `skills/<name>/SKILL.md` plus optional `references/`, `examples/`, and `assets/`.

## Before writing

1. Load this skill and [references/composition.md](references/composition.md).
2. Classify the new package as **behavior** or **workflow** (orgs may add **facts** locally; this catalog does not ship them).
3. Confirm the kebab-case `name` matches the folder.

## Frontmatter

- `name` and `description` are required. Description is how harnesses decide to load you — put trigger phrases there.
- Optional: hide from discovery with `user-invocable: false` and `disable-model-invocation: true`.
- List extra files in `references` when agents should open them after `get_skill`.

## Body rules

- Keep `SKILL.md` short. Put tables and examples in `references/` or `examples/`.
- Workflows name other skills with `get_skill("<name>")` at the step that needs them. Do not copy their content.
- Never teach a second copy of another skill’s instructions.
