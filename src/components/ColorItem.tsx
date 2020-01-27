import React from "react";
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { darken, lighten } from "polished";

interface Props {
  colorKey: string;
  colorVal: string | undefined;
}

const ColorItem: React.FC<Props> = ({ colorKey, colorVal = "primary" }) => {
  return (
    <div
      sx={{
        display: "grid",
        gridGap: 0,
        grid: "80px 45px min-content/repeat(5, minmax(50px, 1fr))",
      }}
    >
      <div
        sx={{
          gridColumn: "span 5",
          bg: colorVal,
        }}
      ></div>
      <div
        sx={{
          bg: lighten(0.3, colorVal),
        }}
      ></div>
      <div
        sx={{
          bg: lighten(0.2, colorVal),
        }}
      ></div>
      <div
        sx={{
          bg: lighten(0.1, colorVal),
        }}
      ></div>
      <div
        sx={{
          bg: darken(0.1, colorVal),
        }}
      ></div>
      <div
        sx={{
          bg: darken(0.2, colorVal),
        }}
      ></div>
      <Styled.h5>{colorKey}</Styled.h5>
    </div>
  );
};

export default ColorItem;
