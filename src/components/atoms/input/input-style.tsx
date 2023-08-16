import { StyleSheet } from 'react-native'
export const InputStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(217,217,217,0.50)',
    marginVertical: 8,
    paddingHorizontal: 5
  },

  text: {
    color: '#fff'
  },

  placeholder: {

  },
  default: {
    borderRadius: 5,
  },
  notRounded: {
    borderRadius: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#03658C',
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },

    password: {
      width: 24,
      height: 24,
      marginRight: 5
    }

});


