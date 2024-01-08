import React, {useEffect} from 'react';
import Login from "./Login";
import {useUser} from "../context/UserContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Authorized from "./Authorized";
import {
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const Layout: React.FunctionComponent = () => {
  const {user, setUser} = useUser();

  useEffect(() => {
    const init = async () => {
      const data = await AsyncStorage.getItem('user');

      if (data) {
        setUser(JSON.parse(data))
      }
    };

    init().then(_ => {
    });
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      enabled
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 84}
    >
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.container}>
        {!user && <Login />}
        {user && <Authorized />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Layout;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: '#293046',
    width: '100%',
    height: SCREEN_HEIGHT,
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
