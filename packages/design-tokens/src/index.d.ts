export const colors: {
  cream: Record<"0" | "50" | "100" | "200", string>;
  ink: Record<"900" | "700" | "500" | "300", string>;
  line: Record<"200" | "100", string>;
  terracotta: Record<"600" | "500" | "400" | "focus", string>;
  surface: Record<"raised", string>;
  overlay: Record<"scrim", string>;
};

export const spacing: Record<
  | "0"
  | "px"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "12"
  | "16"
  | "20"
  | "24",
  string
>;

export const borderRadius: Record<
  "none" | "sm" | "md" | "lg" | "xl" | "full",
  string
>;

export const fontFamily: {
  display: [string];
  body: [string];
};

export const fontSize: Record<
  "display-xl" | "display-lg" | "title" | "body" | "body-sm" | "label",
  [string, { lineHeight: string; letterSpacing: string }]
>;

export const tokens: {
  colors: typeof colors;
  spacing: typeof spacing;
  borderRadius: typeof borderRadius;
  fontFamily: typeof fontFamily;
  fontSize: typeof fontSize;
};

export default tokens;
