import React, {Dispatch, ReactElement, ReactNode, SetStateAction,} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ColorMode, THEME_STORAGE_KEY} from "../common/constants";

type ThemeContextType = {
  colorMode?: ColorMode;
  setColorMode?: Dispatch<SetStateAction<ColorMode>>;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  colorMode: ColorMode.LIGHT_COLOR_MODE,
  setColorMode: (_) => {
  },
});

const ThemeProvider = (props: { children: ReactNode }): ReactElement => {
  const [colorMode, setColorMode] = React.useState<ColorMode>(ColorMode.LIGHT_COLOR_MODE);

  const setColorModeHandler = (colorMode: any): void => {
    setColorMode(colorMode);
    AsyncStorage.setItem(THEME_STORAGE_KEY, colorMode != null ? colorMode : '').then(_ => {
    });
  }

  return <ThemeContext.Provider {...props} value={{colorMode, setColorMode: setColorModeHandler}} />;
};

export {ThemeProvider};
