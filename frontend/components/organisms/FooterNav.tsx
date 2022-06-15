import React from 'react';
import { useState } from 'react';
import { Icon } from '@rneui/themed'
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../assets/Colors'

export default function FooterNav() {
  
    return (
      <View style={styles.footerWrapper}>
        <Text> - Logo here - </Text>
        <Icon
        name='rowing'/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    footerWrapper: {
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: Colors.GREEN,
    },
  });
