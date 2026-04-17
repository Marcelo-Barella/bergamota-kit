---
name: unravel
description: Build a deterministic end-to-end flow plan file for a user objective using the /unravel command. Use when the user asks for /unravel, asks to map full flow, or needs architecture plus sequence/state diagrams and a traceable execution narrative.
---

# Unravel

<context>
  <trigger>
    <primary_invocation>/unravel</primary_invocation>
    <apply_when>Apply this skill when the user explicitly uses /unravel or requests an end-to-end flow breakdown with diagrams and a full execution narrative.</apply_when>
  </trigger>

  <inputs>
    <required_input>theme (string)</required_input>
    <provided_theme_rule>If the user provides /unravel &lt;theme&gt;, use the provided theme.</provided_theme_rule>
    <inference_rule>If theme is omitted, infer it from the user request objective.</inference_rule>
    <inference_steps>
      <step>Extract the shortest phrase that names the objective domain.</step>
      <step>Prefer noun-phrase scope over verbs.</step>
      <step>If multiple candidates remain, choose the first candidate in request order.</step>
    </inference_steps>
  </inputs>

  <theme_normalization>
    <step>Trim leading and trailing spaces.</step>
    <step>Lowercase.</step>
    <step>Replace spaces and underscores with "-".</step>
    <step>Remove characters outside [a-z0-9-].</step>
    <step>Collapse repeated "-".</step>
    <step>Remove leading and trailing "-".</step>
    <empty_fallback>general-flow</empty_fallback>
  </theme_normalization>

  <output_contract>
    <file_path_template>.cursor/plans/unravel-[theme].plan.md</file_path_template>
    <theme_source>[theme] must be the normalized theme from &lt;theme_normalization&gt;.</theme_source>
    <write_mode>Create or overwrite the file deterministically.</write_mode>
  </output_contract>

  <hallucination_guardrails>
    <allowed_sources>
      <source>User-provided context in the current request.</source>
      <source>Discovered repository context available at runtime.</source>
    </allowed_sources>
    <forbidden_behavior>Do not invent systems, APIs, services, files, or constraints not evidenced by context.</forbidden_behavior>
    <missing_fact_rule>Mark every missing fact as "Assumption:" and keep assumptions minimal and testable.</missing_fact_rule>
    <critical_unknown_rule>If critical context is missing, include explicit unknowns and impact on confidence.</critical_unknown_rule>
  </hallucination_guardrails>
</context>

<instructions>
  <content_requirements>
    <requirement>The plan explains the complete end-to-end flow of the user objective from input to final outcome.</requirement>
    <requirement>Include actors, ordered steps, decisions and branch logic, intermediate and final outputs, and failure paths with recovery behavior.</requirement>
    <requirement>Tie each major step directly to user intent.</requirement>
  </content_requirements>

  <plan_structure>
    <optional_frontmatter_fields>
      <field>name</field>
      <field>overview</field>
      <field>assumptions</field>
      <field>inputs</field>
      <field>outputs</field>
    </optional_frontmatter_fields>
    <required_sections_order>
      <section>Objective</section>
      <section>Scope and Assumptions</section>
      <section>High-Level Flow</section>
      <section>Detailed End-to-End Flow</section>
      <section>Diagram 1 (Mermaid)</section>
      <section>Diagram 2 (Mermaid)</section>
      <section>Edge Cases and Failure Paths</section>
      <section>Validation Checklist</section>
      <section>Summary</section>
    </required_sections_order>
    <title_rule>After optional frontmatter, render an H1 title with the theme.</title_rule>
  </plan_structure>

  <diagram_requirements>
    <minimum_count>2</minimum_count>
    <required_types>
      <type>High-level architecture or flow diagram.</type>
      <type>Sequence diagram or state-flow diagram.</type>
    </required_types>
    <consistency_rules>
      <rule>Nodes map to named actors or components in the narrative.</rule>
      <rule>Branch points align with described decisions.</rule>
      <rule>Outputs in diagrams match outputs in the detailed flow.</rule>
    </consistency_rules>
  </diagram_requirements>

  <narrative_depth>
    <required_coverage>
      <item>Trigger and input intake.</item>
      <item>Validation and gating.</item>
      <item>Orchestration steps.</item>
      <item>Branch conditions.</item>
      <item>Error and failure handling.</item>
      <item>Completion and final artifacts.</item>
    </required_coverage>
    <branch_rule>Include key branches and failure paths, not only the happy path.</branch_rule>
    <language_rule>Use precise, technical, explicit language. Avoid vague statements.</language_rule>
  </narrative_depth>

  <validation_checklist_requirements>
    <format>Checklist with pass or fail style items.</format>
    <required_items>
      <item>Completeness of end-to-end flow.</item>
      <item>Consistency between narrative and both diagrams.</item>
      <item>Traceability of each major step to user objective.</item>
      <item>Explicit assumptions and unknowns.</item>
      <item>Inclusion of edge cases and failure paths.</item>
      <item>Correct output file naming rule usage.</item>
    </required_items>
  </validation_checklist_requirements>

  <execution_steps>
    <step>Resolve and normalize theme.</step>
    <step>Resolve exact output path .cursor/plans/unravel-[theme].plan.md.</step>
    <step>Gather only allowed context under &lt;hallucination_guardrails&gt;.</step>
    <step>Generate the plan with &lt;plan_structure&gt; order and all required sections.</step>
    <step>Verify diagram count and type from &lt;diagram_requirements&gt;.</step>
    <step>Verify branch and failure coverage from &lt;narrative_depth&gt;.</step>
    <step>Verify checklist quality from &lt;validation_checklist_requirements&gt;.</step>
    <step>Save the file to the exact output path.</step>
  </execution_steps>
</instructions>

<examples>
  <minimal_example>
    <input>/unravel payment-retry</input>
    <output_file>.cursor/plans/unravel-payment-retry.plan.md</output_file>
    <must_include>
      <item>Context grounded in user and repository evidence.</item>
      <item>End-to-End Flow Explanation.</item>
      <item>Mermaid Diagram: System Flow.</item>
      <item>Mermaid Diagram: Sequence or State.</item>
      <item>Edge Cases and Failure Paths.</item>
      <item>Validation Checklist.</item>
    </must_include>
  </minimal_example>
</examples>

<formatting>
  <style>Deterministic, structured, explicit, and technically precise.</style>
  <xml_reference_rule>Reference constraints by XML tag names when enforcing behavior.</xml_reference_rule>
  <naming_rule>Always use the normalized theme for output file naming.</naming_rule>
</formatting>

<output>
  <artifact>Write exactly one plan file to .cursor/plans/unravel-[theme].plan.md.</artifact>
  <guarantees>
    <item>Section order matches &lt;plan_structure&gt;.</item>
    <item>At least two Mermaid diagrams are present.</item>
    <item>Assumptions and unknowns are explicit and minimal.</item>
  </guarantees>
</output>
