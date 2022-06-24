import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Colors from '../../assets/Colors';

export default function LoadingIcon() {
    return (
        <View style={styles.loadingIconWrapper}>
            <ActivityIndicator size={60} color={styles.loadingIcon} />
        </View>
    )
}

const styles = StyleSheet.create({
    loadingIconWrapper: {
        backgroundColor: Colors.BACKGROUND_BLACK_TINT,
        position: 'relative',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
    },
    loadingIcon: {
        color: Colors.GREEN,
    }
  });
