import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import React, {useContext} from "react";
import {StyleSheet} from "react-native";
import {ThemeContext} from "../../context/ThemeContext";
import {supabase} from "../../common/superbase";

export const GoogleLoginButton: React.FunctionComponent = () => {
  const {colorMode} = useContext(ThemeContext);

  return <GoogleSigninButton
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={async () => {
      try {
        await GoogleSignin.hasPlayServices()
        const userInfo = await GoogleSignin.signIn()
        if (userInfo.idToken) {
          const { data, error } = await supabase.auth.signInWithIdToken({
            provider: 'google',
            token: userInfo.idToken,
          })
          console.log(error, data)
        } else {
          throw new Error('no ID token present!')
        }
      } catch (error: any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    }}
  />
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 20,
  },
});
