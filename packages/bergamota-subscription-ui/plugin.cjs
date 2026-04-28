const plugin = require("tailwindcss/plugin");

const displayFamily = `"Fraunces", Georgia, "Times New Roman", serif`;
const sansFamily =
  `Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    ".ds-display-xl": {
      fontFamily: displayFamily,
      fontSize: theme("fontSize.ds-display-xl[0]", "2.5rem"),
      lineHeight: theme("fontSize.ds-display-xl[1].lineHeight", "1.1"),
      fontWeight: "600",
    },
    ".ds-display-lg": {
      fontFamily: displayFamily,
      fontSize: theme("fontSize.ds-display-lg[0]", "2rem"),
      lineHeight: theme("fontSize.ds-display-lg[1].lineHeight", "1.25"),
      fontWeight: "600",
    },
    ".ds-display-md": {
      fontFamily: displayFamily,
      fontSize: theme("fontSize.ds-display-md[0]", "1.5rem"),
      lineHeight: theme("fontSize.ds-display-md[1].lineHeight", "1.33"),
      fontWeight: "600",
    },
    ".ds-body-lg": {
      fontFamily: sansFamily,
      fontSize: theme("fontSize.ds-body-lg[0]", "1.125rem"),
      lineHeight: theme("fontSize.ds-body-lg[1].lineHeight", "1.56"),
      fontWeight: "400",
    },
    ".ds-body-md": {
      fontFamily: sansFamily,
      fontSize: theme("fontSize.ds-body-md[0]", "1rem"),
      lineHeight: theme("fontSize.ds-body-md[1].lineHeight", "1.5"),
      fontWeight: "400",
    },
    ".ds-body-sm": {
      fontFamily: sansFamily,
      fontSize: theme("fontSize.ds-body-sm[0]", "0.875rem"),
      lineHeight: theme("fontSize.ds-body-sm[1].lineHeight", "1.43"),
      fontWeight: "400",
    },
    ".ds-label": {
      fontFamily: sansFamily,
      fontSize: theme("fontSize.ds-label[0]", "0.75rem"),
      lineHeight: theme("fontSize.ds-label[1].lineHeight", "1.33"),
      fontWeight: "600",
      letterSpacing: "0.04em",
    },
    ".ds-surface": {
      backgroundColor: theme("colors.ds.surface", "#fefdfb"),
      color: theme("colors.ds.text", "#1c1814"),
      borderRadius: theme("borderRadius.ds-md", "0.5rem"),
      borderWidth: "1px",
      borderColor: theme("colors.ds.border", "#e8e6e2"),
    },
    ".ds-surface-muted": {
      backgroundColor: theme("colors.ds.surface-muted", "#f5efe6"),
      color: theme("colors.ds.text", "#1c1814"),
      borderRadius: theme("borderRadius.ds-md", "0.5rem"),
      borderWidth: "1px",
      borderColor: theme("colors.ds.border", "#e8e6e2"),
    },
    ".ds-stack": {
      display: "flex",
      flexDirection: "column",
      gap: theme("spacing.ds-2", "16px"),
    },
    ".ds-stack-tight": {
      display: "flex",
      flexDirection: "column",
      gap: theme("spacing.ds-1", "8px"),
    },
    ".ds-row": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: theme("spacing.ds-2", "16px"),
    },
    ".ds-btn-primary": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: theme("spacing.ds-3", "24px"),
      paddingRight: theme("spacing.ds-3", "24px"),
      paddingTop: theme("spacing.ds-2", "16px"),
      paddingBottom: theme("spacing.ds-2", "16px"),
      borderRadius: theme("borderRadius.ds-md", "0.5rem"),
      fontFamily: sansFamily,
      fontSize: theme("fontSize.ds-body-md[0]", "1rem"),
      lineHeight: theme("fontSize.ds-body-md[1].lineHeight", "1.5"),
      fontWeight: "600",
      backgroundColor: theme("colors.ds.accent", "#c86244"),
      color: theme("colors.ds.on-accent", "#fefdfb"),
      borderWidth: "0",
      transitionProperty:
        "color, background-color, border-color, box-shadow, transform",
      transitionDuration: "150ms",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      "&:hover": {
        backgroundColor: theme("colors.ds.accent-hover", "#9a4228"),
      },
      "&:focus-visible": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: `0 0 0 2px ${theme("colors.ds.canvas", "#faf7f2")}, 0 0 0 4px ${theme("colors.ds.focus-ring", "#c86244")}`,
      },
    },
    ".ds-btn-ghost": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: theme("spacing.ds-2", "16px"),
      paddingRight: theme("spacing.ds-2", "16px"),
      paddingTop: theme("spacing.ds-1", "8px"),
      paddingBottom: theme("spacing.ds-1", "8px"),
      borderRadius: theme("borderRadius.ds-md", "0.5rem"),
      fontFamily: sansFamily,
      fontSize: theme("fontSize.ds-body-md[0]", "1rem"),
      lineHeight: theme("fontSize.ds-body-md[1].lineHeight", "1.5"),
      fontWeight: "600",
      backgroundColor: "transparent",
      color: theme("colors.ds.accent", "#c86244"),
      borderWidth: "0",
      transitionProperty: "color, background-color",
      transitionDuration: "150ms",
      "&:hover": {
        backgroundColor: theme("colors.ds.accent-soft", "#f9eae5"),
      },
      "&:focus-visible": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: `0 0 0 2px ${theme("colors.ds.canvas", "#faf7f2")}, 0 0 0 4px ${theme("colors.ds.focus-ring", "#c86244")}`,
      },
    },
    ".ds-link": {
      color: theme("colors.ds.accent", "#c86244"),
      textDecoration: "underline",
      textUnderlineOffset: "2px",
      fontWeight: "500",
      "&:hover": {
        color: theme("colors.ds.accent-hover", "#9a4228"),
      },
      "&:focus-visible": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: `0 0 0 2px ${theme("colors.ds.canvas", "#faf7f2")}, 0 0 0 4px ${theme("colors.ds.focus-ring", "#c86244")}`,
        borderRadius: "2px",
      },
    },
  });
});
