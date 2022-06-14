import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../assets/Colors'

export default function LoginPage() {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')
  
    return (
      <View style={styles.container}>
        
        {/* Here comes an image of some sort */}
        <View style={styles.image}>
            <Text> - Image here - </Text>
        </View>

        <View style={styles.contentWrapper}>

            <View style={styles.inputFieldWrapper}>
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
            </View>

            <Pressable style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Sign up</Text>
            </Pressable>

            <View style={styles.registrationTextWrapper}>
                <Text style={styles.registrationText}>New to *Company name* ?</Text><Text style={styles.registrationLink}> Sign Up </Text>
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
    registrationLink: {
        color:Colors.WHITE,
        fontWeight: 'bold',
    },
  });
