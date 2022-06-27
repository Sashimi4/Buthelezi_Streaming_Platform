import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../assets/Colors'
import Logo from '../atoms/Logo';
import { AuthContext } from '../functional/AuthContext';

export default function LoginPage() {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const val = useContext(AuthContext); // => save the found user for quick access

    const performLogin = async () => {
      try { //                        Use actual IP to resolve double local host issue  
        const response = await fetch(`http://192.168.0.226:8080/login`, { //issue here if the movie has special characters and 
          method: 'POST',
          mode: 'cors',
          headers: {
              'Authorization': 'Basic ' + btoa(email + ":" + password)
          },
        });
        const json = await response.json();
        console.log(json);
      } catch(error) {
        console.error(error)
        //Error Handling here
      } finally {
      }
    }
  
    return (
      <View style={styles.container}>
        
        <Logo/>

        <View style={styles.contentWrapper}>

            <KeyboardAvoidingView style={styles.inputFieldWrapper}>
                <TextInput
                style={styles.inputFields}
                placeholderTextColor={Colors.OFF_WHITE}
                autoComplete='email'
                placeholder="Email"
                autoFocus={true}
                value={email}
                onChangeText={(input) => setEmail(input)}
                />

                <View style={styles.errorTextMessageWrapper}>
                    <Text style={styles.errorTextMessage}>error messages</Text>
                </View>

                <TextInput
                style={styles.inputFields}
                placeholderTextColor={Colors.OFF_WHITE}
                autoComplete='password'
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(input) => setPassword(input)}
                />
            </KeyboardAvoidingView>

            <Pressable style={styles.signInButton} onPress={performLogin}>
                <Text style={styles.signInButtonText}>Sign In</Text>
            </Pressable>

            <View style={styles.registrationTextWrapper}>
                <Text style={styles.registrationText}>New to *Company name* ?</Text><Text style={styles.registrationLink}> Sign Up now</Text>
            </View>

        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.BACKGROUND_BLACK,
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentWrapper: {
        width: '80%',
        height: '50%',
    },
    signInButton: {
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 15,
        marginVertical: 20,
        backgroundColor: Colors.GREEN,
        marginBottom: 80,
    },
    signInButtonText: {
        color: Colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputFieldWrapper: {
        marginVertical: 20,
    },
    inputFields: {
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 15,
        backgroundColor: Colors.LIGHT_BLACK,
        color: Colors.WHITE,
    },
    image: {
        backgroundColor: 'yellow',
    },
    errorTextMessageWrapper: {
        backgroundColor: Colors.BACKGROUND_BLACK,
        borderRadius: 20,
        alignItems: 'flex-start',
        borderColor: Colors.RED,
        borderWidth: 2,
        paddingVertical: 3,
    },
    errorTextMessage: {
        color: Colors.RED,
        paddingLeft: 10,
        paddingRight: 10,
    },
    registrationTextWrapper: {

    },
    registrationText: {
        color: Colors.OFF_WHITE,
    },
    registrationLink: {
        color:Colors.WHITE,
        fontWeight: 'bold',
    },
  });
