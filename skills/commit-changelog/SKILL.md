---
name: commit-changelog
description: Analyze git commits since the last run across workspace repositories and produce a structured changelog page in Notion. Tracks the last execution timestamp in a Notion control page. Use when the user asks to document recent commits, generate a changelog, summarize recent work, or capture development progress.
---

# Commit Changelog

Inspects commits since the last execution, extracts meaningful changes, and publishes a structured changelog page to Notion. Tracks run history via a Notion control page.

**All Notion page titles, headings, labels, and descriptions MUST be written in Brazilian Portuguese (PT-BR).**

## Goal

Produce a concise, high-signal changelog that captures what changed, why it changed, and what areas were affected. The output is a Notion page — not a raw git log dump.

## Timestamp Control

A Notion page titled **"Changelog Controle"** stores the last run timestamp as an ISO 8601 string (e.g. `2026-03-04T14:30:00-03:00`) in its body content.

### Reading the last run timestamp

1. Search Notion for a page titled **"Changelog Controle"**.
2. If found, read its content and extract the ISO 8601 timestamp from the first line of the page body.
3. If not found or the page is empty, fall back to `24 hours ago` and note this in the changelog output.

### Updating the timestamp after a successful run

1. After the changelog page is created successfully, update the **"Changelog Controle"** page body with the current timestamp in ISO 8601 format (use the output of `date --iso-8601=seconds`).
2. If the control page does not exist, create it titled **"Changelog Controle"** with the current timestamp as its only content.

## Investigation Strategy

1. **Resolve time range**: Read the last run timestamp from Notion (see above). Store it in a variable `SINCE_TS`. If unavailable, set `SINCE_TS` to `24 hours ago`.
2. **Collect commits**: Run `git log --since="$SINCE_TS" --format="%H|%an|%ai|%s" --all` in each workspace repo.
3. **Read diffs**: For each commit, run `git show --stat <hash>` to understand scope, then `git show <hash>` for commits that touch non-trivial logic.
4. **Group by area**: Cluster commits by feature, module, or component — not by author or timestamp.
5. **Extract intent**: For each group, determine the *why* behind the changes. Use commit messages, diff context, and branch names.
6. **Identify highlights**: Flag breaking changes, new features, bug fixes, and infrastructure shifts.

## Content Structure

All content in the Notion page MUST be in PT-BR. Use this template:

```markdown
# Registro de Alteracoes — {YYYY-MM-DD}

> Commits desde: {SINCE_TS} ({duracao legivel, ex: "~3 dias"})

## Destaques
- As 2-3 alteracoes de maior impacto

## Alteracoes por Area

### {Nome da Area/Modulo}
- **{tipo-alteracao}**: {descricao} ({hash curto do commit})
  - Arquivos: {principais arquivos alterados}
  - Autor: {nome}

### {Nome da Area/Modulo}
...

## Estatisticas
- Commits: {quantidade}
- Arquivos alterados: {quantidade}
- Contribuidores: {lista}
- Periodo: {SINCE_TS} ate {NOW_TS}

## Repositorios
- {nome-repo} ({branch}): {quantidade} commits
```

### Tipos de Alteracao

| Tag | Quando usar |
|-----|-------------|
| **feat** | Nova funcionalidade ou comportamento |
| **fix** | Correcao de bug |
| **refactor** | Mudanca estrutural sem alterar comportamento |
| **chore** | Dependencias, config, CI, ferramentas |
| **docs** | Apenas documentacao |
| **perf** | Melhoria de performance |
| **breaking** | Mudanca incompativel em API ou comportamento |

## Quality Bar

- Every entry must describe *what changed* and *why* — not just file names.
- Squash trivial commits (typos, formatting) into a single line item per area.
- If a commit message is vague, read the diff to infer intent.
- Do not include merge commits unless they carry meaningful context.
- Write all descriptions in PT-BR regardless of the original commit message language.

## Destination in Notion

1. Search Notion for an existing changelog database or wiki section.
2. If a changelog database exists, create a new row with properties: Titulo, Data, Repositorios, Contribuidores.
3. If no database exists, create a standalone page titled "Registro de Alteracoes — {date}" under the most relevant wiki or project page.
4. Link from any relevant project hub pages.

## Execution Order

1. Read timestamp from **Changelog Controle** page in Notion.
2. Collect and analyze commits using that timestamp.
3. Build and publish the changelog page to Notion.
4. Write the current timestamp to the **Changelog Controle** page.

If step 3 fails, do NOT update the control timestamp — this ensures the next run picks up the same commits.

## Safety Rules

- Read-only git operations only. Never modify commits, branches, or working tree.
- If no commits exist since the last run, post a short "Sem alteracoes no periodo" summary and still update the control timestamp.
- Skip binary files and generated lock files when analyzing diffs.

## Output

The final Notion page must include:
- Grouped changes with clear intent descriptions in PT-BR
- Commit hashes linking back to the relevant context
- A stats section for quick scanning
- Date range and repository metadata for filtering
- The time range covered (since last run timestamp to now)
