import { StyleSheet } from 'react-native';

export const PositionStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(198,197,192,.85)',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 0,
    marginBottom: 5,
    height: 50,
    width: '100%',
  },
  resultWrapper: {
    width: '100%',
    height: '80%',
    flexDirection: 'row',
  },
  winsWrapper: {
    height: '20%',
    width: '100%',
    flexDirection: 'row',
    borderBottomRightRadius: 12
  },
  teamWrapper: {
    flexDirection: 'row',
    width: '28%'
  },
  detailsWrapper: {
    flexDirection: 'row',
    width: '72%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  imageWrapper: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  position: {
    width: '20%',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 16
  },
  detail: {
    width: '9%',
    textAlign: 'center',
    color: 'black',
    fontWeight: '400',
    fontSize: 15
  },
  image: {
    resizeMode: 'contain',
    width: '70%',
    height: '100%'
  },
  detailLarge: {
    width: '12%'
  },
  matchResult: {
    width: '20%',
    height: '100%',
    backgroundColor: '#9AA0A6'
  },
  matchWin: {
    backgroundColor: '#3AA757'
  },
  matchDefeat: {
    backgroundColor: '#EA4335'
  },
  rounded: {
    borderBottomRightRadius: 12
  },
  title: {
    fontWeight: 'bold',
    color: 'black'
  }
})