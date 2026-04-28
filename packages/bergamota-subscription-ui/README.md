# bergamota-subscription-ui

Published-style design tokens and a Tailwind CSS v3 preset for subscription commerce interfaces: restrained cream neutrals, a single terracotta accent, typography split between soft-serif display (landing-style hierarchy) and a neutral sans UI/body stack, and spacing aligned to an 8px grid.

## Contents

| Path | Purpose |
|---|---|
| `tokens.css` | CSS variables for semantic colors, ramps, typography scale vars, spacing scale |
| `tokens.json` | Machine-readable token catalogue (palette, typography roles, spacing) |
| `preset.cjs` | Tailwind `theme.extend` + plugin (semantic `ds-*` colors, `ds-*` spacing, typography sizes, primitives) |
| `plugin.cjs` | Typography, surface, stack, row, button, link component classes scoped with `ds-` prefix |

## Install your app consumes this package from npm

After publish (or linking), add Tailwind CSS v3 and this package:

```bash
npm install tailwindcss bergamota-subscription-ui
```

### Configure Tailwind

`tailwind.config.cjs`:

```js
module.exports = {
  presets: [require("bergamota-subscription-ui/preset.cjs")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
};
```

Optional: expose `theme` from the preset in PostCSS `@tailwind` pipelines so content scanning includes your routes.

### Apply base tokens once

In global CSS:

```css
@import "bergamota-subscription-ui/tokens.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Fonts: load Fraunces and Inter in your shell (CDN or `@font-face`) or substitute comparable families; semantic roles are documented in `docs/primitives.md` and `docs/tokens.md`.

## Consume from another repo workspace (no publish yet)

npm:

```bash
npm install file:../../bergamota-kit/packages/bergamota-subscription-ui
```

pnpm / Yarn Berry (adapt relative path):

```bash
pnpm add file:../../../bergamota-kit/packages/bergamota-subscription-ui
```

Then use `presets`, `@import`, and doc paths as above.

## Documentation

- [Design tokens](docs/tokens.md)
- [Primitives (buttons, typography, surfaces, stacks)](docs/primitives.md)

## License

MIT (same as the parent repository).
