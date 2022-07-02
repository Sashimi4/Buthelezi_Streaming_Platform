import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../assets/Colors'
import LoadingIcon from '../atoms/LoadingIcon';
import Logo from '../atoms/Logo';
import MovieCard from '../atoms/MovieCard';
import MovieCarousel from '../molecules/MovieCarousel';

export default function HomePage() {

  const [isLoading, setLoading] = useState(true)
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    getMovies();
  }, [])
 
  const getMovies = async () => {
    try { //                        Use actual IP to resolve local host issue
      const response = await fetch('http://192.168.0.226:8080/movies/here', {
        method: 'GET',
        mode: 'cors',
      });
      const json = await response.json();
      setMovieData(json);
    } catch(error) {
      console.error();
      //Error Handling here
    } finally {
      setLoading(false);
    }
  }

    return (
      <View style={styles.container}>

        <Logo/>

        <ScrollView style={styles.contentWrapper}>

          <MovieCarousel/>

          <Text style={styles.horizontalMovieListTitle}>New Releases</Text>

          <ScrollView
          style={styles.horizontalMovieList}
          horizontal={true}
          >
            {isLoading ? <LoadingIcon/> : (
              movieData.map((prop) => {
                return (
                  <MovieCard key={prop.id} source={prop.imgUrl} title={prop.title}/>
                );
              })
            )}
          </ScrollView>

          <Text style={styles.horizontalMovieListTitle}>New Releases</Text>

          <ScrollView
          style={styles.horizontalMovieList}
          horizontal={true}
          >
            <MovieCard source={"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg"} title={"Moonknight"}/>
            <MovieCard source={"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg"} title={"Moonknight"}/>
            <MovieCard source={"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg"} title={"Moonknight"}/>
            <MovieCard source={"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg"} title={"Moonknight"}/>
          </ScrollView>

        </ScrollView>

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
    },
    horizontalMovieListTitle: {
      color: Colors.WHITE,
      fontSize: 20,
      fontWeight: 'bold',
      paddingHorizontal: 10,
    },
    horizontalMovieList: {
      marginVertical: 15,
    },
  });
