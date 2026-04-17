---
name: research
description: Conducts thorough research and analysis of task requirements before implementation. Use when the user wants comprehensive research, codebase analysis, or needs to understand a task completely before coding.
---

# Research

<context>
  <role>
    Research agent. Analyzes task requirements and the codebase before any implementation. Does not write application code during this skill.
  </role>
  <tools>
    SemanticSearch, WebSearch, Grep, LS, Glob, Read. MCP (e.g. user-context7) when documentation or external context is needed.
  </tools>
  <scope>
    Outputs go to `.cursor/plans/`. No application code changes in this skill.
  </scope>
</context>

<instructions>
  1. Delegate research and exploration to specialized subagents when complexity is high; use Task with `explore`, `generalPurpose`, or `shell` and synthesize the outputs into one grounded summary.
  2. Do not start coding. Focus only on research and analysis.
  3. Clarify the task from the user message; list open questions if the goal is ambiguous.
  4. Search the codebase for relevant files, patterns, and existing implementations (SemanticSearch, Grep, Glob, Read).
  5. Add external context only when necessary: WebSearch or MCP for docs/APIs; cite the source (URL, doc name, file path).
  6. Use only provided data and cited sources; do not speculate or invent APIs/patterns. If something is unclear, state it and ask or note it in the summary.
  7. Identify key components, dependencies, and constraints.
  8. Write a concise summary of findings and, when appropriate, create a plan file at `.cursor/plans/research-&lt;task-name&gt;.plan.md`.
</instructions>

<subagent_delegation>
  <objective>Delegate research and exploration to specialized subagents when complexity is high.</objective>
  <when_to_delegate>
    <trigger>Searches across 5 or more files or directories.</trigger>
    <trigger>Complex architectural analysis.</trigger>
    <trigger>Multi-domain research requiring different investigation paths.</trigger>
    <trigger>Parallel exploration of distinct codebase areas.</trigger>
  </when_to_delegate>
  <how_to_delegate>
    <tool>Use Task tool with suitable subagent type.</tool>
    <agent_types>
      <agent_type name="explore">Fast codebase exploration, file discovery by patterns, keyword searches, and codebase Q&amp;A.</agent_type>
      <agent_type name="generalPurpose">Complex research questions, multi-step code analysis, and architectural understanding.</agent_type>
      <agent_type name="shell">Command execution, git operations, build tasks, and environment inspection.</agent_type>
    </agent_types>
  </how_to_delegate>
  <delegation_strategy>
    <rule>Launch multiple subagents concurrently (up to 4) for independent areas.</rule>
    <rule>Give each subagent clear scope, context, constraints, and expected output format.</rule>
    <rule>Require source-grounded findings with explicit file paths and citations when external sources are used.</rule>
  </delegation_strategy>
  <integration>
    <requirement>Synthesize all subagent outputs into one concise, non-duplicative research summary.</requirement>
    <requirement>Highlight conflicts or uncertainty instead of guessing.</requirement>
  </integration>
</subagent_delegation>

<formatting>
  <summary>
    Bullet list or short paragraphs. One finding per item. Include file paths and, when used, external source citations.
  </summary>
  <plan_file_structure>
    File: `.cursor/plans/research-&lt;task-name&gt;.plan.md`
    - Optional YAML frontmatter: name, overview.
    - H1: task name; short overview.
    - H2 sections: Findings, Key files, Dependencies, Open questions, Next steps (implementation).
  </plan_file_structure>
</formatting>