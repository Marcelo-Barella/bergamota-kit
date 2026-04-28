const path = require("path");

const bergamotaPlugin = require(path.join(__dirname, "plugin.cjs"));

const fontSans =
  `Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;
const fontDisplay =
  `"Fraunces", Georgia, "Times New Roman", serif`;

module.exports = {
  plugins: [bergamotaPlugin],
  theme: {
    extend: {
      spacing: {
        "ds-hairline": "4px",
        "ds-0": "0px",
        "ds-1": "8px",
        "ds-2": "16px",
        "ds-3": "24px",
        "ds-4": "32px",
        "ds-5": "40px",
        "ds-6": "48px",
        "ds-7": "56px",
        "ds-8": "64px",
        "ds-9": "72px",
        "ds-10": "80px",
        "ds-11": "88px",
        "ds-12": "96px",
      },
      borderRadius: {
        "ds-sm": "6px",
        "ds-md": "8px",
        "ds-lg": "12px",
        "ds-xl": "16px",
      },
      colors: {
        ds: {
          canvas: "#faf7f2",
          surface: "#fefdfb",
          "surface-muted": "#f5efe6",
          border: "#e8e6e2",
          "border-strong": "#c9c4bc",
          text: "#1c1814",
          "text-muted": "#5c564f",
          "text-subtle": "#6f6860",
          accent: "#c86244",
          "accent-hover": "#9a4228",
          "accent-soft": "#f9eae5",
          "on-accent": "#fefdfb",
          "focus-ring": "#c86244",
        },
        cream: {
          50: "#fefdfb",
          100: "#faf7f2",
          150: "#f5efe6",
          200: "#ede6d9",
          300: "#d9d0c2",
          400: "#b8aea0",
        },
        ink: {
          950: "#1c1814",
          800: "#3d3834",
          600: "#5c564f",
          500: "#6f6860",
          400: "#9a9288",
          200: "#c9c4bc",
          100: "#e8e6e2",
        },
        terracotta: {
          50: "#fdf6f4",
          100: "#f9eae5",
          300: "#e8a892",
          500: "#c86244",
          700: "#9a4228",
          900: "#5f2615",
        },
      },
      fontFamily: {
        ds: [fontSans],
        "ds-display": [fontDisplay],
      },
      fontSize: {
        "ds-display-xl": ["2.5rem", { lineHeight: "1.1" }],
        "ds-display-lg": ["2rem", { lineHeight: "1.25" }],
        "ds-display-md": ["1.5rem", { lineHeight: "1.33" }],
        "ds-body-lg": ["1.125rem", { lineHeight: "1.56" }],
        "ds-body-md": ["1rem", { lineHeight: "1.5" }],
        "ds-body-sm": ["0.875rem", { lineHeight: "1.43" }],
        "ds-label": ["0.75rem", { lineHeight: "1.33" }],
      },
      maxWidth: {
        "ds-prose": "65ch",
        "ds-reading": "40rem",
      },
    },
  },
};
