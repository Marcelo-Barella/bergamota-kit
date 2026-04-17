---
name: light-prompt
description: Converts raw user input into a tight, structured prompt capped at about 200 tokens to reduce model drift. Use when the user wants a short, reusable prompt, asks to "light prompt" or compress a request, or when downstream calls need a minimal instruction block.
---

# Light prompt

<context>
  Turn the given input into a **single structured prompt** whose total length is **at most ~200 tokens** (approximate). Shorter is acceptable; exceeding the cap is not.

  Longer instructions increase off-task behavior. This skill trades elaboration for clarity and boundaries.
</context>

<instructions>
  **Technique (research-backed, compressed)**

  Effective short prompts combine:

  1. **Task** — one imperative sentence: what to produce.
  2. **Context** — minimal facts and **file references** using `@path` (e.g. `@folder/file`, `@src/component.vue`). List only paths the model must read.

  Omit sections that add no information. Be direct; avoid clever phrasing.

  **Token budget**

  - Treat **200 tokens** as a soft ceiling using judgment (roughly **120–180 English words** for many models; compress if longer).
  - If the source input is huge: **summarize intent** first, then apply this structure; do not paste long sources into the prompt unless the task is verbatim extraction.

  **Return**

  Return **only** the finished prompt text (no meta commentary), using the skeleton in `<example>` when it fits.

  Use shorter labels or merge lines if needed to stay under the cap.
</instructions>

<example>
Task: …

Context:
- @path/to/relevant/file
- @another/file
</example>

<formatting>
  **Quality check**

  Before returning:

  - [ ] Every line earns its tokens (no filler, no duplicate asks).
  - [ ] Task is unambiguous.
  - [ ] Context includes relevant `@file` paths when applicable.
  - [ ] Total length respects ~200 tokens.
</formatting>
