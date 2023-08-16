import React, { FC } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { ButtonStyle } from './button-style'
interface ButtonProps {
  text: string
  onPress: () => void
  variant?: 'default' | 'void'
  color?: 'primary' | 'white'
  textSize?: 'small' | 'medium'
}

export const Button: FC<ButtonProps> = ({ onPress, text, variant = 'default', textSize = 'medium', color = 'white' }) => {
  return (
    <TouchableHighlight onPress={() => onPress()} style={[ButtonStyle.button, ButtonStyle[variant], ButtonStyle[color]]}>
      <Text style={[ButtonStyle.text, ButtonStyle[textSize]]}>{text}</Text>
    </TouchableHighlight>
  );
}