import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface SelectButtonProps {
  isSelected: boolean;
  onPress: (pressed: any) => any;
  children: React.ReactNode;
}

export default function ({isSelected, onPress, children}: SelectButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.baseStyle,
        isSelected ? styles.selectedStyle : styles.notSelected,
      ]}>
      <Text
        style={[
          styles.baseStyle,
          isSelected ? styles.selectedText : styles.notSelectedText,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedStyle: {
    backgroundColor: '#347393',
    borderRadius: 5,
    width: '100%',
    height: '100%',
  },
  notSelected: {
    backgroundColor: '#FAFAFA',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#347393',
    width: '100%',
    height: '100%',
  },
  selectedText: {
    fontSize: 16,
    color: '#ffff',
    fontWeight: '700',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  notSelectedText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '300',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
