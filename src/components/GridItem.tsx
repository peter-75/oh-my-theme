import React from "react";
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Theme } from "theme-ui";

interface Props {
  title: string;
  gridArea?: string;
  centerContent?: boolean;
}

const GridItem: React.FC<Props> = ({
  title,
  children,
  gridArea = "auto",
  centerContent,
}) => {
  return (
    <div
      sx={{
        borderBottom: (theme: Theme) => `1px solid ${theme.colors?.primary}`,
        borderRight: (theme: Theme) => `1px solid ${theme.colors?.primary}`,
        p: "30px",
        position: "relative",
        gridArea: gridArea,
        ...(centerContent && {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }),
      }}
    >
      <div>{children}</div>
      <Styled.h5
        sx={{
          position: "absolute",
          top: "-10px",
          color: (theme: Theme) => theme.colors?.primary,
          backgroundColor: (theme: Theme) => theme.colors?.background,
          padding: "0 10px",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        {title}
      </Styled.h5>
    </div>
  );
};

export default GridItem;
