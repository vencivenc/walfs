import React from 'react';
import {UserProvider} from "./context/UserContext";
import Layout from "./views/Layout";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const App: React.FunctionComponent = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <UserProvider>
        <Layout />
      </UserProvider>
    </GestureHandlerRootView>
  );
};

// noinspection JSUnusedGlobalSymbols
export default App;
