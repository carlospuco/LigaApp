import { useState } from 'react'
import { Login } from '../../../../utils/interfaces/login'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export const useForm = () => {
  const [form, setForm] = useState();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleChange = (key: string, value: string) => {

  }
  const handleSubmit = () => {
    navigation.navigate('Main');
  }
  return {
    form,
    handleChange,
    handleSubmit
  }
}

type RootStackParamList = {
  Main: undefined;
}