import React from 'react';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../assets/Colors'
import Logo from '../atoms/Logo';
import { useEffect } from 'react';

export default function ProfilePage() {

    const [username, setUsername] = useState('Gregory64') // default here should be fetched by service

    const [email, setEmail] = useState('')

    const [profilePitureSource, setProfilePitureSource] = useState('https://www.disneyplusinformer.com/wp-content/uploads/2021/12/Encanto-Avatar.png')

    useEffect(() => {
        getProfile();
      }, [])
    
      const getProfile = async () => {
        try { //                        Use actual IP to resolve local host issue
          const response = await fetch('http://192.168.0.226:8080/profile/', {
            method: 'GET',
            mode: 'cors',
          });
          const json = await response.json();
          setEmail(json.email);
          setUsername(json.username);
          setProfilePitureSource(json.imgUrl);
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
      <View style={styles.container}>

        <Logo/>

        <KeyboardAvoidingView style={styles.contentWrapper}>
            <View style={styles.headerWrapper}>
                <Pressable style={styles.editIconWraper}
                onPress={(input) => console.log("Edit")}>
                    <Icon
                    style={styles.profilePictureIcon}
                    name='pencil-plus'
                    size={25}/>
                </Pressable>

                <Image
                style={styles.profilePictureImage}
                source={{uri: profilePitureSource}}
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
            value={username}
            onChangeText={(input) => setUsername(input)}
            />

            <View style={styles.errorTextMessageWrapper}>
                <Text style={styles.errorTextMessage}>error messages</Text>
            </View>

            <TextInput
            style={styles.inputFields}
            placeholderTextColor={Colors.OFF_WHITE}
            autoComplete='email'
            placeholder="Email"
            value={email}
            onChangeText={(input) => setEmail(input)}
            />

            <View style={styles.errorTextMessageWrapper}>
                <Text style={styles.errorTextMessage}>error messages</Text>
            </View>

            <Pressable style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Save</Text>
            </Pressable>
        
        </KeyboardAvoidingView>

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.BACKGROUND_BLACK,
      flex: 1,
    },
    contentWrapper: {
      position: 'relative',
      width: '80%',
      alignSelf: 'center',
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
        marginVertical: 60,
        backgroundColor: Colors.GREEN,
    },
    saveButtonText: {
        color: Colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
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
