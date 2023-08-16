import React, { FC } from 'react';
import { TextInput, View } from 'react-native';
import { InputStyle } from './input-style';

interface InputProps {
  placeholder: string;
  onChange: (value: string) => void;
  variant?: 'default' | 'notRounded';
  secureTextEntry?: boolean;
  value?: string; // Agregar la prop value
}

export const Input: FC<InputProps> = ({
  placeholder,
  onChange,
  variant = 'default',
  secureTextEntry = false,
  value, // Agregar la prop value
}) => {
  return (
    <View style={[InputStyle.wrapper, InputStyle[variant]]}>
      <TextInput
        style={[InputStyle.text]}
        placeholderTextColor="#fff"
        placeholder={placeholder}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
        defaultValue={value} // Cambiar value por defaultValue
      />
    </View>
  );
};
