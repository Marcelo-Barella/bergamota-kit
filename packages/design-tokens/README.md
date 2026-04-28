# @bergamota/design-tokens

Single source of truth for Product (customer-facing) UI: cream surfaces, neutral ink text, and one warm terracotta accent for primary actions and focus.

## Install

From the monorepo root (or after publishing):

```bash
npm install @bergamota/design-tokens
```

**Local / workspace link** (npm, pnpm, or yarn):

```bash
# From the app package directory
npm install ../packages/design-tokens
# or
pnpm add ../packages/design-tokens
```

**Publish** (when releasing this package):

```bash
cd packages/design-tokens
npm publish --access public
```

Peer dependency: `tailwindcss` ^3.

## Tailwind CSS v3+

Import the preset and merge it in `tailwind.config.js`:

```js
import bergamotaTailwindPreset from "@bergamota/design-tokens/preset"

/** @type {import('tailwindcss').Config} */
export default {
  presets: [bergamotaTailwindPreset()],
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
}
```

CommonJS:

```js
const { bergamotaTailwindPreset } = require("@bergamota/design-tokens/preset")

module.exports = {
  presets: [bergamotaTailwindPreset()],
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
}
```

Optional: use token values in scripts or non-Tailwind layers:

```js
import tokens from "@bergamota/design-tokens"

const { primitives, semantic } = tokens
```

## Documentation

See [docs/design-tokens.md](../../docs/design-tokens.md) for the full token table, accent rules, and spacing grid.
