import React from 'react';
import { useState } from 'react';
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../assets/Colors'
import Logo from '../atoms/Logo';

export default function RegistrationPage() {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [confirmationPassword, setConfirmationPassword] = useState('')
  
    return (
      <View style={styles.container}>
        
        {/* Here comes an image of some sort */}
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

                <TextInput
                style={styles.inputFields}
                placeholderTextColor={Colors.OFF_WHITE}
                autoComplete='password'
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(input) => setPassword(input)}
                />

                <View style={styles.errorTextMessageWrapper}>
                    <Text style={styles.errorTextMessage}>error messages</Text>
                </View>

                <TextInput
                style={styles.inputFields}
                placeholderTextColor={Colors.OFF_WHITE}
                autoComplete='password'
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={confirmationPassword}
                onChangeText={(input) => setConfirmationPassword(input)}
                />

                <View style={styles.errorTextMessageWrapper}>
                    <Text style={styles.errorTextMessage}>Cofirm error messages</Text>
                </View>
            </KeyboardAvoidingView>

            <Pressable style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Sign up</Text>
            </Pressable>

        

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
        backgroundColor: Colors.BACKGROUND_BLACK,
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
    registrationTextWrapper: {

    },
    registrationText: {
        color: Colors.OFF_WHITE,
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
    registrationLink: {
        color: Colors.WHITE,
        fontWeight: 'bold',
    },
  });
