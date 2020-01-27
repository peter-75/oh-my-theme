import React, { useRef, useEffect } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import { Theme } from "theme-ui";
import { Button, Flex } from "@theme-ui/components";
import { ThemePreset } from "../styles/allDefaultThemes";
import { THEME_ID_CUSTOM_THEME } from "../utils/constants";

interface Props {
  theme: Theme;
  idSelectedTheme: string;
  setAllThemes: React.Dispatch<React.SetStateAction<ThemePreset[]>>;
  setSelectedTheme: React.Dispatch<React.SetStateAction<string>>;
  isCustomThemeDefined: boolean;
}

const ThemeEditor: React.FC<Props> = ({
  setAllThemes,
  theme,
  idSelectedTheme,
  setSelectedTheme,
  isCustomThemeDefined,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    // @ts-ignore
    ref.current.editor.execCommand("foldall");
    // @ts-ignore
    ref.current.editor.execCommand("unfold");
  }, [idSelectedTheme]);

  const handleUpdateTheme = () => {
    if (ref && ref.current) {
      // @ts-ignore
      const newTheme = JSON.parse(ref.current.editor.getValue());

      setAllThemes(prevState => {
        if (prevState.find(theme => theme.id === THEME_ID_CUSTOM_THEME)) {
          const filteredPrevState = prevState.filter(
            theme => theme.id !== THEME_ID_CUSTOM_THEME
          );
          return [
            { theme: newTheme, id: THEME_ID_CUSTOM_THEME },
            ...filteredPrevState,
          ];
        }
        return [{ theme: newTheme, id: THEME_ID_CUSTOM_THEME }, ...prevState];
      });
      setSelectedTheme(THEME_ID_CUSTOM_THEME);
    }
  };

  return (
    <div>
      <Flex sx={{ justifyContent: "center", margin: "20px 0" }}>
        <Button onClick={handleUpdateTheme}>
          {isCustomThemeDefined
            ? "Update your Custom Theme"
            : "Create your Custom Theme"}
        </Button>
      </Flex>

      <AceEditor
        ref={ref}
        style={{ margin: "0 auto" }}
        mode="json"
        value={JSON.stringify(theme, null, 2)}
        theme="monokai"
        name="theme-json-editor"
        wrapEnabled={true}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default ThemeEditor;
