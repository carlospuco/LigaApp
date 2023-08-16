import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const UserFormStyle = StyleSheet.create({
  buttonWrapper: {
    width: 250,
    height: 50,
    alignSelf: 'center'
  },
  separator: {
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,.5)',
    width: '100%',
    height: 2,
    marginBottom: 30,
    marginTop: 10
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
