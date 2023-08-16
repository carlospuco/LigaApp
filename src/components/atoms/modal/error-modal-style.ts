import { StyleSheet } from 'react-native';

export const ErrorModalStyle = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderRadius: 10,
    padding: 5,
   

  },
  modalContent: {
    flex: 1,
    backgroundColor: 'rgba(48, 53, 51, 55)',
    borderRadius: 10,
    padding: 5,
    borderBottomColor:'#ffffff',
    borderColor:'ffffff'
  },
  modalText: {
    color: 'rgba(255, 255, 255, 100)',
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 20,
  },
  closeButton: {
    backgroundColor: '#ff0000',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonWrapper: {
    width: 250,
    height: 50,
    alignSelf: 'center'
  }
});
