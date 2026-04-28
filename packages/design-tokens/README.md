# @bergamota-kit/design-tokens

Primitive design tokens for boutique D2C subscription UIs: a **cream** base palette, **8px spacing grid**, calm **display vs body** typography roles, and a **single elevated accent** (warm **terracotta**) reserved for primary actions, key highlights, and focus—not for decorative variety.

## Install

From the **bergamota** app repo (or any consumer), depend on this package by path until it is published:

**pnpm** (recommended for monorepos):

```json
{
  "dependencies": {
    "@bergamota-kit/design-tokens": "workspace:*"
  }
}
```

Point `workspace:` to the folder that contains `packages/design-tokens` (e.g. add this repo as a git submodule or clone sibling, then reference `file:../path/to/bergamota-kit/packages/design-tokens` in `package.json` if you do not use pnpm workspaces).

**npm** (file link):

```json
{
  "dependencies": {
    "@bergamota-kit/design-tokens": "file:../bergamota-kit/packages/design-tokens"
  }
}
```

Adjust the relative path to match where this kit lives next to the app. After publishing to npm, replace with a semver range (e.g. `^0.1.0`).

**Versioning:** This package ships at `0.1.0` in-repo; bump `packages/design-tokens/package.json` when breaking or additive releases are needed.

## CSS variables

Import once at the root layout so variables apply globally:

```css
@import "@bergamota-kit/design-tokens/tokens.css";
```

Or in JS/CSS bundled entry:

```css
@import "@bergamota-kit/design-tokens/tokens.css";
```

### Color tokens

| Token prefix | Role |
|--------------|------|
| `--color-cream-*` | Page and section backgrounds (0–200; darker = more tinted cream) |
| `--color-ink-*` | Text and icons (900 primary body, stepping down for secondary) |
| `--color-line-*` | Borders and dividers |
| `--color-terracotta-*` | **Accent only:** buttons (primary), links that need emphasis, focus rings, rare promotional highlights |
| `--color-surface-raised` | Cards and elevated surfaces |
| `--color-overlay-scrim` | Modal/dialog overlays |

There is **no second accent**. Use ink + cream + line for hierarchy; use terracotta only where an action or focus must stand out.

### Spacing (8px grid)

Spacing scale keys map to **multiples of 0.25rem (4px)** so paired padding/margin sums align to **8px**: use even keys (`2`, `4`, `6` …) for pure 8px steps; odd keys are half-steps for tight UI.

| Token | Value |
|-------|-------|
| `--space-1` | 0.5rem (8px) |
| `--space-2` | 1rem (16px) |
| `--space-3` | 1.5rem (24px) |
| `--space-4` | 2rem (32px) |
| … | increments of `0.5rem` up to `--space-24` |

Rule: prefer **multiples of `space-2` (16px)** for section gaps and major rhythm; use `space-1` for dense controls.

### Radius

`--radius-sm` through `--radius-xl` plus `--radius-full`. Default Tailwind-compatible rounding without arbitrary pixels.

### Typography roles

Variables define **roles**, not a large modular scale—calm hierarchy:

| Role | Variables | Intent |
|------|-----------|--------|
| Display | `--text-display-xl-*`, `--text-display-lg-*` | Hero titles; restrained serif stack (`--font-display`) |
| Title | `--text-title-*` | Section headings |
| Body | `--text-body-*`, `--text-body-sm-*` | Reading text; sans (`--font-body`) |
| Label | `--text-label-*` | Uppercase-friendly captions; small sans |

Use **display** sparingly so pages stay calm; **body** carries most content.

## JavaScript

```js
import tokens from "@bergamota-kit/design-tokens";
// tokens.colors.cream["50"], tokens.spacing["4"], …
```

## Tailwind preset

The preset maps **colors**, **spacing**, **borderRadius**, **fontFamily**, **fontSize**, **ring/outline** accent to tokens so apps avoid magic numbers.

**tailwind.config.ts** (Next.js App Router):

```ts
import type { Config } from "tailwindcss";
import bergamotaPreset from "@bergamota-kit/design-tokens/preset";

export default {
  presets: [bergamotaPreset],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
} satisfies Config;
```

**globals.css:**

```css
@import "@bergamota-kit/design-tokens/tokens.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Example utilities:

- Background: `bg-cream-50`, `bg-surface-raised`
- Text: `text-ink-900`, `text-ink-500`
- Primary button (accent): `bg-terracotta-500 text-cream-0 hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream-0`
- Spacing: `p-4`, `gap-6`, `mt-8` (aligned to token scale)
- Type: `font-display text-display-lg`, `font-body text-body`, `text-body-sm`

Requires **tailwindcss** `>=3.4` as a peer dependency.

## Accent usage (terracotta)

1. Primary CTAs and links that represent **the main action** on a screen.
2. **Focus-visible** rings and meaningful interactive highlights.
3. Avoid terracotta for icons, borders, or large backgrounds unless reinforcing an action—use ink/cream/line instead.

## Placeholders in examples

Use neutral copy only (e.g. “Brand”, “Product”, “Subscribe”)—no real product or trade names.
