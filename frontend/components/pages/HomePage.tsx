import React from 'react';
import { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../assets/Colors'
import Logo from '../atoms/Logo';
import MovieCarousel from '../molecules/MovieCarousel';
import FooterNav from '../organisms/FooterNav';

export default function HomePage() {

    return (
      <View style={styles.container}>

        <Logo/>

        <ScrollView style={styles.contentWrapper}>

          <MovieCarousel/>

          

        </ScrollView>

        <FooterNav/>

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
    }
  });
