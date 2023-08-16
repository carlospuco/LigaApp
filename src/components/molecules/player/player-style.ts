import { StyleSheet } from 'react-native';

export const PlayerStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(198,197,192,.85)',
    borderRadius: 12,
    marginBottom: 5,
    height: 60,
    width: '100%',
  },
  teamWrapper: {
    backgroundColor: '#D9D9D9',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 10,
    height: '35%',
    justifyContent: 'center'
  },
  teamTitle: {
    fontSize: 12,
    color: 'black'
  },
  playerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '65%',
    paddingHorizontal: 10
  },
  playerNumberWrapper: {
    width: '10%',
    height: '100%',
    justifyContent: 'center'
  },
  playerNumber: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16
  },
  playerNameWrapper: {
    width: '45%',
    height: '100%',
    justifyContent: 'center'
  },
  playerName: {
    color: 'black',
    fontSize: 16
  },
  detailsWrapper: {
    width: '45%',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  icon: {
    resizeMode: 'contain',
    width: '30%',
    height: '50%',
    marginRight: 4
  },
  detail: {
    width: '33%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },
  detailText: {
  }
})