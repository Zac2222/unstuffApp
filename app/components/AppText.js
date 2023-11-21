import React from 'react';
import { Text,StyleSheet, Platform } from 'react-native';

//needs to pass children into the element so it can take everything, and pass in styles for if we give anyhting a custome style it can still read it
function AppText({children, style}) {
    return (
        <Text style={[styles.text, style]}> 
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Chalkboard SE'
    }
})

export default AppText;