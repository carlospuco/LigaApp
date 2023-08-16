import React, { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserForm } from '../../organisms/user-form/user-form';
import { UserLoginStyle } from './user-login-style';
import { useNavigation } from '@react-navigation/native';


export const UserLogin = () => {
  const navigation = useNavigation();

  const handleLoginSuccess = (token: string) => {
    console.log('Login successful! Token:', token);
  };

  return (
    <SafeAreaView style={UserLoginStyle.screen}>
      <ImageBackground source={require('./../../../assets/img/background.jpg')} style={UserLoginStyle.imageWrapper}>
        <View style={UserLoginStyle.transparencyWrapper}>
          <Text style={UserLoginStyle.title}>
            LigApp
          </Text>
          <View style={UserLoginStyle.formWrapper}>
            <UserForm onLoginSuccess={handleLoginSuccess} navigation={navigation} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
