const rem = (px) => `${px / 16}rem`

export const primitives = {
  cream: {
    50: "#faf9f6",
    100: "#f5f2eb",
    200: "#ebe6dc",
    300: "#ddd6c9",
    400: "#c9c0b0",
  },
  ink: {
    50: "#f7f7f6",
    100: "#e8e8e6",
    200: "#d1d0cc",
    300: "#a8a69f",
    400: "#7a7870",
    500: "#5c5a52",
    600: "#46443e",
    700: "#33322e",
    800: "#22211e",
    900: "#141311",
  },
  terracotta: {
    50: "#fcf6f4",
    100: "#f8e8e2",
    200: "#efcfc3",
    300: "#e0a896",
    400: "#cd7d5e",
    500: "#b85a3c",
    600: "#9d4a32",
    700: "#823c29",
    800: "#5c2a1d",
    900: "#3d1c14",
  },
}

export const spacing = {
  px: "1px",
  0: rem(0),
  1: rem(8),
  2: rem(16),
  3: rem(24),
  4: rem(32),
  5: rem(40),
  6: rem(48),
  7: rem(56),
  8: rem(64),
  9: rem(72),
  10: rem(80),
  11: rem(88),
  12: rem(96),
  14: rem(112),
  16: rem(128),
  20: rem(160),
  24: rem(192),
}

export const semantic = {
  surface: {
    DEFAULT: primitives.cream[50],
    raised: primitives.cream[100],
    overlay: primitives.cream[200],
    inverse: primitives.ink[800],
  },
  border: {
    DEFAULT: primitives.cream[300],
    strong: primitives.ink[200],
    focus: primitives.terracotta[500],
  },
  text: {
    primary: primitives.ink[900],
    secondary: primitives.ink[600],
    muted: primitives.ink[400],
    disabled: primitives.ink[300],
    inverse: primitives.cream[50],
    onAccent: primitives.cream[50],
  },
  accent: {
    DEFAULT: primitives.terracotta[500],
    hover: primitives.terracotta[600],
    active: primitives.terracotta[700],
    subtle: primitives.terracotta[100],
    muted: primitives.terracotta[300],
  },
  feedback: {
    success: primitives.ink[700],
    successBg: primitives.ink[50],
    warning: primitives.ink[700],
    warningBg: primitives.cream[200],
    danger: primitives.ink[800],
    dangerBg: primitives.terracotta[100],
  },
}

export const fontSize = {
  xs: [rem(12), { lineHeight: rem(16) }],
  sm: [rem(14), { lineHeight: rem(20) }],
  base: [rem(16), { lineHeight: rem(24) }],
  lg: [rem(18), { lineHeight: rem(28) }],
  xl: [rem(20), { lineHeight: rem(28) }],
  "2xl": [rem(24), { lineHeight: rem(32) }],
  "3xl": [rem(30), { lineHeight: rem(36) }],
  "4xl": [rem(36), { lineHeight: rem(40) }],
}

export const borderRadius = {
  none: "0",
  sm: rem(4),
  DEFAULT: rem(8),
  md: rem(8),
  lg: rem(12),
  xl: rem(16),
  "2xl": rem(24),
  full: "9999px",
}

export const boxShadow = {
  sm: "0 1px 2px 0 rgb(20 19 17 / 0.05)",
  DEFAULT:
    "0 1px 3px 0 rgb(20 19 17 / 0.08), 0 1px 2px -1px rgb(20 19 17 / 0.08)",
  md: "0 4px 6px -1px rgb(20 19 17 / 0.08), 0 2px 4px -2px rgb(20 19 17 / 0.06)",
  lg: "0 10px 15px -3px rgb(20 19 17 / 0.08), 0 4px 6px -4px rgb(20 19 17 / 0.06)",
  focus: `0 0 0 3px ${primitives.terracotta[500]}40`,
}

export const fontFamily = {
  sans: [
    "ui-sans-serif",
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
  ],
  mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
}

export default {
  primitives,
  semantic,
  spacing,
  fontSize,
  borderRadius,
  boxShadow,
  fontFamily,
}
