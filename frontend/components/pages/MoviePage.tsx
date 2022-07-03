import * as React from 'react';
import { useState, useEffect } from 'react';
import { Image, ScrollView, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import Colors from '../../assets/Colors'
import BackButton from '../atoms/BackButton';
import LoadingIcon from '../atoms/LoadingIcon';
import Logo from '../atoms/Logo';
import MovieCard from '../atoms/MovieCard';
import { fetchMovie } from '../functional/PerformMovieDataFetch';

export default function MoviePage(props) {

  const [isLoading, setLoading] = useState(false)

  const [keyword, setKeyword] = useState("")

  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    //fetch all movie data and assign it:
    //setMovieData(fetchMovie)
  }, [])

    return (
      <View style={styles.container}>

      <BackButton destination={'Home'} navigation={props.navigation}/>
      <ScrollView>

        <View style={styles.headerWrapper}>
            <Text style={styles.movieTitle}>Doctor Strange in the Multiveres of Madness</Text>
        </View>

        <View style={styles.imageWrapper}>
            <Image 
            style={styles.image}
            source={{uri: "https://media.services.cinergy.ch/media/box1600/d51b1becce26054a02d9edd961dcec4b4fb36772.jpg"}}//{{uri: props.source}}
            />
        </View>

        <View style={styles.movieAttributesWrapper}>
            <Text style={styles.movieAttributeText}> 2021 |</Text>
            <Text style={styles.movieAttributeText}> 125 min |</Text>
            <Text style={styles.movieAttributeText}> Action Genre</Text>
        </View>

        <View style={styles.buttonLayout}> 
            <Pressable
            style={styles.playButtonIconWrapper}>
                <Icon
                name="play-circle"
                color={Colors.WHITE}
                size={30}
                />
            </Pressable>
            <Pressable style={styles.additionalIconWrapper}>
                <Icon
                name="plus-circle"
                color={Colors.GREEN}
                size={30}
                />
            </Pressable>
            <Pressable style={styles.additionalIconWrapper}>
                <Icon
                name="download"
                color={Colors.GREEN}
                size={30}
                />
            </Pressable>
        </View>


        <View style={styles.descriptionWrapper}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aut, sint totam itaque inventore cupiditate, eum quibusdam porro magnam sunt ipsum maiores voluptatum tempora ipsam iusto non? Eveniet, deserunt amet.</Text>
        </View>
        <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aut, sint totam itaque inventore cupiditate, eum quibusdam porro magnam sunt ipsum maiores voluptatum tempora ipsam iusto non? Eveniet, deserunt amet.</Text>
        </View>
        <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aut, sint totam itaque inventore cupiditate, eum quibusdam porro magnam sunt ipsum maiores voluptatum tempora ipsam iusto non? Eveniet, deserunt amet.</Text>
        </View>
        <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aut, sint totam itaque inventore cupiditate, eum quibusdam porro magnam sunt ipsum maiores voluptatum tempora ipsam iusto non? Eveniet, deserunt amet.</Text>
        </View>

      </ScrollView>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.BACKGROUND_BLACK,
      flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 60,
        width: '90%',
        marginBottom: 5,
    },
    movieTitle: {
      color: Colors.WHITE,
      fontSize: 20,
      fontWeight: 'bold',
      paddingHorizontal: 10,
      marginBottom: 20,
      width: '70%',
      flexWrap: 'wrap',
    },
    horizontalMovieList: {
      marginVertical: 15,
    },
    imageWrapper: {
        backgroundColor: 'green',
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 10,
    },
    image: {
        width: '60%',
        height: 300,
        alignSelf: 'center',
    },
    movieAttributesWrapper:{
        flexDirection: 'row',
        width: '70%',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 5,
        marginVertical: 5,
    },
    movieAttributeText: {
        color: Colors.OFF_WHITE,
        fontWeight: 'bold',
    },
    buttonLayout: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        width: '90%',
        alignSelf: 'center',
    },
    playButtonIconWrapper: {
        backgroundColor: Colors.GREEN,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
    },
    additionalIconWrapper: {
        backgroundColor: Colors.LIGHT_BLACK,
        padding: 10,
        borderRadius: 40,
        marginHorizontal: 8,
    },
    descriptionWrapper: {
        margin: 20,
    },
    descriptionTitle: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
    },
    description: { //fill body
        color: Colors.OFF_WHITE,
    },
  });
