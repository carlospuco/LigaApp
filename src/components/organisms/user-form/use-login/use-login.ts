import { useState } from 'react'
import { Login } from '../../../../utils/interfaces/login'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
export const useLogin = () => {
  const [form, setForm] = useState<Login>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleChangeValue = (key: keyof Login, value: string) => {
    setForm((currentForm) => {
      return {...currentForm, [key]:value} as Login;
    })
  }
  const handleSubmit = () => {
    navigation.navigate('Main');
  }
  return {
    form,
    handleChangeValue,
    handleSubmit
  }
}
type RootStackParamList = {
  Main: undefined;
}