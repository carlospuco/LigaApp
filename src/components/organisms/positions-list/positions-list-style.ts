import { StyleSheet } from 'react-native';

export const PositionsListStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  teamHeader: {
    flexDirection: 'row',
    width: '28%'
  },
  resultHeader: {
    flexDirection: 'row',
    width: '72%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  detailHeader: {
    width: '9%',
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  detailHeaderLarge: {
    width: '12%'
  },
  teamPositionHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    width: '20%',
    textAlign: 'center',
    alignSelf: 'center',
  },
  teamNameHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: 5
  }
})