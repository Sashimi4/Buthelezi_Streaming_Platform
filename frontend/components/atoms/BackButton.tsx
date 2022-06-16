import React from 'react';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../assets/Colors'

export default function BackButton() {
  
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttonWrapper}>
            <Icon 
            style={styles.buttonIcon}
            name="md-chevron-back-sharp" 
            size={28}/>
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        flexDirection: 'row',
        top: '8%',
    },
    buttonWrapper: {
        marginLeft: 20,
        borderRadius: 50,
        padding: 4,
        backgroundColor: Colors.LIGHT_BLACK,
        zIndex: 999,
    },
    buttonIcon:{
        color: Colors.WHITE,
    }
  });
