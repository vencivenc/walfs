import * as AppleAuthentication from "expo-apple-authentication";
import {supabase} from "../common/superbase";

export class AuthService {
  static async loginWithApple() {
    console.log('yes')
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      })

      console.log('credentials', credential)
      // Sign in via Supabase Auth.
      if (credential.identityToken) {
        const {
          error,
          data: {user},
        } = await supabase.auth.signInWithIdToken({
          provider: 'apple',
          token: credential.identityToken,
        })
        supabase.auth.getUser()
        console.log('superbase', JSON.stringify({error, user}, null, 2))
        if (!error) {
          // User is signed in.
        }
      } else {
        throw new Error('No identityToken.')
      }
    } catch (e: any) {
      if (e.code === 'ERR_REQUEST_CANCELED') {
        // handle that the user canceled the sign-in flow
      } else {
        // handle other errors
      }
    }
  }
}
