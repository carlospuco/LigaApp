import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { UserFormStyle } from './user-form-style';
import { Button } from '../../atoms/button/button';
import { ErrorModal } from '../../atoms/modal/error-modal';
import { Input } from '../../atoms/input/input';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserFormProps {
  onLoginSuccess: (token: string) => void;
  navigation?: any;
}

export const UserForm: FC<UserFormProps> = ({ onLoginSuccess , navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);

 

  const handleLogin = async () => {
    try {
        console.log('Username:', username);
        console.log('Password:', password);

      const response = await axios.post(
        'https://liga-app-api.herokuapp.com/ligapp-api/login',
        {
          name_user: username,
          password_user: password,
        },
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      const data = response.data;
      console.log(data);
      const token = data.token;
      onLoginSuccess(token);
      await AsyncStorage.setItem('token', token);
       navigation.reset({
       index: 0,
       routes: [{ name: 'Main' }],
      });
      navigation.navigate('Main');
    
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('La contraseña o el usuario son incorrectos');
      setShowErrorModal(true);
    }
  };

  const handleModalClose = () => {
    setShowErrorModal(false);
    setErrorMessage('');
    setUsername('');
    setPassword('');
  };

  return (
    
    <View>
      <Input
        placeholder='Usuario'
        value={username}
        onChange={(value) => setUsername(value)}
      />
      <Input
        placeholder='Contraseña'
        secureTextEntry={true}
        value={password}
        onChange={(value) => setPassword(value)}
      />
      <View style={UserFormStyle.separator}></View>
      <View style={UserFormStyle.buttonWrapper}>
        {showErrorModal && (
          <ErrorModal
            visible={showErrorModal}
            message={errorMessage}
            onClose={handleModalClose}
          />
        )}
        <Button text='Entrar' onPress={handleLogin} />
      </View>
    </View>
  );
};
