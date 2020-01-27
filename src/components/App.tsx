import React, { useState } from "react";
import { ThemeProvider, Styled, Flex } from "theme-ui";
import Grid from "./Grid";
import GridItem from "./GridItem";
import ColorPalette from "./ColorPalette";
import Typography from "./Typography";
/** @jsx jsx */
import { jsx } from "theme-ui";
import ToggleColorMode from "./ToggleColorMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import ThemeWidget from "./ThemeWidget";
import allDefaultThemes from "../styles/allDefaultThemes";
import ButtonsItem from "./ButtonsItem";
import LinksItem from "./LinksItem";
import { THEME_ID_CUSTOM_THEME } from "../utils/constants";

const ThemeEditorLazy = React.lazy(() => import("./ThemeEditor"));

const App: React.FC = () => {
  const [allThemes, setAllThemes] = useState(allDefaultThemes);
  const isCustomThemeDefined = allThemes.some(
    theme => theme.id === THEME_ID_CUSTOM_THEME
  );
  const [idSelectedTheme, setIdSelectedTheme] = useState("base");
  // @ts-ignore
  const { theme, id } = allThemes.find(t => {
    return t.id === idSelectedTheme;
  });

  const [toggleDesignTokenMode, setToggleDesignTokenMode] = useState(true);
  const isSSR = typeof window === "undefined";

  return (
    <ThemeProvider theme={theme}>
      <Styled.root>
        <Flex sx={{ padding: "20px" }}>
          <FontAwesomeIcon
            onClick={() => setToggleDesignTokenMode(!toggleDesignTokenMode)}
            size="2x"
            color="primary"
            sx={{ cursor: "pointer" }}
            icon={faCog}
          />
          <Styled.h1 sx={{ margin: "0 auto", justifyItems: "center" }}>
            Oh my Theme
          </Styled.h1>
        </Flex>
        <ThemeWidget
          allThemes={allThemes}
          idSelectedTheme={id}
          setTheme={setIdSelectedTheme}
        />
        {/* <ToggleColorMode></ToggleColorMode> */}
        {toggleDesignTokenMode ? (
          <Grid>
            <GridItem title="Colors" gridArea="span 6 / span 1 ">
              <ColorPalette idSelectedTheme={id} />
            </GridItem>
            <GridItem title="Typography" gridArea="span 1 / span 3">
              <Typography></Typography>
            </GridItem>
            <GridItem title="Buttons" gridArea="span 4 / span 2">
              <ButtonsItem variants={Object.keys(theme.buttons as {})} />
            </GridItem>
            <GridItem title="Links" gridArea="span 4 / span 1">
              {/*
  // @ts-ignore */}
              <LinksItem variants={Object.keys(theme.links as {})} />
            </GridItem>
          </Grid>
        ) : (
          <>
            {!isSSR && (
              <React.Suspense fallback={<div>...loading</div>}>
                <ThemeEditorLazy
                  setAllThemes={setAllThemes}
                  idSelectedTheme={id}
                  setSelectedTheme={setIdSelectedTheme}
                  isCustomThemeDefined={isCustomThemeDefined}
                  theme={theme}
                />
              </React.Suspense>
            )}
          </>
        )}
      </Styled.root>
    </ThemeProvider>
  );
};

export default App;
