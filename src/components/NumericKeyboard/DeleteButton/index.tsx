import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface DeleteButtonProps {
  onPress: (pressed: any) => any;
}

export default function ({onPress}: DeleteButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}>
      <Icon name="backspace" size={20} color={'#000'} />
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
});
