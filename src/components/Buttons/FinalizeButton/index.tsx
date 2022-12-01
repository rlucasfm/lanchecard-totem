import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

interface FinalizeButtonProps {
  onPress: (pressed: any) => any;
  enabled: boolean;
}

export default function ({onPress, enabled}: FinalizeButtonProps) {
  return enabled ? (
    <TouchableOpacity
      style={styles.button_enabled}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.btn_text}>Finalizar pedido</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={styles.button_disabled}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.btn_text_disabled}>Finalizar pedido</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button_enabled: {
    width: '100%',
    backgroundColor: '#F7C832',
    borderColor: '#F7C832',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12.5,
  },
  button_disabled: {
    width: '100%',
    backgroundColor: '#FAFAFA',
    borderColor: '#FAFAFA',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12.5,
  },
  btn_text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
  },
  btn_text_disabled: {
    color: '#858585',
    fontSize: 16,
    fontWeight: '700',
  },
});
