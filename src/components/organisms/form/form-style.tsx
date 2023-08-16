import { StyleSheet } from 'react-native';

export const FormStyle = StyleSheet.create({
  buttonWrapper: {
    marginTop: 40,
    width: 200,
    height: 50,
  },
  center: {
    alignSelf: 'center'
  },
  left: {
    alignSelf: 'flex-start'
  },
  right: {
    alignSelf: 'flex-end'
  },
  separator: {
    backgroundColor: 'rgba(217,217,217,0.50)',
    height: 4,
    borderRadius: 5,
    marginVertical: 40,
    marginHorizontal: -10
  }
})