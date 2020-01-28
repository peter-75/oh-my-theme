import React from "react";
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Flex } from "@theme-ui/components";
import { motion } from "framer-motion";
import { ThemePreset } from "../styles/allDefaultThemes";

interface Props {
  allThemes: ThemePreset[];
  idSelectedTheme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
const ThemeWidget: React.FC<Props> = ({
  allThemes,
  idSelectedTheme,
  setTheme,
}) => {
  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "baseline",
        flexWrap: "wrap",
      }}
    >
      {allThemes.map(({ theme, id }) => (
        <Flex
          key={id}
          sx={{
            margin: "0 10px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={() => setTheme(id)}
            sx={{
              width: idSelectedTheme === id ? "60px" : "50px",
              height: idSelectedTheme === id ? "60px" : "50px",
              cursor: "pointer",
              boxShadow:
                "0 0 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)",
              borderRadius: "50%",
              border: "6px solid #ffffff",
              background: `linear-gradient(to right, ${theme.colors?.primary} 50%, ${theme.colors?.secondary} 50%)`,
              "&:hover": {
                boxShadow:
                  "0 0 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.2)",
              },
            }}
          />
          <Styled.h5 sx={{ textAlign: "center", marginTop: "5px" }}>
            {id}
          </Styled.h5>
        </Flex>
      ))}
    </Flex>
  );
};

export default ThemeWidget;
