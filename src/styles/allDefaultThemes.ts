import {
  base,
  system,
  funk,
  dark,
  roboto,
  swiss,
  tosh,
  deep,
  bootstrap,
  tailwind,
  future,
} from "@theme-ui/presets";
// import { lighten } from "polished";
import { Theme } from "theme-ui";
import merge from "lodash.merge";
import buttonStyles from "./buttonStyles";
import linkStyles from "./linkStyles";

export interface ThemePreset {
  id: string;
  theme: Theme;
}
const allPresets: ThemePreset[] = [
  { id: "base", theme: base },
  { id: "system", theme: system },
  { id: "funk", theme: funk },
  { id: "future", theme: future },
  { id: "roboto", theme: roboto },
  { id: "swiss", theme: swiss },
  { id: "dark", theme: dark },
  { id: "deep", theme: deep },
  { id: "tosh", theme: tosh },
  { id: "bootstrap", theme: bootstrap },
  { id: "tailwind", theme: tailwind },
];

const allDefaultThemes = allPresets.reduce<ThemePreset[]>((acc, preset) => {
  const mergeTheme = merge(preset.theme, buttonStyles, linkStyles);

  acc.push({
    id: preset.id,
    theme: mergeTheme,
  });

  return acc;
}, []);

export default allDefaultThemes;
