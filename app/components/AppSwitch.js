import React, {useState} from 'react'
import Screen from './Screen'
import { Switch } from 'react-native-gesture-handler'

const AppSwitch = () => {

    const [isNew, setIsNew] = useState(false)

  return (
    <Screen>
      <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)}/>
    </Screen>
  )
}

export default AppSwitch
