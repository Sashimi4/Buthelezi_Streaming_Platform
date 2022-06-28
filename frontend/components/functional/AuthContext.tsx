import React, { createContext } from 'react'
import Auth0 from 'react-native-auth0'


const auth0 = new Auth0({ domain: 'dev-iztxu63b.us.auth0.com', clientId: 'I99L9uTi1IJjpO1MdvUrTiW491o1th2d' });

auth0.webAuth
  .authorize({scope: 'openid email profile'})
  .then(credentials => console.log(credentials))
  .catch(error => console.log(error));




//export const AuthContext = createContext(auth0);

export const AuthProvider = ({children}) => {
    return (
        <Text>Hello</Text>
    );
}
