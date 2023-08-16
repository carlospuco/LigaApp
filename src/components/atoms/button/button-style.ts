import { StyleSheet } from 'react-native';

export const ButtonStyle = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 5,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  default: {

  },
  void: {
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,.15)'
  },
  small: {
    fontSize: 20
  },
  medium: {
    fontSize: 25
  },
  primary: {
    backgroundColor: 'rgba(3,101,140,.4)',
    borderColor: 'rgb(3,101,140)',
  },
  white: {

  }
});