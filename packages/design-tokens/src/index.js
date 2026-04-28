export const colors = {
  cream: {
    0: "var(--color-cream-0)",
    50: "var(--color-cream-50)",
    100: "var(--color-cream-100)",
    200: "var(--color-cream-200)",
  },
  ink: {
    900: "var(--color-ink-900)",
    700: "var(--color-ink-700)",
    500: "var(--color-ink-500)",
    300: "var(--color-ink-300)",
  },
  line: {
    200: "var(--color-line-200)",
    100: "var(--color-line-100)",
  },
  terracotta: {
    600: "var(--color-terracotta-600)",
    500: "var(--color-terracotta-500)",
    400: "var(--color-terracotta-400)",
    focus: "var(--color-terracotta-focus)",
  },
  surface: {
    raised: "var(--color-surface-raised)",
  },
  overlay: {
    scrim: "var(--color-overlay-scrim)",
  },
};

export const spacing = {
  0: "var(--space-0)",
  px: "var(--space-px)",
  1: "var(--space-1)",
  2: "var(--space-2)",
  3: "var(--space-3)",
  4: "var(--space-4)",
  5: "var(--space-5)",
  6: "var(--space-6)",
  7: "var(--space-7)",
  8: "var(--space-8)",
  9: "var(--space-9)",
  10: "var(--space-10)",
  12: "var(--space-12)",
  16: "var(--space-16)",
  20: "var(--space-20)",
  24: "var(--space-24)",
};

export const borderRadius = {
  none: "var(--radius-none)",
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  full: "var(--radius-full)",
};

export const fontFamily = {
  display: ["var(--font-display)"],
  body: ["var(--font-body)"],
};

export const fontSize = {
  "display-xl": [
    "var(--text-display-xl-size)",
    {
      lineHeight: "var(--text-display-xl-line)",
      letterSpacing: "var(--text-display-xl-track)",
    },
  ],
  "display-lg": [
    "var(--text-display-lg-size)",
    {
      lineHeight: "var(--text-display-lg-line)",
      letterSpacing: "var(--text-display-lg-track)",
    },
  ],
  title: [
    "var(--text-title-size)",
    {
      lineHeight: "var(--text-title-line)",
      letterSpacing: "var(--text-title-track)",
    },
  ],
  body: [
    "var(--text-body-size)",
    {
      lineHeight: "var(--text-body-line)",
      letterSpacing: "var(--text-body-track)",
    },
  ],
  "body-sm": [
    "var(--text-body-sm-size)",
    {
      lineHeight: "var(--text-body-sm-line)",
      letterSpacing: "var(--text-body-sm-track)",
    },
  ],
  label: [
    "var(--text-label-size)",
    {
      lineHeight: "var(--text-label-line)",
      letterSpacing: "var(--text-label-track)",
    },
  ],
};

export const tokens = {
  colors,
  spacing,
  borderRadius,
  fontFamily,
  fontSize,
};

export default tokens;
