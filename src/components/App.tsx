import React, { useContext } from "react";
import { ThemeProvider, Styled } from "theme-ui";
import Grid from "./Grid";
import GridItem from "./GridItem";
import Colors from "./styleguide/Colors";
import Typography from "./styleguide/Typography";
/** @jsx jsx */
import { jsx } from "theme-ui";
import ThemeWidget from "./ThemeWidget";
import Buttons from "./styleguide/Buttons";
import Links from "./styleguide/Links";
import Breakpoints from "./styleguide/Breakpoints";
import LoadingIndicators from "./styleguide/LoadingIndicators";
import { Spinner } from "@theme-ui/components";
import { SettingsContext } from "./context/SettingsProvider";
import { AllThemesContext } from "./context/AllThemesProvider";

const ThemeEditorLazy = React.lazy(() => import("./editor/ThemeEditor"));

const App: React.FC = () => {
  const {
    themes: { allThemes },
    selectedTheme: { idSelectedTheme },
  } = useContext(AllThemesContext);

  // @ts-ignore
  const { theme, id } = allThemes.find(t => {
    return t.id === idSelectedTheme;
  });

  const {
    editorMode: { toggle },
  } = React.useContext(SettingsContext);

  const isSSR = typeof window === "undefined";

  return (
    <ThemeProvider theme={theme}>
      <Styled.root>
        <ThemeWidget />
        {!toggle ? (
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
                <ThemeEditorLazy theme={theme} />
              </React.Suspense>
            )}
          </>
        )}
      </Styled.root>
    </ThemeProvider>
  );
};

export default App;
