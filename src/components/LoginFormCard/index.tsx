import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import SendButton from './SendButton';

interface LoginFormCardProps {
  username: string;
  password: string;
  setPasswordActive: (val: boolean) => void;
  errorStatus: boolean;
  handleSend: () => void;
}

export default function ({
  username,
  password,
  setPasswordActive,
  errorStatus,
  handleSend,
}: LoginFormCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.columns}>
        <View style={styles.column}>
          <Text style={styles.label}>Nº do cartão ou matrícula:</Text>
          <TextInput
            label={'Usuário'}
            style={styles.input}
            mode="outlined"
            value={username}
            error={errorStatus}
            showSoftInputOnFocus={false}
            onPressIn={() => {
              setPasswordActive(false);
            }}
          />
        </View>
      </View>
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
            onPressIn={() => {
              setPasswordActive(true);
            }}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.columns}>
        <View style={styles.column}>
          <SendButton onPress={handleSend} />
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
    paddingTop: 50,
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
