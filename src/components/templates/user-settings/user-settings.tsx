import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '../../atoms/button/button';
import { SettingsForm } from '../../organisms/settings-form/settings-form';
import { UserSettingsStyle } from './user-settings-style';
import { AuthContext } from '../../organisms/user-form/use-login/use-auth';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native'; 

// Importa el hook de navegación

export const UserSettings = () => {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();
  

  const handleLogout = () => {
    logout();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
      
    });
    BackHandler.exitApp(); // Cierra la aplicación por completo
  };

  return (
    <LinearGradient
      colors={['#002B4A', '#041E31']}
      style={UserSettingsStyle.wrapper}
    >
      
      <View style={UserSettingsStyle.imageWrapper}>
        <Image
          style={UserSettingsStyle.image}
          source={require('./../../../assets/img/team1.png')}
        />
      </View>
      
      <View style={UserSettingsStyle.buttonWrapper}>
        <Button
          text="Salir"
          onPress={handleLogout}
          variant="void"
          textSize="small"
          color="primary"
        />
      </View>
    </LinearGradient>
  );
};
