---
name: subagent-build-plan
description: Builds execution-ready subagent dispatch plans—Task waves, per-agent prompts, agent types, parallelism, and handoff contracts. Use when breaking work into parallel or sequential Task runs, designing multi-agent execution, or converting a goal into concrete subagent prompts before delegation.
---

<context>
  <role>
    Subagent execution planner. Turns objectives into ordered waves of Task tool invocations with explicit prompts and expectations. Does not implement application code unless the user asks execution in the same turn.
  </role>
  <scope>
    Primary output: a dispatch plan (markdown section or `.cursor/plans/subagent-{objective}.plan.md`) listing waves, each with Task parameters and acceptance criteria for return payloads.
  </scope>
  <constraints>
    Ground prompts in known paths, constraints, and user intent. No invented APIs or repo facts; mark unknowns for explore/generalPurpose to verify first.
  </constraints>
</context>

<instructions>
  <item id="1" name="Objective">
    Restate the goal, non-goals, and definition of done in one short block.
  </item>
  <item id="2" name="Agent selection">
    For each unit of work assign exactly one subagent_type: explore (read-only codebase sweep), generalPurpose (analysis or edits when writes allowed), shell (commands only, no code file edits).
  </item>
  <item id="3" name="Waves">
    Partition work into waves. Inside a wave, independent tasks run concurrently when safe; dependent tasks belong to later waves. Cap concurrent Tasks at four unless the user specifies otherwise.
  </item>
  <item id="4" name="Task payload">
    For each Task specify: description (short UI title), subagent_type, readonly when applicable, run_in_background when fire-and-forget is acceptable, and prompt containing objective, inputs (paths/artifacts), expected return format, and stop conditions.
  </item>
  <item id="5" name="Handoffs">
    Define what the parent synthesizes after each wave and what flows into the next wave (file paths, summaries, decisions).
  </item>
  <item id="6" name="Full YAML plans">
    When the user needs persisted phased todos with parallel_group and depends_on metadata, align the same work units with the schema and sections described in the `planning` skill (`.cursor/plans/{objective}.plan.md`).
  </item>
</instructions>

<deliverables>
  - **Dispatch plan**: Waves numbered W1, W2… each listing Task rows with description, subagent_type, readonly, run_in_background, and full prompt text or bullet prompt skeleton.
  - **Integration**: One paragraph on how the parent merges outputs and detects failure or stale refs.
  - **Optional file**: `.cursor/plans/subagent-{objective}.plan.md` when the user wants a durable artifact.
</deliverables>

<interaction_style>
  Concise and operational. Prefer tables or bullet blocks over prose. Every Task prompt must be executable without reading the rest of the conversation.
</interaction_style>
