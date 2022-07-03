import * as React from 'react';
import { useState, useEffect } from 'react';
import { Image, ScrollView, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../assets/Colors'
import BackButton from '../atoms/BackButton';

export default function PictureSelectionPage( { navigation } ) {

    return (
        <View style={styles.container}>

            <BackButton destination={'Profile'} navigation={navigation}/>

            <ScrollView>

            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Choose your new Look</Text>
            </View>

              <View style={styles.contentWrapper}>
                <Pressable onPress={() => navigation.navigate('Profile', {newProfilePictureSrc: 'https://featuredanimation.com/wp-content/uploads/2022/02/Mickey-Mouse-Disney-Plus-Icon.jpg'})}>
                  <Image
                  style={styles.profilePictureImage}
                  source={{uri: 'https://featuredanimation.com/wp-content/uploads/2022/02/Mickey-Mouse-Disney-Plus-Icon.jpg'}}
                  />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Profile', {newProfilePictureSrc: 'https://featuredanimation.com/wp-content/uploads/2022/02/Storm-Trooper-Disney-Plus-Icon.jpg'})}>
                  <Image
                  style={styles.profilePictureImage}
                  source={{uri: 'https://featuredanimation.com/wp-content/uploads/2022/02/Storm-Trooper-Disney-Plus-Icon.jpg'}}
                  />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Profile', {newProfilePictureSrc: 'https://featuredanimation.com/wp-content/uploads/2022/02/Edna-Disney-Plus-Icon.jpg'})}>
                  <Image
                  style={styles.profilePictureImage}
                  source={{uri: 'https://featuredanimation.com/wp-content/uploads/2022/02/Edna-Disney-Plus-Icon.jpg'}}
                  />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Profile', {newProfilePictureSrc: 'https://featuredanimation.com/wp-content/uploads/2022/02/Violet-Disney-Plus-Icon.jpg'})}>
                  <Image
                  style={styles.profilePictureImage}
                  source={{uri: 'https://featuredanimation.com/wp-content/uploads/2022/02/Violet-Disney-Plus-Icon.jpg'}}
                  />
                </Pressable>

                

              </View>

            </ScrollView>

        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.BACKGROUND_BLACK,
      flex: 1,
    },
    titleWrapper: {
      alignItems: 'center',
      marginTop: 60,
    },
    title: {
      color: Colors.WHITE,
      fontWeight: 'bold',
      fontSize: 20,
    },
    contentWrapper: {
      margin: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
    profilePictureImage: {
      height: 110,
      width: 110,
      borderRadius: 65,
      marginVertical: 20,
  },
  });
