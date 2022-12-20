import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface SendButtonProps {
  onPress: (pressed: any) => any;
}

export default function ({onPress}: SendButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.btn_text}>Finalizar pedido</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 74,
    width: '100%',
    backgroundColor: '#F7C832',
    borderColor: '#F7C832',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btn_text: {
    color: 'black',
    fontSize: 24,
    fontWeight: '800',
  },
});
