import React from 'react';
import {
  Center,
  Box,
  FormControl,
  InputField, Input, ButtonText, VStack,
} from "@gluestack-ui/themed";
import {Button} from "@rneui/themed";
import {AppleLoginButton} from "./AppleLoginButton";
import {supabase} from "../../common/superbase";
// import {GoogleLoginButton} from "./GoogleLoginButton";

const Login: React.FunctionComponent = () => {
  const [userName, setUserName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  const onSubmit = async () => {
    setLoading(true)
    try {
      const {data, error} = await supabase.auth.signInWithPassword({
        email: userName,
        password: password,
      })
      console.log(data, error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Center h="100%" w="100%">
      <Box w="90%">
        <VStack space="md">
          <FormControl>
            <Input>
              <InputField placeholder="Username" inputMode="email" autoComplete="email" onChangeText={setUserName} style={{width: "100%"}} />
            </Input>
          </FormControl>
          <FormControl>
            <Input>
              <InputField placeholder="Password" type="password" onChangeText={setPassword} style={{width: "100%"}} />
            </Input>
          </FormControl>
          <FormControl>
            <Button bg="$darkBlue600" onPress={onSubmit} disabled={loading}>
              {loading && <>
                  <ButtonText fontWeight="$medium" fontSize="$sm">
                      Please wait...
                  </ButtonText>
              </>}

              {!loading && <ButtonText fontSize="$sm" fontWeight="$medium">
                  Login
              </ButtonText>}
            </Button>
          </FormControl>

          <AppleLoginButton />
        </VStack>
      </Box>
    </Center>

  );
};

export default Login;
