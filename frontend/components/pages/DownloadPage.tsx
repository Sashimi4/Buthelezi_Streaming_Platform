import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import Colors from '../../assets/Colors'
import LoadingIcon from '../atoms/LoadingIcon';
import Logo from '../atoms/Logo';
import MovieCard from '../atoms/MovieCard';

export default function DownloadPage() {

  const [isLoading, setLoading] = useState(false)

  const [keyword, setKeyword] = useState("")

  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
  }, [searchResults])

  const getSearchResults = async () => {
    try { //                        Use actual IP to resolve double local host issue
      setLoading(true);  
      const response = await fetch(`http://192.168.0.226:8080/search?keyword=${keyword}`, { //Replace with local device search instead of  
        method: 'GET',
        mode: 'cors',
      });
      const json = await response.json();
      setSearchResults(json);
    } catch(error) {
      //Error Handling here
    } finally {
      setLoading(false);
    }
  }

    return (
      <View style={styles.container}>

        <Logo/>

        <KeyboardAvoidingView style={styles.inputFieldWrapper}>

            <TextInput
            style={styles.inputFields}
            placeholderTextColor={Colors.OFF_WHITE}
            placeholder="Looking for a recent download ..."
            autoFocus={true}
            value={keyword}
            onChangeText={(input) => setKeyword(input)}
            />

            <Pressable
            onPress={getSearchResults}>
                <Icon
                style={styles.icon}
                name='search'
                color={Colors.GREEN}
                size={30}
                />
            </Pressable>

        </KeyboardAvoidingView>

        <Text style={styles.horizontalMovieListTitle}>Downloads</Text>

        <ScrollView style={styles.contentWrapper}>
            <MovieCard source={"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg"} title={"Moonknight"}/>
            <MovieCard source={"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg"} title={"Moonknight"}/>
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
      alignSelf: 'center',
      flexDirection: 'row',
      width: '90%',
      backgroundColor: 'red',
      flexWrap: 'wrap',
    },
    horizontalMovieListTitle: {
      color: Colors.WHITE,
      fontSize: 20,
      fontWeight: 'bold',
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    icon: {
        backgroundColor: Colors.LIGHT_BLACK,
        padding: 10,
        borderRadius: 50,
    },
    inputFieldWrapper: {
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    inputFields: {
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 15,
        width: '70%',
        backgroundColor: Colors.LIGHT_BLACK,
        color: Colors.WHITE,
    },
    horizontalMovieList: {
      marginVertical: 15,
    },
  });
