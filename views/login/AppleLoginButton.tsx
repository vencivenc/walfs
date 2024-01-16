import * as AppleAuthentication from "expo-apple-authentication";
import {ColorMode} from "../../common/constants";
import {AuthService} from "../../services/auth.service";
import React, {useContext} from "react";
import {StyleSheet} from "react-native";
import {ThemeContext} from "../../context/ThemeContext";

export const AppleLoginButton: React.FunctionComponent = () => {
  const {colorMode} = useContext(ThemeContext);

  return <AppleAuthentication.AppleAuthenticationButton
    buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
    buttonStyle={colorMode === ColorMode.DARK_COLOR_MODE ? AppleAuthentication.AppleAuthenticationButtonStyle.WHITE_OUTLINE : AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
    cornerRadius={5}
    style={styles.button}
    onPress={() => AuthService.loginWithApple()}
  />
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 20,
  },
});
