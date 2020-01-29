import React, { useState } from "react";
import { ThemeProvider, Styled, Flex } from "theme-ui";
import Grid from "./Grid";
import GridItem from "./GridItem";
import Colors from "./styleguide/Colors";
import Typography from "./styleguide/Typography";
/** @jsx jsx */
import { jsx } from "theme-ui";
import ToggleColorMode from "./ToggleColorMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import ThemeWidget from "./ThemeWidget";
import allDefaultThemes from "../styles/allDefaultThemes";
import Buttons from "./styleguide/Buttons";
import Links from "./styleguide/Links";
import { THEME_ID_CUSTOM_THEME } from "../utils/constants";
import Breakpoints from "./styleguide/Breakpoints";
import LoadingIndicators from "./styleguide/LoadingIndicators";
import { Spinner } from "@theme-ui/components";

const ThemeEditorLazy = React.lazy(() => import("./editor/ThemeEditor"));

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
            <GridItem title="Colors" gridArea="colors">
              <Colors idSelectedTheme={id} />
            </GridItem>
            <GridItem title="Typography" gridArea="typography">
              <Typography></Typography>
            </GridItem>
            <GridItem title="Buttons" gridArea="buttons">
              <Buttons variants={Object.keys(theme.buttons as {})} />
            </GridItem>
            <GridItem title="Links" gridArea="links">
              <Links variants={Object.keys(theme.links as {})} />
            </GridItem>
            <GridItem centerContent title="Breakpoints" gridArea="breakpoints">
              <Breakpoints breakpoints={theme.breakpoints} />
            </GridItem>
            <GridItem
              centerContent
              title="Loading Indicators"
              gridArea="loaders"
            >
              <LoadingIndicators />
            </GridItem>
          </Grid>
        ) : (
          <>
            {!isSSR && (
              // <Spinner />
              <React.Suspense fallback={<Spinner />}>
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
