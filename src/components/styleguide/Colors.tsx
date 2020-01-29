import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";
import ColorPalette from "./ColorPalette";
import { useThemeUI } from "theme-ui";
import ColorCell from "./ColorCell";
import { Flex } from "@theme-ui/components";

interface Props {
  idSelectedTheme: string;
}

const Colors: React.FC<Props> = ({ idSelectedTheme }) => {
  const context = useThemeUI();
  const {
    theme: { colors },
  } = context;

  //@ts-ignore
  const { primary, secondary, ...restColors } = colors;

  return (
    <div>
      <ColorPalette key={"primary"} colorKey={"primary"} colorVal={primary} />
      <ColorPalette
        key={"secondary"}
        colorKey={"secondary"}
        colorVal={secondary}
      />
      <Flex sx={{ flexWrap: "wrap" }}>
        {Object.entries(restColors as {}).map(([colorKey, colorVal], index) => {
          if (
            Array.isArray(colorVal) ||
            typeof colorVal === "object" ||
            colorKey === "background"
          ) {
            return null;
          }
          return (
            <div key={colorKey} sx={{ padding: "0 5px" }}>
              <ColorCell colorKey={colorKey} colorVal={colorVal as string} />
            </div>
          );
        })}
      </Flex>
    </div>
  );
};

export default Colors;
