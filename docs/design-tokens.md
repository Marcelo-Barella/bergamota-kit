# Design tokens (bergamota foundation)

Foundation for customer-facing boutique specialty-coffee SaaS surfaces: restrained palette on a cream base, 8px spacing grid with rem-backed scale, semantic roles, and **one** elevated accent—warm terracotta—for primary actions, focus rings, and key highlights only.

## Token table (semantic)

| Token / role | Tailwind utilities | Usage |
| --- | --- | --- |
| `surface.DEFAULT` | `bg-surface` | Page and card backgrounds |
| `surface.raised` | `bg-surface-raised` | Slightly elevated panels |
| `surface.overlay` | `bg-surface-overlay` | Dividers, subtle elevation |
| `surface.inverse` | `bg-surface-inverse` | Dark bars, inverse strips |
| `border.DEFAULT` | `border-border` | Default borders |
| `border.strong` | `border-border-strong` | Emphasized borders |
| `border.focus` | `border-border-focus` | Focus border color |
| `text.primary` | `text-text-primary` | Body and headings |
| `text.secondary` | `text-text-secondary` | Secondary copy |
| `text.muted` | `text-text-muted` | Hints, captions |
| `text.disabled` | `text-text-disabled` | Disabled state |
| `text.inverse` | `text-text-inverse` | Text on dark surfaces |
| `text.onAccent` | `text-text-onAccent` | Text on terracotta fills |
| `accent.DEFAULT` | `bg-accent`, `text-accent` | Primary buttons, links, key CTAs |
| `accent.hover` | `hover:bg-accent-hover` | Hover on accent controls |
| `accent.active` | `active:bg-accent-active` | Active/pressed |
| `accent.subtle` | `bg-accent-subtle` | Light accent tint (backgrounds only) |
| `accent.muted` | `text-accent-muted`, `border-accent-muted` | Rare secondary emphasis |
| Success / warning / danger | `text-feedback-*`, `bg-feedback-*Bg` | Neutrals and cream for status; subtle terracotta tint for error background only |

Semantic names duplicate the `text-`/`border-` prefix in utilities (nested `theme.colors.text`). Prefer semantic tokens below; primitive scales (`cream-*`, `ink-*`, `terracotta-*`) stay short (`bg-cream-100`, `text-ink-600`).

## Primitives (reference)

| Scale | Notes |
| --- | --- |
| `cream` | 50–400, light to mid warm neutrals |
| `ink` | 50–900, text and UI neutrals |
| `terracotta` | 50–900, **only** chromatic accent family |

## Accent usage (terracotta)

**Allowed**

- Primary actions: one primary button per view (or clear hierarchy), `bg-accent` / `text-text-onAccent`.
- Focus: visible focus ring—use `ring-accent` / `ring-offset-surface` (preset extends ring colors).
- Key highlights: hero CTA, active nav indicator, single progress or selection emphasis.
- Links on cream: `text-accent` with hover `text-accent-hover`; avoid rainbow link colors.

**Avoid**

- Large terracotta backgrounds for whole pages (cream remains default).
- Multiple competing terracotta “primary” elements in one viewport.
- Decorative terracotta icons or borders everywhere—default to `ink` and `border`.
- Extra loud accent colors; this system does not add second brand hues—success/warning stay neutral/cream.

## Grid and spacing

- Base unit: **8px** (`0.5rem` at 16px root).
- Spacing scale in the preset: `1` = 8px, `2` = 16px, … up through `24` = 192px. Use multiples of `1` (8px) for padding, gap, and margin.
- Typography: `text-base` = 16px / 24px line height; scale steps are in rem in `tokens.mjs` for document-relative scaling.

## Tailwind utility examples

- Page: `bg-surface text-text-primary`
- Card: `bg-surface-raised border border-border rounded-lg p-4`
- Primary button: `bg-accent text-onAccent hover:bg-accent-hover active:bg-accent-active rounded-md px-4 py-2`
- Focus: `focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface`

## Package entry

- Tokens: `@bergamota/design-tokens` or `@bergamota/design-tokens/tokens`
- Preset: `@bergamota/design-tokens/preset`
