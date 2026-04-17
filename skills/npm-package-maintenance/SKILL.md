---
name: npm-package-maintenance
description: >-
  Maintains npm libraries: audits uncommitted work for security and conventions,
  splits changes into logical commits and semver releases, updates changelogs and
  package.json version, then pushes. Use when releasing or maintaining an npm
  package, publishing a library, or the user asks for version bumps, changelog
  updates, or structured commits before push.
---

# npm package maintenance

## Preconditions

- Run only in a git repository whose root contains `package.json` (npm package).
- Respect user and workspace rules: do not `git commit` or `git push` without explicit user permission unless the user has clearly authorized this full workflow in the same request.

## Workflow (order matters)

### 1. Uncommitted change review (gate)

Inspect working tree and index (`git status`, `git diff`, staged diff). Stop the workflow immediately and report to the user if any of the following appear:

- Build or test failures (run project checks if defined, e.g. `npm test`, `npm run lint`).
- Suspected secrets, credentials, or tokens in diff.
- Known-vulnerable dependency patterns in changed files (flag for `npm audit` follow-up).
- Changes that break stated project patterns (commit style, file layout, export surface, TypeScript/build config) when those patterns are documented or obvious from the repo.

Output a short verdict: **proceed** or **blocked** with reasons. If blocked, do not continue to steps 2–5.

### 2. Commits and versioning scope

If the gate passes:

- Group changes into separate commits by feature or concern (e.g. fix vs feat vs chore). Prefer [Conventional Commits](https://www.conventionalcommits.org/) when the repo already uses them.
- If multiple independent user-facing changes ship together, plan separate semver bumps or separate release branches only when the repo’s practice requires it; otherwise one release with one version bump is acceptable.

### 3. Changelog

If the repo has `CHANGELOG.md`, `CHANGELOG`, `History.md`, or package-specific changelog files under common locations, update every applicable file for the release:

- Add entries under the correct version section (or create the section after the version is chosen in step 4).
- Match existing format (Keep a Changelog, simple lists, etc.).

If there is no changelog, do not create one unless the user asks.

### 4. Version bump

- Read `package.json` `version` and any lockfile policy the repo uses.
- Decide bump using semver and the nature of commits: **patch** (fixes), **minor** (backward-compatible features), **major** (breaking changes). Align with repo tags and `npm version` usage if present.
- Update `package.json` version (and any other version fields the project maintains in sync). Run lockfile updates only if the project normally commits lock changes with releases.

### 5. Push

- After commits exist and the user has explicitly approved commit/push (or authorized this workflow): `git push` to the appropriate remote and branch. If the user has not approved, stop after preparing commits and list exact commands for them to run.

## Checklist

```
- [ ] Step 1: Review diffs; security and pattern check; gate pass/fail
- [ ] Step 2: Split into logical commit(s); align with versioning plan
- [ ] Step 3: Update existing changelog file(s)
- [ ] Step 4: Bump package version per semver
- [ ] Step 5: Push (only with permission) or hand off commands
```

## Notes

- Prefer `npm audit` for dependency risk when `package.json` / lockfiles changed materially.
- If the package is a monorepo workspace, apply the same steps per package or follow the repo’s release tool (changesets, lerna, etc.) when documented.
