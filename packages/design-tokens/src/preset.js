import { borderRadius, colors, fontFamily, fontSize, spacing } from "./index.js";

const ringColor = colors.terracotta.focus;

export default {
  theme: {
    extend: {
      colors: {
        cream: colors.cream,
        ink: colors.ink,
        line: colors.line,
        terracotta: colors.terracotta,
        surface: colors.surface,
        overlay: colors.overlay,
      },
      spacing,
      borderRadius: {
        ...borderRadius,
        DEFAULT: borderRadius.md,
      },
      fontFamily: {
        display: fontFamily.display,
        body: fontFamily.body,
        sans: fontFamily.body,
      },
      fontSize,
      boxShadow: {
        sm: "0 1px 2px rgb(28 25 22 / 0.06)",
        md: "0 4px 12px rgb(28 25 22 / 0.08)",
        lg: "0 12px 32px rgb(28 25 22 / 0.1)",
      },
      outlineColor: {
        terracotta: ringColor,
      },
      ringColor: {
        DEFAULT: ringColor,
        terracotta: ringColor,
      },
      ringOffsetColor: {
        cream: colors.cream[0],
      },
    },
  },
};
