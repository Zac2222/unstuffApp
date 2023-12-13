import React, {useState} from 'react'
import {Picker} from '@react-native-picker/picker';

const AppPicker = () => {

    const [selectedLanguage, setSelectedLanguage] = useState()

  return (
    <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
    >
      <Picker.item label='Java' value={'java'}/>
      <Picker.item label='Javascript' value={'javascript'}/>
      <Picker.item label='HTML' value={'HTML'}/>
      <Picker.item label='CSS' value={'CSS'}/>
      <Picker.item label='C#' value={'C#'}/>
      <Picker.item label='REACT' value={'REACT'}/>
      <Picker.item label='Angular' value={'Angular'}/>
    </Picker>
  )
}

export default AppPicker
