import allDefaultThemes, { ThemePreset } from "../../styles/allDefaultThemes";
import React, { useState } from "react";
import { THEME_ID_CUSTOM_THEME } from "../../utils/constants";

interface CtxAllThemesInterface {
  themes: {
    allThemes: ThemePreset[];
    setAllThemes: React.Dispatch<React.SetStateAction<ThemePreset[]>>;
  };
  selectedTheme: {
    idSelectedTheme: string;
    setIdSelectedTheme: React.Dispatch<React.SetStateAction<string>>;
  };
  customTheme: boolean;
}

export const AllThemesContext = React.createContext<CtxAllThemesInterface>({
  themes: {
    allThemes: [],
    setAllThemes: () => {},
  },
  selectedTheme: {
    idSelectedTheme: "",
    setIdSelectedTheme: () => {},
  },
  customTheme: false,
});

const AllThemesProvider = ({ children }) => {
  const [allThemes, setAllThemes] = useState(allDefaultThemes);
  const [idSelectedTheme, setIdSelectedTheme] = useState("base");
  const isCustomThemeDefined = allThemes.some(
    theme => theme.id === THEME_ID_CUSTOM_THEME
  );
  const themesValue = {
    themes: {
      allThemes: allThemes,
      setAllThemes: setAllThemes,
    },
    selectedTheme: {
      idSelectedTheme: idSelectedTheme,
      setIdSelectedTheme: setIdSelectedTheme,
    },
    customTheme: isCustomThemeDefined,
  };

  return (
    <AllThemesContext.Provider value={themesValue}>
      {children}
    </AllThemesContext.Provider>
  );
};

export default AllThemesProvider;
