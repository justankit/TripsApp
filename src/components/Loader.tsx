import React from 'react';
import {View, Modal, ActivityIndicator, StyleSheet} from 'react-native';

interface Props {
  modalVisible: boolean;
}

const Loader = ({modalVisible}: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {}}>
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
