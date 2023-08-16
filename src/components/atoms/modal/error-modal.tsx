import React from 'react';
import {Modal, Text, View, StyleSheet} from 'react-native';
import {ErrorModalStyle} from './error-modal-style';
import {Button} from '../../atoms/button/button';

interface ErrorModalProps {
  visible: boolean;
  message: string;
  onClose: () => void;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({
  visible,
  message,
  onClose,
}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Modal visible={visible} animationType="fade" transparent>
        <View style={ErrorModalStyle.modalWrapper}>
          <Text style={ErrorModalStyle.modalText}>{message}</Text>
          <View style={ErrorModalStyle.buttonWrapper}>
            <Button text="OK" onPress={onClose} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
