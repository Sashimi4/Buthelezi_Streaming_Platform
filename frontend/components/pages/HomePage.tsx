import * as React from 'react';
import { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../assets/Colors'
import Logo from '../atoms/Logo';
import MovieCard from '../atoms/MovieCard';
import MovieCarousel from '../molecules/MovieCarousel';
import FooterNav from '../organisms/FooterNav';

export default function HomePage() {

    return (
      <View style={styles.container}>

        <Logo/>

        <ScrollView style={styles.contentWrapper}>

          <MovieCarousel/>

          <Text style={styles.horizontalMovieListTitle}>New Releases</Text>

          <ScrollView
          style={styles.horizontalMovieList}
          horizontal={true}
          >
            <MovieCard source={"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg"} title={"Moonknight"}/>
            <MovieCard source={"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg"} title={"Moonknight"}/>
            <MovieCard source={"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg"} title={"Moonknight"}/>
            <MovieCard source={"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg"} title={"Moonknight"}/>
          </ScrollView>

          <Text style={styles.horizontalMovieListTitle}>New Releases</Text>

          <ScrollView
          style={styles.horizontalMovieList}
          horizontal={true}
          >
            <MovieCard source={"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg"} title={"Moonknight"}/>
            <MovieCard source={"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg"} title={"Moonknight"}/>
            <MovieCard source={"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg"} title={"Moonknight"}/>
            <MovieCard source={"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg"} title={"Moonknight"}/>
          </ScrollView>

        </ScrollView>

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
    },
    horizontalMovieListTitle: {
      color: Colors.WHITE,
      fontSize: 20,
      fontWeight: 'bold',
      paddingHorizontal: 10,
    },
    horizontalMovieList: {
      marginVertical: 15,
    },
  });
