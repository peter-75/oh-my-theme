import React, { useState } from "react";

interface CtxSettingsInterface {
  editorMode: {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export const SettingsContext = React.createContext<CtxSettingsInterface>({
  editorMode: { toggle: false, setToggle: () => {} },
});

const SettingsProvider = ({ children }) => {
  const [toggleEditorMode, setToggleEditorMode] = useState(false);

  const settings = {
    editorMode: {
      toggle: toggleEditorMode,
      setToggle: setToggleEditorMode,
    },
  };

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
