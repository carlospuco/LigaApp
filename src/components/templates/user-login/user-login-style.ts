import { StyleSheet } from 'react-native';

export const UserLoginStyle =StyleSheet.create({
  screen: {
    flex: 1,
  },

  imageWrapper: {
    flex: 1
  },

  transparencyWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.38)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 45,
    alignSelf: 'center'
  },

  formWrapper: {
    width: '90%',
    margin: 100
  }
})