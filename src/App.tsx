import React from "react";
import {useFonts} from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import Layout from "./views/Layout";
import {UserProvider} from "./context/UserContext";
import {ThemeProvider} from "./context/ThemeContext";
import {GameProvider} from "./context/GameContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserProvider>
      <GameProvider>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      </GameProvider>
    </UserProvider>
  );
}
