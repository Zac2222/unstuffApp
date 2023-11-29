import React from 'react'
import { View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

//icon component, sets all values of an icon you can name as Icon, all you need to adjust is the name and everything else is set as defaults from here, you can still change these individually though

const Icon = ({name, size=40, backgroundColor='#000', iconColor='#fff'}) => { //you can leave some props as is to be automatic, but also set certain props manually
  return (
    <View style={{width: size, height: size, borderRadius: size/2, backgroundColor, justifyContent: 'center', alignItems: 'center'}}>
      
      <MaterialCommunityIcons name={name} color={iconColor} size={size * .5}/>

    </View>
  )
}


export default Icon
