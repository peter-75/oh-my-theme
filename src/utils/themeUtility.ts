import { Theme } from "theme-ui";

export const isThemeWithMode = (theme: Theme) => {
  return theme.colors?.hasOwnProperty("modes");
};
