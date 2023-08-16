import { StyleSheet } from 'react-native';

export const MatchStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(198,197,192,.85)',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    height: 120
  },
  teamWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultWrapper: {
    flex: 2,
  },
  dateWrapper: {
    paddingVertical: 2
  },
  logo: {
    resizeMode: 'contain',
    width: 50,
    height: 50
  },
  detail: {
    alignSelf: 'center',
    fontSize: 13,
    fontWeight: 'bold'
  },
  scoreWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'flex-end',
    marginBottom: -8
  },
  score: {
    fontSize: 35,
    color: '#000',
    fontWeight: 'bold'
  },
  winScore: {
    color: '#DFBD09'
  },
  team: {
    color: '#000',
    fontWeight: 'bold'
  },
  separator: {
    fontSize: 45,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },


  center: {
    justifyContent: 'center'
  },
  bottom: {
    justifyContent: 'flex-end'
  }

})