# Primitives

Primitives are implemented in the Tailwind plugin (`preset.cjs` pulls in `plugin.cjs`). After adding the preset, use these classes alongside arbitrary spacing utilities keyed to the preset (`gap-ds-2`, `p-ds-4`, etc.).

Typography utilities also exist as Tailwind **`font-*` mappings** (`text-ds-display-xl`, `font-ds-display`, `font-ds`). Prefer primitives when you want precomposed font family + weight; use raw utilities when layering responsive behavior.

## Typography

| Class | Stack | Purpose |
|---|---|---|
| `ds-display-xl` | Display (serif) | Hero headings on landing surfaces |
| `ds-display-lg` | Display | Major section headings |
| `ds-display-md` | Display | Card or panel titles |
| `ds-body-lg` | Sans | Lead paragraphs |
| `ds-body-md` | Sans | Default copy and buttons |
| `ds-body-sm` | Sans | Captions and dense dashboard copy |
| `ds-label` | Sans, semibold | Uppercase-ready labels (`letter-spacing` included) |

**Terracotta/cream interplay:** Pair `ds-display-*` on `cream` backgrounds with optional `text-ds-accent` links using `ds-link` below; body defaults inherit `ds.text` (ink on cream).

Example:

```html
<section class="bg-ds-canvas p-ds-6">
  <h1 class="ds-display-xl text-ds-text max-w-ds-reading">Primary heading</h1>
  <p class="ds-body-lg text-ds-text-muted mt-ds-3">Supporting copy.</p>
  <a class="ds-link" href="#">Inline action</a>
</section>
```

## Surfaces

| Class | Description |
|---|---|
| `ds-surface` | Default card: cream paper, ink text, hairline border |
| `ds-surface-muted` | Subtle panel on canvas (still cream family) |

Pad with `p-ds-*`; stack content with `ds-stack` or `ds-stack-tight`.

## Stacks and rows

| Class | Description |
|---|---|
| `ds-stack` | Vertical stack, `16px` gap (`ds-2`) |
| `ds-stack-tight` | Vertical stack, `8px` gap (`ds-1`) |
| `ds-row` | Horizontal row, centered alignment, `16px` gap |

## Buttons

| Class | Description |
|---|---|
| `ds-btn-primary` | Filled action using terracotta accent; hover darkens within same ramp |
| `ds-btn-ghost` | Text-style control on cream; hover uses `accent-soft` background |

Focus states use the terracotta focus ring for visibility on cream.

## Links

| Class | Description |
|---|---|
| `ds-link` | Text link with terracotta default and hover to `accent-hover` |

## Preset reference

Import path for consumers: `bergamota-subscription-ui/preset.cjs`.  
Token source of truth (JSON): `bergamota-subscription-ui/tokens.json`.
