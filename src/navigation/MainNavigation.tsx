import React, { useContext } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, TouchableHighlight} from 'react-native';
import Calendar from '../components/screens/calendar/calendar';
import Matches from '../components/screens/matches/matches';
import Settings from '../components/screens/settings/settings';
import {Positions} from '../components/screens/positions/positions';
import {Statistics} from '../components/screens/statistics/statistics';
import {Login} from '../components/screens/login/login';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { AuthContext } from '../components/organisms/user-form/use-login/use-auth';


export const MainNavigation = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  //const { isLoggedIn } = useContext(AuthContext);
  const { isLoggedIn, token } = useContext(AuthContext);


  const handleLogout = () => {
    // Restablece el historial de navegación y navega a la pantalla 'Login'
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    );
  };
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({size, color}) => {
          let icon;
          if (route.name === 'Home') {
            icon = require('./../assets/img/calendar.png');
          }
          if (route.name === 'Positions') {
            icon = require('./../assets/img/table.png');
          }
          if (route.name === 'History') {
            icon = require('./../assets/img/ball.png');
          }
          if (route.name === 'Statistics') {
            icon = require('./../assets/img/player.png');
          }
          return (
            <Image
              source={icon}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
          );
        },
        tabBarButton: ['Settings'].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
        headerStyle: {
          backgroundColor: '#002B4A',
        },
        headerRightContainerStyle: {
          paddingRight: 10,
        },
        headerRight: ['Settings'].includes(route.name)
          ? () => {
              return (
                <TouchableHighlight onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./../assets/img/close.png')}
                    style={{width: 25, height: 25, resizeMode: 'contain'}}
                  />
                </TouchableHighlight>
              );
            }
          : () => {
              return (
                <TouchableHighlight
                  onPress={() => navigation.navigate('Settings')}>
                  <Image
                    source={require('./../assets/img/settings.png')}
                    style={{width: 25, height: 25, resizeMode: 'contain'}}
                  />
                </TouchableHighlight>
              );
            },
        tabBarStyle: {
          backgroundColor: '#03658C',
          paddingVertical: 5,
        },
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
        headerShadowVisible: false,
        headerTitle: '',
      })}>
      <Tab.Screen
        name="Home"
        component={Calendar}
        options={{
          tabBarLabel: 'Calendario',
        }}
      />
      <Tab.Screen
        name="Positions"
        component={Positions}
        options={{
          tabBarLabel: 'Posiciones',
        }}
      />
      <Tab.Screen
        name="History"
        component={Matches}
        options={{
          tabBarLabel: 'Partidos',
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarLabel: 'Estadísticas',
        }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
