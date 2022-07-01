import React, {useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import VideoPlayer from 'react-native-video-player';

import Colors from '../../assets/Colors';

export default function VideoPlayerPage() {
    
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Hello there</Text>
            {/* <VideoPlayer
              video={{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}}
              videoWidth={1600}
              videoHeight={900}
              thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.BACKGROUND_BLACK,
      flex: 1,
    },
    text: {
      color: Colors.WHITE,
      fontWeight: 'bold',
    }
  });
  