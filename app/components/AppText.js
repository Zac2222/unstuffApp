import React from 'react';
import { Text,StyleSheet, Platform } from 'react-native';
import defaultStyles from '../config/styles';

//needs to pass children into the element so it can take everything, and pass in styles for if we give anyhting a custome style it can still read it
function AppText({children, style}) {
    return (
        <Text style={[defaultStyles.text, style]}> 
            {children}
        </Text>
    );
}



export default AppText;