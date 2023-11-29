import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight, //this helps us change the status bar height easily for android as well
        flex: 1
    }
})

export default Screen
