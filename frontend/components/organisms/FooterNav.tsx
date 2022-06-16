import React from 'react'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { Pressable, StyleSheet, View } from 'react-native';

import Colors from '../../assets/Colors'

export default function FooterNav() {
  
    return (
      <View style={styles.footerContainer}>
        <Pressable style={styles.activeFooterIconWrapper}>
          <Icon
            style={styles.activeFooterIcon}
            name='home'
            size={30}/>
        </Pressable>
        <Pressable style={styles.inactiveFooterIconWrapper}>
          <Icon
            style={styles.inactiveFooterIcon}
            name='search'
            size={30}/>
        </Pressable>
        <Pressable style={styles.inactiveFooterIconWrapper}>
          <Icon
            style={styles.inactiveFooterIcon}
            name='download-cloud'
            size={30}/>
        </Pressable>
        <Pressable style={styles.inactiveFooterIconWrapper}>
          <Icon
            style={styles.inactiveFooterIcon}
            name='user'
            size={30}/>
        </Pressable>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    footerContainer: {
      paddingBottom: 20,
      paddingTop: 10,
      bottom: 0,
      width: '100%',
      position: 'absolute',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: Colors.LIGHT_BLACK,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
    },
    inactiveFooterIconWrapper: {
      backgroundColor: Colors.ICON_INACTIVE_BACKGROUND_BLACK,
      borderRadius: 60,
      padding: 15,
      marginHorizontal: 12,
    },
    activeFooterIconWrapper: {
      backgroundColor: Colors.ICON_ACTIVE_BACKGROUND_BLACK,
      borderRadius: 60,
      padding: 15,
      marginHorizontal: 12,
    },
    activeFooterIcon: {
      color: Colors.GREEN,

    },
    inactiveFooterIcon: {
      color: Colors.WHITE,
    },
  });
