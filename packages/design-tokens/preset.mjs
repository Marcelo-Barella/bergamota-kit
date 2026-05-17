import tokens from "./tokens.mjs"

const { primitives, semantic, spacing, fontSize, borderRadius, boxShadow, fontFamily } =
  tokens

function flattenScale(obj, prefix = "") {
  const out = {}
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}-${k}` : String(k)
    if (v && typeof v === "object" && !Array.isArray(v)) {
      Object.assign(out, flattenScale(v, key))
    } else {
      out[key] = v
    }
  }
  return out
}

function flattenSemantic(obj, prefix = "") {
  const out = {}
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}-${k}` : k
    if (v && typeof v === "object" && !Array.isArray(v)) {
      if ("DEFAULT" in v && Object.keys(v).every((x) => x === "DEFAULT" || typeof v[x] === "string")) {
        out[path] = v.DEFAULT
        for (const [sk, sv] of Object.entries(v)) {
          if (sk === "DEFAULT") continue
          out[`${path}-${sk}`] = sv
        }
      } else {
        Object.assign(out, flattenSemantic(v, path))
      }
    } else {
      out[path] = v
    }
  }
  return out
}

const primitiveColors = flattenScale({
  cream: primitives.cream,
  ink: primitives.ink,
  terracotta: primitives.terracotta,
})

const semanticColors = flattenSemantic({
  surface: semantic.surface,
  border: semantic.border,
  text: semantic.text,
  accent: semantic.accent,
  feedback: semantic.feedback,
})

export function bergamotaTailwindPreset() {
  return {
    theme: {
      extend: {
        colors: {
          ...primitiveColors,
          ...semanticColors,
        },
        spacing,
        fontSize,
        borderRadius,
        boxShadow,
        fontFamily,
        ringColor: {
          DEFAULT: primitives.terracotta[500],
          focus: primitives.terracotta[500],
        },
        ringOffsetColor: {
          surface: semantic.surface.DEFAULT,
        },
      },
    },
  }
}

export default bergamotaTailwindPreset
