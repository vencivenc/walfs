import React, {useContext, useEffect} from 'react';
import Login from "./login/Login";
import {useUser} from "../context/UserContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Authorized from "./Authorized";
import {Platform, SafeAreaView, StyleSheet,} from 'react-native';
import {GluestackUIProvider, KeyboardAvoidingView} from '@gluestack-ui/themed';
import {config} from "../../gluestack-ui.config";
import {ThemeContext} from "../context/ThemeContext";
import {ColorMode, GAME_STORAGE_KEY, THEME_STORAGE_KEY} from "../common/constants";

const Layout: React.FunctionComponent = () => {
  const {user} = useUser();
  const {colorMode, setColorMode} = useContext(ThemeContext);

  useEffect(() => {
    const init = async () => {
      const gameStorage = await AsyncStorage.getItem(GAME_STORAGE_KEY);

      if (gameStorage) {
        // setGame(JSON.parse(gameStorage))
      }

      const colorModeStorage: any = await AsyncStorage.getItem(THEME_STORAGE_KEY);

      if (colorModeStorage && setColorMode) {
        setColorMode(colorModeStorage)
      }
    };

    init().then(_ => {
    });
  }, []);

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: colorMode === ColorMode.LIGHT_COLOR_MODE ? "#E5E5E5" : "#262626",
        }}
      />
      {/* bottom SafeAreaView */}
      <SafeAreaView
        style={{
          ...styles.container,
          backgroundColor: colorMode === ColorMode.LIGHT_COLOR_MODE ? "white" : "#171717",
        }}
      >
        <GluestackUIProvider config={config} colorMode={colorMode}>
          <KeyboardAvoidingView
            style={styles.keyboardAvoidingView}
            enabled
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 84}
          >
            {!user && <Login />}
            {user && <Authorized />}
          </KeyboardAvoidingView>
        </GluestackUIProvider>
      </SafeAreaView>
    </>

  );
};
export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  keyboardAvoidingView: {
    // backgroundColor: '#293046',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
