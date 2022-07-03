import React, {useState, useRef} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

import Colors from '../../assets/Colors';
import { Button } from 'react-native';
import { withBadge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

export default function VideoPlayerPage( { route } ) {

  const video = React.useRef(null);

  const [status, setStatus] = React.useState({});
    
    return (
        <View style={styles.container}>

              <Text style={styles.titleText}>{route.params.movieTitle}</Text>

              <Video
              source={{ uri:  route.params.videoSrc}}
              ref={video}
              volume={1.0}
              useNativeControls
              isLooping
              resizeMode="contain"
              style={styles.video}
              onPlaybackStatusUpdate={status => setStatus(() => status)}
              /> 
              <View style={styles.playButtonWrapper}>
                <Pressable
                  onPress={() =>
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                  }
                >
                  {status.isPlaying ? ( 
                    <View style={styles.playButtonContentWrapper}>
                      <Icon
                      name="pause-circle"
                      color={Colors.WHITE}
                      size={30}
                      />
                      <Text style={styles.playButtonText}> Pause </Text>
                    </View>
                  )
                  : (
                    <View style={styles.playButtonContentWrapper}>
                      <Icon
                      name="play-circle"
                      color={Colors.WHITE}
                      size={30}
                      />
                      <Text style={styles.playButtonText}> Play </Text>
                    </View>
                  )}
                </Pressable>
              </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.BACKGROUND_BLACK,
      flex: 1,
    },
    titleText: {
      top: '20%',
      width: '90%',
      alignSelf: 'center',
      color: Colors.WHITE,
      fontSize: 25,
      fontWeight: 'bold',
      padding: 15,
      borderTopWidth: 5,
      borderTopColor: Colors.GREEN,
    },
    video: {
      top: 60,
      width: 400, 
      height: 400,
      marginBottom: 70,
    },
    playButtonWrapper: {
      alignSelf: 'center',
      backgroundColor: Colors.GREEN,
      width: '50%',
      borderRadius: 20,
    },
    playButtonContentWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      padding: 10,
    },
    playButtonText: {
      color: Colors.WHITE,
      fontSize: 20,
      fontWeight: 'bold',
    }
  });
  