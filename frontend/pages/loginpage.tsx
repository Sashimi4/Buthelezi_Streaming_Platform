import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../assets/Colors'

export default function LoginPage() {

    const [email, setEmail] = useState()

    const [password, setPasswod] = useState()
  
    return (
      <View style={styles.container}>
        <View style={styles.contentWrapper}>

            {/* Here comes an image of some sort */}
            <View style={styles.image}>
            </View>
            
            <TextInput
            style={styles.inputFields}
            placeholderTextColor={Colors.OFF_WHITE}
            autoComplete='email'
            placeholder="Email"
            autoFocus={true}
            />

            <TextInput
            style={styles.inputFields}
            placeholderTextColor={Colors.OFF_WHITE}
            autoComplete='password'
            placeholder="Password"
            secureTextEntry={true}
            />

            <Pressable
            style={styles.signInButton}
            >
                <Text style={styles.signInButtonText}>Sign up</Text>
            </Pressable>

            <View>
                <Text>New to *Company name* ? Sign Up</Text>
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
        height: '80%',
        backgroundColor: Colors.WHITE,
    },
    signInButton: {
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 15,
        marginVertical: 20,
        backgroundColor: Colors.GREEN,
    },
    signInButtonText: {
        color: Colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
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
  });
