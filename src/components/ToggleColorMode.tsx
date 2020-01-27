import React from "react";
import { Button } from "@theme-ui/components";
import { useColorMode, useThemeUI } from "theme-ui";
import { isThemeWithMode } from "../utils/themeUtility";

interface Props {}

const ToggleColorMode: React.FC<Props> = () => {
  const [colorMode, setColorMode] = useColorMode();
  const { theme } = useThemeUI();
  const themeWithMode = isThemeWithMode(theme);
  const toggleMode = e => {
    setColorMode(
      colorMode === "dark" ? theme.initialColorMode || "default" : "dark"
    );
  };

  if (!themeWithMode) return null;

  return (
    <Button variant="secondary" title="Toggle Dark Mode" onClick={toggleMode}>
      {colorMode}
    </Button>
  );
};

export default ToggleColorMode;
