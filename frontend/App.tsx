import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import AuthenticatedNavigator from './components/functional/AuthenticatedNavigator'
import UnauthenticatedNavigator from './components/functional/UnauthenticatedNavigator'
import { NavigationContainer } from '@react-navigation/native'
import LoadingIcon from './components/atoms/LoadingIcon'
import Colors from './assets/Colors'
import { useEffect, useMemo, useState } from 'react'
import { AuthContext } from './components/auth/Context'
import { useReducer } from 'react'
import { storeToken, retreiveToken, removeToken } from './components/functional/Storage'

export default function App() {

  const initialLoginState = {
    isLoading: true,
    email: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
        case 'LOGIN':
        return {
          ...prevState,
          userEmail: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userEmail: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userEmail: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const config = {
      screens: {
          Home:'home',
          Search: 'search/:keyword',
          Downloads: 'downloads',
          Profile: 'profile',
          Movie: 'movie',
          Login: 'login',
          Registration: 'registration',
          PictureSelection: 'pictureSelection',
          VideoPlayer: 'videoPlayer'
      },
  };

  const linking = {
      prefixes: ['https://streamies.com', 'streamies://'],
      config,
  };

  const authContext = React.useMemo(() => ({
    signIn: async (userEmail) => {
      await storeToken(userEmail)
      dispatch({ type: 'LOGIN', id: userEmail, token: await retreiveToken()});
    },
    signOut: async () => {
      await removeToken()
      dispatch({ type: 'LOGOUT' })
    },
    signUp: async (userEmail) => {
      await storeToken(userEmail)
      dispatch({ type: 'REGISTER', id: userEmail, token: await retreiveToken()});
    },
  }))

  useEffect(() => {
    setTimeout(async ()=> {
      dispatch({type: 'RETRIEVE_TOKEN', token: await retreiveToken()});
    }, 1000)
  }, []);

  if( loginState.isLoading ) {
    return (
      <View style={styles.container}>
          <LoadingIcon/>
      </View>
    )
  }
  
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer linking={linking} fallback={<LoadingIcon/>}>
        { loginState.userToken !== null ? (
          <AuthenticatedNavigator/> 
        ) : 
          <UnauthenticatedNavigator/>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_BLACK,
    flex: 1,
  }
});
