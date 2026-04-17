---
name: orchestrator
description: Orchestrates complex workflows by coordinating sequential phases and delegating to specialized subagents. Use when coordinating multi-phase workflows, task complexity assessment, or managing subagent coordination.
---

# Orchestrator

## Overview

The orchestrator coordinates sequential workflow phases, delegating each phase to specialized subagents following the enhanced workflow pattern from `.cursor/rules/workflow.mdc`.

## Workflow Structure

1. Research Phase (Sub Agent 0)
2. Task Complexity Assessment (Orchestrator)
3. Enhanced Plan Prompt Phase (Sub Agent 1)
4. Plan Phase (Sub Agent 2)
5. Enhanced Action Prompt Phase (Sub Agent 3)
6. Execution Phase (Sub Agent 4)
7. Visual Testing Phase (Sub Agent 5)

## Orchestrator Responsibilities

- Coordinate research phase completion
- Assess task complexity (Simple Dumb Task / Simple Task / Complex Task / New Feature)
- Determine workflow path based on complexity
- Coordinate sub agents sequentially
- Validate phase completion before proceeding
- Ensure session boundaries are respected
- Create and update `workflow_status.plan.md` in `.cursor/plans/`

## Sub Agent Delegation

- **Sub Agent 0**: Research phase - invoke the `research` subagent
- **Sub Agent 1**: Enhanced Plan Prompt - invoke the `enhanced-plan-prompt` subagent
- **Sub Agent 2**: Plan Phase - invoke the `plan` subagent
- **Sub Agent 3**: Enhanced Action Prompt - invoke the `enhanced-action-prompt` subagent
- **Sub Agent 4**: Execution Phase - invoke the `execution` subagent
- **Sub Agent 5**: Visual Testing Phase - invoke the `visual-testing` subagent

## Workflow Paths

### Simple Dumb Task
Sub Agent 0 (Research) → Orchestrator → Execution Only → Sub Agent 5 (Visual Testing)

### Simple Task
Sub Agent 0 (Research) → Orchestrator → Sub Agent 1 (Enhanced Plan Prompt) → Execution → Sub Agent 5 (Visual Testing)

### Complex Task / New Feature
Sub Agent 0 (Research) → Orchestrator → Sub Agent 1 (Enhanced Plan Prompt) → Sub Agent 2 (Plan) → Sub Agent 3 (Enhanced Action Prompt) → Sub Agent 4 (Execution) → Sub Agent 5 (Visual Testing)

## File Naming Conventions

- `workflow_status.plan.md` - Progress tracking (`.cursor/plans/`)
- `research-<task-name>.plan.md` - Research findings (`.cursor/plans/`)
- `enhanced_plan_prompt.plan.md` - Scope clarification (`.cursor/plans/`)
- `enhanced_action_prompt.plan.md` - Executable instructions (`.cursor/plans/`)

## Plan File Structure

All .plan.md files MUST use YAML frontmatter with:
- `name`: string
- `overview`: string
- `todos`: array of objects with `id`, `content`, `status`
- `isProject`: boolean

## Creating Related Skills

When you need to create a skill related to workflow orchestration:

1. Invoke the `generalPurpose` subagent
2. Pass the `create-skill` command
3. Include the full orchestrator command content from `.cursor/commands/orchestrator.md` as context
