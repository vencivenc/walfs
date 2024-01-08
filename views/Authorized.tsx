import React, {useEffect} from 'react';
import {Text, View, AppState, StyleSheet, Linking} from 'react-native';
import {useUser} from '../context/UserContext'
import Game from "./Game";
import GameSelect from "./GameSelect";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header as HeaderRNE, HeaderProps, Icon} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';

type HeaderComponentProps = {
  title: string;
  view?: string;
};

type ParamList = {
  Detail: {
    openDrawer: void;
  };
};

const Authorized: React.FunctionComponent = () => {
  const {user, game, setUser, setGame} = useUser();
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) => console.log(state))

    return () => {
      subscription.remove();
    }
  }, []);

  const logoutHandler = () => {
    setUser(null);
    setGame(null);
  };

  return (
    <SafeAreaProvider>
      <HeaderRNE
        leftComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={logoutHandler}>
              <Icon name="logout" color="white" />
            </TouchableOpacity>
          </View>
        }
        rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={logoutHandler}>
              <Icon name="logout" color="white" />
            </TouchableOpacity>
          </View>
        }
        centerComponent={{text: 'Wolfy', style: styles.heading}}
      />
      <View>
        {game && <Game />}
        {!game && <GameSelect />}
      </View>
    </SafeAreaProvider>
  );
};

export default Authorized;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
