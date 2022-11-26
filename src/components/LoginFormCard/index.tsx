import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import SendButton from './SendButton';

interface LoginFormCardProps {
  insertedKey: any;
}

export default function ({insertedKey}: LoginFormCardProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordActive, setPasswordActive] = useState(false);

  const handleSend = (pressed: any) => {
    console.log(pressed);
  };

  useEffect(() => {
    if (!passwordActive) {
      setUsername(prev => {
        return prev + insertedKey;
      });
    } else {
      setPassword(prev => {
        return prev + insertedKey;
      });
    }
  }, [insertedKey, passwordActive]);

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
            error={false}
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
            error={false}
            showSoftInputOnFocus={false}
            onPressIn={() => {
              setPasswordActive(true);
            }}
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
    marginBottom: 30,
  },
  btn: {
    marginTop: 71,
  },
});
