import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";
import ColorItem from "./ColorItem";
import { useThemeUI } from "theme-ui";
import ColorCell from "./ColorCell";
import { Flex } from "@theme-ui/components";

interface Props {
  idSelectedTheme: string;
}

const ColorPalette: React.FC<Props> = ({ idSelectedTheme }) => {
  const context = useThemeUI();
  const {
    theme: { colors },
  } = context;

  //@ts-ignore
  const { primary, secondary, ...restColors } = colors;

  return (
    <div>
      <ColorItem key={"primary"} colorKey={"primary"} colorVal={primary} />
      <ColorItem
        key={"secondary"}
        colorKey={"secondary"}
        colorVal={secondary}
      />
      <Flex sx={{ flexWrap: "wrap" }}>
        {Object.entries(restColors as {}).map(([colorKey, colorVal], index) => {
          if (Array.isArray(colorVal) || typeof colorVal === "object") {
            return null;
          }
          return (
            <div key={colorKey} sx={{ p: 2 }}>
              <ColorCell colorKey={colorKey} colorVal={colorVal as string} />
            </div>
          );
        })}
      </Flex>
    </div>
  );
};

export default ColorPalette;
