import React from 'react';
import { useState } from 'react';
import { Image, ScrollView, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../assets/Colors'

export default function MovieCard(props) {

  return (
    <View style={styles.container}>
      <Pressable
      onPress={() => props.navigation.navigate('Movie', {
        movie: props.movieData,
        destination: props.destination,
      })}>
        <Image 
        style={styles.image}
        source={{uri: props.movieData.imgUrl}}
        />
        <Text numberOfLines={1} style={styles.movieTitle}>{props.movieData.title }</Text>
      </Pressable>
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.LIGHT_BLACK,
      flex: 1,
      width: 120,
      height: 200,
      marginBottom: 10,
      marginHorizontal: 10,
      paddingBottom: 8,
    },
    image: {
      width: '100%',
      height: '90%',
    },
    movieTitle: {
      color: Colors.OFF_WHITE,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      paddingHorizontal: 8,
      flexWrap: 'wrap',
    }
  });
