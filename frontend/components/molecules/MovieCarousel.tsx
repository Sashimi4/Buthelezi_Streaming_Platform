import React from 'react';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import Colors from '../../assets/Colors'

export default function MovieCarousel() {

    const [index, setIndex] = useState(0)

    const isCarousel = React.useRef(null)

    const data =[
        {
            image:"https://m.media-amazon.com/images/I/91-INW-yQRL._AC_SL1500_.jpg",
            text: "Spider No Way Home",
        },
        {
            image:"https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg",
            text: "Text 2",
        },
        {
            image:"https://i.ebayimg.com/images/g/X1AAAOSwYRRgfeVE/s-l500.jpg",
            text: "Text 3",
        },
      ]

    const _renderItem = ({item, index}) => {
        return (
            <View style={styles.carouselCard}>
                <Image 
                style={styles.image}
                source={{uri: item.image}}
                />
                <Text style={styles.movieTitle}>Movie Title - { item.text }</Text>
            </View>
        );
    }

    return (
      <View style={styles.carouselContainer}>
        <Carousel 
        loop={true}
        lockScrollWhileSnapping={true}
        style={styles.carousel}
        ref={isCarousel}
        autoplay={true}
        autoplayDelay={1000}
        autoplayInterval={4000}
        useScrollView={true}
        renderItem={_renderItem}
        sliderWidth={300}
        itemWidth={300}
        data={data}
        onSnapToItem={(index) => setIndex(index)}
        />

        <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 15,
          height: 10,
          borderRadius: 5,
          backgroundColor: Colors.GREEN,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    carouselContainer: {
        alignItems: 'center',
        width: '100%',
        paddingTop: 20,
    },
    carousel: {
        position: 'relative',
        marginVertical: 50,
        zIndex: 999,
    },
    carouselCard: {
        backgroundColor: Colors.LIGHT_BLACK,
        position: 'relative',
        alignItems: 'center',
    },
    image: {
        height: 240,
        width: '100%',
    },
    movieTitle: {
        color: Colors.WHITE,
    }
  });
