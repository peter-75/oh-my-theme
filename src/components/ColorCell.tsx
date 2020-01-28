import React from "react";
/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
interface Props {
  colorKey: string;
  colorVal: string;
}

const ColorCell: React.FC<Props> = ({ colorKey, colorVal }) => {
  return (
    <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
      <div sx={{ backgroundColor: colorVal, height: "25px", width: "25px" }} />
      <p>{colorKey}</p>
    </Flex>
  );
};

export default ColorCell;
