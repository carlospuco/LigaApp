import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../atoms/button/button';
import { Input } from '../../atoms/input/input';
import { FormStyle } from './form-style';
import { useForm } from './use-form/use-form';
interface FormProps{
  keys: string[]
  buttonText: string
  buttonPosition?: 'left' | 'center' | 'right'
  separator?: boolean
}
export const Form: FC<FormProps> = ({buttonText, keys, buttonPosition = 'center', separator})  => {
  const { handleChange, handleSubmit } = useForm();
  return (
    <View>
      {
        keys.map((key) => {
          return <Input key={Math.random() * 16} placeholder={key} onChange={(value) => handleChange(key, value)}/>
        })
      }
      {separator && <View style={FormStyle.separator}></View>}
      <View style={[FormStyle.buttonWrapper, FormStyle[buttonPosition]]}>
        <Button onPress={() => handleSubmit()} text={buttonText} />
      </View>
    </View>
  );
}