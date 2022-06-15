import React from 'react';
import { useState } from 'react';
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../assets/Colors'

export default function Logo() {
  
    return (
      <View style={styles.logoWraper}>
        <Text>- Logo here -</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    logoWraper: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: Colors.GREEN,
    }
  });
