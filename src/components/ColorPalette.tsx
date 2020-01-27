import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";
import ColorItem from "./ColorItem";
import { useThemeUI } from "theme-ui";

interface Props {
  idSelectedTheme: string;
}

const ColorPalette: React.FC<Props> = ({ idSelectedTheme }) => {
  const context = useThemeUI();
  const {
    theme: { colors },
  } = context;

  return (
    <div>
      {Object.entries(colors as {}).map(([colorKey, colorVal], index) => {
        if (
          colorKey === "modes" ||
          colorKey === "background" ||
          colorKey === "text" ||
          colorKey === "black" ||
          colorKey === "white" ||
          colorKey === "transparent" ||
          (idSelectedTheme === "deep" &&
            (colorKey === "gray" || colorKey === "muted"))
        ) {
          return null;
        }
        if (Array.isArray(colorVal)) {
          return null;
        }
        return (
          <ColorItem
            key={colorKey}
            colorKey={colorKey}
            colorVal={colorVal as string}
          />
        );
      })}
    </div>
  );
};

export default ColorPalette;
