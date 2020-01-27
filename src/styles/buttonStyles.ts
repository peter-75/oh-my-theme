import { lighten } from "@theme-ui/color";

export default {
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      cursor: "pointer",
    },
    secondary: {
      color: "background",
      bg: "secondary",
      cursor: "pointer",
    },
    disabled: {
      color: "background",
      bg: lighten("primary", 0.4),
      cursor: "not-allowed",
    },
  },
};
