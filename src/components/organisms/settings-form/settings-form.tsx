import React from 'react'
import { View } from 'react-native'
import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import { SettingsFormStyle } from './settings-form-style'
export const SettingsForm = () => {
  return (
    <View>
      <Input variant='notRounded' placeholder='Contraseña actual' onChange={(value) => console.log(value)}/>
      <Input variant='notRounded' placeholder='Nueva contraseña' onChange={(value) => console.log(value)}/>
      <Input variant='notRounded' placeholder='Repetir contraseña' onChange={(value) => console.log(value)}/>
      <View style={SettingsFormStyle.buttonWrapper}>
        <Button text='Guardar' onPress={() => console.log('Guardar')} variant='void' textSize='small'/>
      </View>
    </View>
  )
}