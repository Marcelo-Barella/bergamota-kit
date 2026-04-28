# bergamota-kit

A curated collection of skills for deliberate planning, rigorous debugging, and disciplined execution in Cursor agent workflows.

## What's inside

`bergamota-kit` bundles 10 skills the author uses daily to drive Cursor agents through planning, research, debugging, orchestration, and release work. Skills are loaded by Cursor on demand and invoked by the agent when the situation fits their trigger description.

## Design foundation (`@bergamota/design-tokens`)

Customer-facing SaaS design tokens (cream base, ink neutrals, single terracotta accent) with a Tailwind CSS v3+ preset live under [`packages/design-tokens`](./packages/design-tokens). Full tables, accent rules, and the 8px spacing grid are in [`docs/design-tokens.md`](./docs/design-tokens.md).

## Install

### From the Cursor Marketplace

1. Open Cursor Settings.
2. Go to Plugins (or Marketplace).
3. Search for `bergamota-kit` and click Install.
4. Reload the window when prompted.

### Local development

Clone the repo and symlink it into Cursor's local plugins directory:

```bash
git clone https://github.com/Marcelo-Barella/bergamota-kit.git
ln -s "$(pwd)/bergamota-kit" ~/.cursor/plugins/local/bergamota-kit
```

Then in Cursor run Command Palette → "Developer: Reload Window" and check Settings → Skills for the 10 entries below.

## Skills catalog

| Skill | Description |
|---|---|
| `planning` | Researches requirements when needed, then plans, organizes, and structures content without coding or implementation. Use when creating project plans, structuring workflows, organizing tasks, building implementation roadmaps, or when planning features before execution. |
| `debugger` | Systematic debugging workflow for code analysis, root cause investigation, and solution validation. Use when debugging errors, investigating bugs, analyzing stack traces, fixing runtime issues, or troubleshooting code problems. |
| `prompt` | Designs, analyzes, and optimizes prompts for AI models, agentic systems, and automation pipelines. Use when creating prompts, refining prompt structure, optimizing AI interactions, designing agent personas, or improving prompt effectiveness. |
| `light-prompt` | Converts raw user input into a tight, structured prompt capped at about 200 tokens to reduce model drift. Use when the user wants a short, reusable prompt, asks to "light prompt" or compress a request, or when downstream calls need a minimal instruction block. |
| `unravel` | Build a deterministic end-to-end flow plan file for a user objective using the /unravel command. Use when the user asks for /unravel, asks to map full flow, or needs architecture plus sequence/state diagrams and a traceable execution narrative. |
| `orchestrator` | Orchestrates complex workflows by coordinating sequential phases and delegating to specialized subagents. Use when coordinating multi-phase workflows, task complexity assessment, or managing subagent coordination. |
| `research` | Conducts thorough research and analysis of task requirements before implementation. Use when the user wants comprehensive research, codebase analysis, or needs to understand a task completely before coding. |
| `uiux` | Professional UI/UX-focused agent specializing in modern interface design, user experience optimization, design system adherence, and accessibility standards. Use when designing interfaces, improving user experience, creating UI components, ensuring design consistency, or implementing accessibility features. |
| `npm-package-maintenance` | Maintains npm libraries: audits uncommitted work for security and conventions, splits changes into logical commits and semver releases, updates changelogs and package.json version, then pushes. Use when releasing or maintaining an npm package, publishing a library, or the user asks for version bumps, changelog updates, or structured commits before push. |
| `horse-around` | Coordinates multiple AI agents working in parallel on complex projects using file-based communication. Use when the user wants to coordinate parallel AI sessions, manage multi-chat workflows, set up task coordination systems, or when they mention "parallel AI", "swarm commander", "multiple chats", or "horsin around". |

## License

MIT. See [LICENSE](./LICENSE).

## Author

Marcelo Barella (Bergamota).
