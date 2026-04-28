# Design tokens

## Spacing (8px grid)

The baseline unit is **8px**. Token names map to multiples of that unit:

| Token | Value | Grid steps |
|---|---|---|
| `ds-0` | 0 | 0 |
| `ds-1` | 8px | 1 |
| `ds-2` | 16px | 2 |
| `ds-3` | 24px | 3 |
| ... | ... | ... |
| `ds-12` | 96px | 12 |

**Convention:** Use `p-ds-*`, `m-ds-*`, `gap-ds-*`, `space-ds-*`, and `w-ds-*` / `h-ds-*` utilities for layout. Reserve `ds-hairline` (4px) for internal hairline gaps or tiny affordances only—**not** for primary layout rhythm.

CSS variables for the scale live as `--ds-space-*` in `tokens.css`.

## Palette (restrained + one accent)

**Base:** warm cream canvas and paper-like surfaces plus warm gray ink for text and borders. **Single chromatic accent:** terracotta (`terracotta.*` and semantic `ds.accent*`). No additional accent hues are defined; status color should reuse ink or terracotta as needed.

| Role | Description |
|---|---|
| `cream.*` | Page canvas, cards, subtle borders between regions |
| `ink.*` | Primary text, secondary text, borders |
| `terracotta.*` | Primary actions, focus rings, links, emphasis |
| `ds.*` | Semantic aliases (`canvas`, `surface`, `text`, `accent`, etc.) |

## Typography

**Display (headings, editorial):** Fraunces (or similar soft serif). Weights used in utilities: 600 for titles.

**Body / UI:** Inter (or system UI stack). Weights: 400 default, 600 for labels and buttons.

| Role | Size / line height | Typical use |
|---|---|---|
| Display XL | 2.5rem / 1.1 | Hero headings (landing) |
| Display LG | 2rem / 1.25 | Section titles (landing, dashboard modules) |
| Display MD | 1.5rem / 1.33 | Card titles |
| Body LG | 1.125rem / 1.56 | Lead copy |
| Body MD | 1rem / 1.5 | Default UI and forms |
| Body SM | 0.875rem / 1.43 | Dense tables, captions |
| Label | 0.75rem / 1.33, letter-spacing 0.04em | KPI labels, badges |

Concrete values are mirrored in `tokens.json` (`typography.scale`) for tooling.

## Imports

Machine-readable catalogue: `packages/bergamota-subscription-ui/tokens.json`.  
CSS custom properties for runtime overrides: `@import ".../tokens.css"`.
