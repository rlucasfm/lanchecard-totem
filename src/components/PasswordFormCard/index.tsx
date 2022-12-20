import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import ReturnButton from './ReturnButton';
import SendButton from './SendButton';

interface PasswordFormCardProps {
  password: string;
  errorStatus: boolean;
  handleSend: () => void;
  handleReturn: () => void;
}

export default function ({
  password,
  errorStatus,
  handleSend,
  handleReturn,
}: PasswordFormCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.columns}>
        <View style={styles.column}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            label={'Senha'}
            style={styles.input}
            mode="outlined"
            value={password}
            error={errorStatus}
            showSoftInputOnFocus={false}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.columns}>
        <View style={styles.column}>
          <SendButton onPress={handleSend} />
        </View>
      </View>
      <View style={styles.columns}>
        <View style={styles.column}>
          <ReturnButton onPress={handleReturn} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 524,
    paddingLeft: 55,
    paddingRight: 55,
    paddingTop: 10,
  },
  columns: {
    width: '100%',
    flexDirection: 'row',
  },
  column: {
    width: '100%',
    flexDirection: 'column',
  },
  label: {
    fontSize: 22,
    fontWeight: '400',
    color: 'black',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 77,
    marginBottom: 30,
  },
  btn: {
    marginTop: 71,
  },
});
