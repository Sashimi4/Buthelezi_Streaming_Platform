import React from 'react';
import { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../assets/Colors'
import Logo from './Logo';
import MovieCarousel from '../molecules/MovieCarousel';
import FooterNav from '../organisms/FooterNav';

export default function MovieCard() {

    return (
      <View style={styles.container}>

        

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
