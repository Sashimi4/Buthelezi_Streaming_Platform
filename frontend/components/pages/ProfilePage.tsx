import React from 'react';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import * as yup from 'yup'
import { Formik } from 'formik'

import Colors from '../../assets/Colors'
import Logo from '../atoms/Logo';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { AuthContext } from '../auth/Context';

export default function ProfilePage() {

  const { signOut } = React.useContext(AuthContext)

  const editProfileValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email"),
    username: yup
        .string()
        .matches(/^[a-zA-Z0-9]*/,  "Password must have a small letter")
        .min(3, ({ min }) => `Passwsord must be at least ${min} characters`),
    profilePitureSource: yup
        .string()
  })

    useEffect(() => {
        //getProfile();
      }, [])
    
      const getProfile = async () => {
        try { //                        Use actual IP to resolve local host issue
          const response = await fetch('http://10.62.109.206:8080/profile/', {
            method: 'GET',
            mode: 'cors',
          });
          const json = await response.json();
        } catch(error) {
          //Error Handling here
        } finally {
          //setLoading(false);
        }
      }

      const editProfile = async () => {
        try { //                        Use actual IP to resolve local host issue
          const response = await fetch('http://192.168.0.226:8080/profile/', {
            method: 'PUT',
            mode: 'cors',
          });
          const json = await response.json();
        } catch(error) {
          //Error Handling here
        } finally {
          //setLoading(false);
        }
      }

    return (

        <Formik
          validationSchema={editProfileValidationSchema}
          initialValues={{ email: '', username: '', profilePitureSource: "https://www.disneyplusinformer.com/wp-content/uploads/2021/12/Encanto-Avatar.png"} /* fetch api and fill these inital values */}
          onSubmit={values => console.log(values)}
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

          <ScrollView style={styles.contentWrapper}>

            <View style={styles.widthShaper}>

          <Logo/>

              <View style={styles.headerWrapper}>
                  <Pressable style={styles.editIconWraper}
                  onPress={() => console.log("Edit")}>
                      <Icon
                      style={styles.profilePictureIcon}
                      name='pencil-plus'
                      size={25}/>
                  </Pressable>

                  <Image
                  style={styles.profilePictureImage}
                  source={{uri: values.profilePitureSource}}
                  />

                  <Text style={styles.pageTitle}>Profile</Text>
              </View>

              <Text style={styles.descriptionText}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur reiciendis nulla maiores sint, excepturi commodi.
              </Text>
              
              <TextInput
              style={styles.inputFields}
              placeholderTextColor={Colors.OFF_WHITE}
              placeholder="Username"
              onBlur={handleBlur('username')}
              onChangeText={handleChange('username')}
              value={values.username}
              />

              {errors.username && touched.username &&
                  <View style={styles.errorTextMessageWrapper}>
                      <Text style={styles.errorTextMessage}>{errors.username}</Text>
                  </View>
              }

              <TextInput
              style={styles.inputFields}
              placeholderTextColor={Colors.OFF_WHITE}
              autoComplete='email'
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

              <Pressable 
              onPress={handleSubmit}
              disabled={!isValid} 
              style={styles.saveButton}>
                      <Text style={styles.saveButtonText}>Save</Text>
              </Pressable>

              <Pressable  
              onPress={() => signOut()}
              style={styles.logOutButton}>
                      <Text style={styles.saveButtonText}>Log Out</Text>
              </Pressable>

              </View>

          </ScrollView>

        )}
        </Formik>
    );
  }

  const styles = StyleSheet.create({
    contentWrapper: {
      backgroundColor: Colors.BACKGROUND_BLACK,
      width: '100%',
      alignSelf: 'center',
    },
    widthShaper: {
      alignSelf: 'center',
      width: '80%',
    },
    headerWrapper: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    editIconWraper: {
        zIndex: 99,
    },
    profilePictureIcon: {
        backgroundColor: Colors.WHITE,
        position: 'absolute',
        color: Colors.BACKGROUND_BLACK,
        top: '70%',
        padding: 8,
        borderRadius: 100,
    },
    pageTitle: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 35,
        alignSelf: 'center',
        paddingLeft: 30,
    },
    saveButton: {
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 15,
        marginVertical: 20,
        backgroundColor: Colors.GREEN,
    },
    saveButtonText: {
        color: Colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
    },
    logOutButton: {
      alignItems: 'center',
      borderRadius: 20,
      paddingVertical: 15,
      marginVertical: 35,
      backgroundColor: 'red',
  },
    descriptionText: {
        color: Colors.OFF_WHITE,
        paddingTop: 20,
    },
    profilePictureImage: {
        height: 110,
        width: 110,
        borderRadius: 50,
    },
    inputFields: {
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 25,
        marginBottom: 10,
        backgroundColor: Colors.LIGHT_BLACK,
        color: Colors.WHITE,
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
  });
