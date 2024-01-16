import React from 'react';
import {
  Center,
  Box,
  FormControl,
  InputField, Input, ButtonText, VStack,
} from "@gluestack-ui/themed";
import {Button} from "@rneui/themed";
import {AppleLoginButton} from "./AppleLoginButton";
// import {GoogleLoginButton} from "./GoogleLoginButton";

const Login: React.FunctionComponent = () => {
  console.log('yessss')
  return (
    <Center h="100%" w="100%">
      <Box w="90%">
        <VStack space="md">
          <FormControl>
            <Input>
              <InputField placeholder="Username" style={{width: "100%"}} />
            </Input>
          </FormControl>
          <FormControl>
            <Button bg="$darkBlue600">
              <ButtonText fontSize="$sm" fontWeight="$medium">
                Login
              </ButtonText>
            </Button>
          </FormControl>

          <AppleLoginButton />
        </VStack>
      </Box>
    </Center>

  );
};

export default Login;
