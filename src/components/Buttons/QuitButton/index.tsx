import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

interface QuitButtonProps {
  onPress: (pressed: any) => any;
}

export default function ({onPress}: QuitButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button_enabled}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.btn_text}>Sair do pedido</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button_enabled: {
    width: '100%',
    backgroundColor: '#FAFAFA',
    borderColor: '#347393',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12.5,
  },
  btn_text: {
    color: '#111010',
    fontSize: 16,
    fontWeight: '700',
  },
});
