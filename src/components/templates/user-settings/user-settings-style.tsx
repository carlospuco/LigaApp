import { ImageBackground, StyleSheet } from 'react-native';

export const UserSettingsStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  imageWrapper: {
    width: 200,
    height: 200,
    backgroundColor: '#D9D9D9',
    borderRadius: 400,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 400,
    backgroundColor: 'none',
  },
  formWrapper: {
    width: 250,
    marginVertical: 20
  },
  buttonWrapper: {
    marginTop: 10,
    width: 170,
    height: 40
  }
})