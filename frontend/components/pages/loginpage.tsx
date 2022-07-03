import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../assets/Colors'
import Logo from '../atoms/Logo';
//import { AuthContext } from '../functional/AuthContext';

import * as yup from 'yup'
import { Formik } from 'formik'
import { useAuth0 } from '@auth0/auth0-react';
import { AuthContext } from '../auth/Context';
import { loginUser } from '../functional/PerformLogin';

export default function LoginPage( { navigation } ) {

    const { signIn } = React.useContext(AuthContext)

    const loginValidationSchema = yup.object().shape({
      email: yup
        .string()
        .email("Please enter a valid email")
        .required('Email Address is Required'),

      password: yup
      .string()
      .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is Required')
    })
  
    return (
      <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: ''}}
            onSubmit={values => {
              loginUser(values.email, values.password)
              signIn(values.email, values.password)//if succesful call signIn
            }}
            >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  isValid,
                  touched,
                }) => (

        <View style={styles.container}>
        
            <Logo/>

            <View style={styles.contentWrapper}>

                    <KeyboardAvoidingView style={styles.inputFieldWrapper}>
                        <TextInput
                        style={styles.inputFields}
                        placeholderTextColor={Colors.OFF_WHITE}
                        autoComplete='email'
                        autoFocus={true}
                        placeholder="Email"
                        onBlur={handleBlur('email')}
                        onChangeText={handleChange('email')}
                        value={values.email}
                        keyboardType="email-address"
                        />

                        {errors.email && touched.email &&
                            <View style={styles.errorTextMessageWrapper}>
                                <Text style={styles.errorTextMessage}>{errors.email}</Text>
                            </View>
                        }

                        <TextInput
                        style={styles.inputFields}
                        placeholderTextColor={Colors.OFF_WHITE}
                        autoComplete='password'
                        placeholder="Password"
                        onBlur={handleBlur('password')}
                        onChangeText={handleChange('password')}
                        value={values.password}
                        secureTextEntry={true}
                        />

                        {errors.password && touched.password &&
                            <View style={styles.errorTextMessageWrapper}>
                                <Text style={styles.errorTextMessage}>{errors.password}</Text>
                            </View>
                        }
                        
                </KeyboardAvoidingView>

                <View style={styles.registrationTextWrapper}>
                  <Text style={styles.registrationText}>New to *Company name* ?</Text>
                  <Pressable style={styles.registrationLinkWrapper} onPress={navigation.navigate('Registration')}>
                    <Text style={styles.registrationLink}>Sign Up now</Text>
                  </Pressable>
                </View>
                
            <Pressable
            style={styles.signInButton} 
            onPress={handleSubmit} 
            disabled={!isValid}>
                <Text style={styles.signInButtonText}>Sign In</Text>
            </Pressable>

        </View>

      </View>
      )}
      </Formik>
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
    registrationLinkWrapper: {
      backgroundColor: 'red',
      paddingVertical: 5,
      width: '40%'
    },
  });
