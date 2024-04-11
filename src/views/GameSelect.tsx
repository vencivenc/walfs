import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useUser} from '../context/UserContext'
import {Button, Icon, Input, Divider} from "@rneui/themed";
import {GameService} from "../services/game.service";

const GameSelect: React.FunctionComponent = () => {
  const [loadingJoin, setLoadingJoin] = useState<boolean>(false);
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const {user, game, setGame} = useUser();

  const joinGameHandler = async () => {
    if (!code || !user) {
      return
    }

    setLoadingJoin(true);
    try {
      const data = await GameService.join(user, code);
      if (data) {
        setGame(data)
      }
    } finally {
      setLoadingJoin(false);
    }
  }
  const createNewGameHandler = async () => {
    if (!user) {
      return
    }

    setLoadingCreate(true);
    try {
      const data = await GameService.create(user);
      if (data) {
        setGame(data)
      }
    } finally {
      setLoadingCreate(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          marginVertical: 10,
          fontWeight: '300',
        }}
      >
        Game select
      </Text>
      <Input
        leftIcon={
          <Icon
            name="terminal"
            type="font-awesome"
            size={25}
          />
        }
        containerStyle={styles.input}
        value={code}
        onChangeText={setCode}
        placeholder="Enter game code"
        autoCapitalize="characters"
        onSubmitEditing={joinGameHandler}
      />
      <Button containerStyle={styles.button} onPress={joinGameHandler} loading={loadingJoin} disabled={loadingCreate}>Join existing game</Button>
      <Divider style={styles.divider} />
      <Button containerStyle={styles.buttonHost} onPress={createNewGameHandler} loading={loadingCreate} disabled={loadingJoin}>Host new game</Button>
    </View>
  );
};

export default GameSelect;

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
  buttonHost: {
    marginTop: 10,
  },
  input: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  fonts: {
    marginBottom: 8,
  },
  divider: {
    color: "#000",
    paddingTop: 10,
  },
  container: {
    padding: 10
  }
});
