import * as React from 'react';
import { useState, useEffect } from 'react';
import { Image, ScrollView, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import Colors from '../../assets/Colors'
import BackButton from '../atoms/BackButton';
import LoadingIcon from '../atoms/LoadingIcon';
import Logo from '../atoms/Logo';
import MovieCard from '../atoms/MovieCard';
import { fetchMovie } from '../functional/PerformMovieDataFetch';

export default function ProfilePictureSelectionPage( { navigation } ) {

    return (
        <View style={styles.container}>

        <BackButton destination={'Home'} navigation={navigation}/>

            <ScrollView>

                <Text>Hello There</Text>

            </ScrollView>
        
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.BACKGROUND_BLACK,
      flex: 1,
    },
  });
