import React, { useContext } from "react";
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Flex } from "@theme-ui/components";
import { motion } from "framer-motion";
import { AllThemesContext } from "./context/AllThemesProvider";

const ThemeWidget: React.FC = () => {
  const {
    themes: { allThemes },
    selectedTheme: { idSelectedTheme, setIdSelectedTheme },
  } = useContext(AllThemesContext);
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
            onClick={() => setIdSelectedTheme(id)}
            sx={{
              width: idSelectedTheme === id ? "60px" : "50px",
              height: idSelectedTheme === id ? "60px" : "50px",
              cursor: "pointer",
              boxShadow:
                "0 0 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)",
              borderRadius: "50%",
              border: "6px solid #ffffff",
              // outline: "none",
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
