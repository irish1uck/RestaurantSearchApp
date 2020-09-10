import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Taylors() {
    return (
        <View style={styles.container}>
            <Text style={styles.restaurant_name}>Taylor's Steakhouse</Text>
                            <Image style={styles.image} source={{uri: 'https://s3-media0.fl.yelpcdn.com/bphoto/U-mUP201CtydekmH-QIkhw/o.jpg'}} />
                            <View style={styles.restaurant_ratingContainer}>
                              <Text style={styles.restaurant_rating}>Average Rating: 4</Text>
                              <Text style={styles.restaurant_review}>Number of Reviews: 1172</Text>
                            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#BABCBC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 275,
      height: 200,
      display: "flex"
    },
    restaurant_name: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 5,
        fontStyle: 'italic'
      },
      restaurant_ratingContainer: {
        display: "flex",
        flexDirection: "column",
        margin: 10,
      },
      restaurant_review: {
        textAlign: 'center',
        fontWeight: "bold",
      },
      restaurant_rating: {
        textAlign: 'center',
        fontWeight: "bold",
      },
});

export default Taylors;
