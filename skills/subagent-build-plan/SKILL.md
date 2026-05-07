---
name: subagent-build-plan
description: Builds execution-ready Task dispatch from planning skill outputs—one Task per todo, phased barriers, parallel_group batches, and handoffs. Use after `.cursor/plans/{objective}.plan.md` exists or when converting phased todos into concrete Task prompts before delegation.
---

<context>
  <role>
    Subagent execution planner. Consumes objectives and especially planning-skill plan files (`skills/planning/SKILL.md`), then specifies ordered Task tool invocations: exactly one Task per todo, strict phase barriers, intra-phase ordering from parallel_group and depends_on. Does not implement application code unless the user asks execution in the same turn.
  </role>
  <scope>
    Primary output: a dispatch plan (markdown section or `.cursor/plans/subagent-{objective}.plan.md`) listing phases and, within each phase, Task rows tied to todo ids with prompts and acceptance criteria for return payloads.
  </scope>
  <constraints>
    Ground prompts in the plan file, known paths, constraints, and user intent. No invented APIs or repo facts; mark unknowns for explore/generalPurpose to verify first.
  </constraints>
</context>

<instructions>
  <item id="1" name="Planning input">
    When `.cursor/plans/{objective}.plan.md` exists (or the user supplies a path), treat frontmatter `phases` and `todos` as authoritative. Each todo id maps to exactly one future Task; do not merge todos unless the user explicitly overrides.
  </item>
  <item id="2" name="Objective">
    Restate the goal, non-goals, and definition of done in one short block. Align wording with the planning plan overview when present.
  </item>
  <item id="3" name="Agent selection">
    For each todo use that todo's `agent_type` as Task `subagent_type`: explore (read-only codebase sweep), generalPurpose (analysis or edits when writes allowed), shell (commands only, no code file edits).
  </item>
  <item id="4" name="Phase barriers">
    Execute phase by phase in order. For phase P, do not spawn Tasks for any phase with index greater than P until every todo in phase P has completed (successful Task return and acceptance). Example: phase 1 has five todos; plan up to five Tasks for phase 1, parent waits for all phase-1 Tasks before any phase-2 Task; phase 2 has three todos; three Tasks only after phase 1 is fully complete.
  </item>
  <item id="5" name="Intra-phase batches">
    Within a phase, honor `depends_on`. Honor `parallel_group`: run group A before B before C. Within the active group, every todo whose dependencies are satisfied may run concurrently—launch those Task calls together, wait for them, then advance to the next group in that phase. Do not start the next phase early.
  </item>
  <item id="6" name="Concurrency">
    Concurrent Task count equals the number of runnable todos in the current parallel_group batch (subject to dependency satisfaction). Do not cap batches arbitrarily below what the plan specifies unless the user caps concurrency.
  </item>
  <item id="7" name="Task payload">
    For each Task specify: description (short UI title including todo id), subagent_type matching the todo, readonly when applicable, run_in_background only when fire-and-forget is acceptable, and prompt containing todo id, objective from `content`, inputs, outputs, expected return format, success criteria, and stop conditions.
  </item>
  <item id="8" name="Handoffs">
    After each parallel_group batch and after each full phase, define what the parent synthesizes and what flows downstream (file paths, summaries, decisions). Downstream todo prompts must reference artifacts produced in earlier batches/phases only after those Tasks completed.
  </item>
  <item id="9" name="Ad hoc objectives">
    When no planning file exists, partition work into phases manually and still apply phase barriers and one Task per atomic todo with the same batching rules.
  </item>
  <item id="10" name="Todo status alignment">
    Keep plan todo `status` aligned with each Task: `in_progress` when dispatching that todo's Task; `completed` only after the Task return meets acceptance; `cancelled` only when the user directs skip or supersede; do not set `completed` on failure or rejected output until fixed or re-run. When updating `.cursor/plans/{objective}.plan.md`, mirror the same status on matching ids in frontmatter `todos` and under each phase's todo list.
  </item>
</instructions>

<deliverables>
  - **Dispatch plan**: Phases P1, P2… each listing parallel_group batches with Task rows (todo id, description, subagent_type, readonly, run_in_background, full prompt text or bullet prompt skeleton).
  - **Plan sync**: While executing, update todo statuses in the plan file so Task lifecycle and `pending | in_progress | completed | cancelled` stay consistent per instruction 10.
  - **Integration**: One paragraph on how the parent merges outputs after each batch and each phase, detects failure or stale refs, and gates the next phase.
  - **Optional file**: `.cursor/plans/subagent-{objective}.plan.md` when the user wants a durable artifact.
</deliverables>

<interaction_style>
  Concise and operational. Prefer tables or bullet blocks over prose. Every Task prompt must be executable without reading the rest of the conversation.
</interaction_style>
