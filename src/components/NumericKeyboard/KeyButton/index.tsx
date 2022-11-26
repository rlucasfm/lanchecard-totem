import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface KeyButtonProps {
  onPress: (pressedKey: any) => any;
  children: React.ReactNode;
}

export default function ({onPress, children}: KeyButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.buttontext}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 77,
    width: 116,
    backgroundColor: '#FAFAFA',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#85ABBE',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    fontWeight: '700',
    fontSize: 32,
    color: '#111010',
  },
});
