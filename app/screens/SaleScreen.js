import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import color from '../config/color';

function SaleScreen() {
    return (
       <View style={styles.container}>
        <Image resizeMode='contain' style={styles.image} source={require('../assets/Fella.jpg')}/>
        <Text style={styles.text}>Fella for sale!</Text>
        <Text style={styles.price}>$2</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.black
    },
    image: {
        width: '100%',
        height: '70%'
    },
    text: {
        color: color.secondary,
        bottom: 40,
        fontSize: 60
    },
    price: {
        color: 'green',
        bottom: 40,
        fontSize: 60
    }
})

export default SaleScreen;