import React, {useEffect} from 'react';
import {AppState, StyleSheet, Dimensions, StatusBar} from 'react-native';
import Tabs from "../components/Tabs";
import {Home, Gamepad2, User} from "lucide-react-native";
import {Box} from "@gluestack-ui/themed";
import MobileProfilePage from "./profile/MobileProfilePage";
import HomePage from "./home/HomePage";
import GamePage from "./game/GamePage";

const SCREEN_HEIGHT = Dimensions.get('window').height;

const bottomTabs = [
  {
    icon: Home,
    label: "Home",
  },
  {
    icon: Gamepad2,
    label: "Game",
  },
  {
    icon: User,
    label: "Profile",
  },
];

const Authorized: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = React.useState("Home");

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) => console.log(state))

    return () => {
      subscription.remove();
    }
  }, []);

  return (
    <>
      <Box
        flex={1}
        sx={{
          _light: {bg: "white"},
          _dark: {bg: "$backgroundDark950"},
        }}
      >
        <StatusBar />

        <Box flex={1}>
          <HomePage isActive={activeTab === "Home"} />
          <GamePage isActive={activeTab === "Game"} />
          <MobileProfilePage isActive={activeTab === "Profile"} />
        </Box>

        <Box
          h={72}
          alignItems="center"
          w="100%"
          sx={{
            "@md": {
              display: "none",
            },
            _dark: {borderColor: "$borderDark900"},
          }}
          borderTopWidth="$1"
          borderColor="$borderLight50"
        >
          <Tabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            bottomTabs={bottomTabs}
          />
        </Box>
      </Box>
    </>
  );
};

export default Authorized;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: '#293046',
    width: '100%',
    height: SCREEN_HEIGHT + 60,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  keyboardAvoidingView: {
    // backgroundColor: '#293046',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
