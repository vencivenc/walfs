import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {
  Button,
  Input,
  Icon,
} from '@rneui/themed';
import {useUser} from '../context/UserContext'
import {UserService} from "../services/user.service";
import {extractErrorMessage} from "../common/error";

type LoginComponentProps = {};

const Login: React.FunctionComponent<LoginComponentProps> = () => {
  const {setUser} = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  const login = async () => {
    if (!name) {
      return;
    }

    setLoading(true);
    try {
      const data = await UserService.login(name);
      if (data) {
        setUser(data)
      }
    } catch (e: any) {
      alert(extractErrorMessage(e))
    } finally {
      setLoading(false);
    }
  }

  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          marginVertical: 10,
          fontWeight: '300',
        }}
      >
        Login
      </Text>
      <Input
        leftIcon={
          <Icon
            name="user"
            type="simple-line-icon"
            size={25}
          />
        }
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
        autoCapitalize="none"
        onSubmitEditing={login}
      />
      <Button containerStyle={styles.button} onPress={login} loading={loading}>Login</Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 9,
  },
  input: {
  }
});
