import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

export default function () {
  const printAnyText = (text: string) => {
    console.log(text);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => printAnyText('printer text')}>
        <Text>Print</Text>
      </TouchableOpacity>
    </View>
  );
}
