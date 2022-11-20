import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput, Title, Button, Text, IconButton} from 'react-native-paper';
import http from '../../http-common';
import {IUserData} from './../../typings/Login';

export default function () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);
  const navigation = useNavigation();

  function tryLogin() {
    http
      .get<IUserData[]>('/users')
      .then((response: any) => {
        const user_data = response.data[0];
        if (
          user_data.username === username &&
          user_data.password === password
        ) {
          navigation.navigate('ProductList');
        } else {
          setErrorStatus(true);
        }
      })
      .catch(() => {
        setErrorStatus(true);
      });
  }

  return (
    <View style={styles.container}>
      {errorStatus ? (
        <View style={styles.errorpop}>
          <Text style={styles.error}>
            Verifique o seu nome de usuário e senha
          </Text>
          <IconButton
            icon="close"
            style={styles.closebtn}
            onPress={() => setErrorStatus(false)}
          />
        </View>
      ) : null}
      <Title>Acesse o LancheCard</Title>
      <TextInput
        label={'Usuário'}
        style={styles.input}
        value={username}
        onChangeText={text => setUsername(text)}
        left={<TextInput.Icon icon="account" />}
        error={errorStatus}
      />
      <TextInput
        label={'Senha'}
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        left={<TextInput.Icon icon="lock" />}
        error={errorStatus}
      />
      <Button
        icon="chevron-right-circle-outline"
        mode="contained"
        onPress={tryLogin}>
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '50%',
    margin: 12,
  },
  errorpop: {
    backgroundColor: '#ffdce0',
    width: '50%',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  error: {
    margin: 10,
    color: '#8a282b',
    marginLeft: 'auto',
    transform: [{translateX: 30}],
  },
  closebtn: {
    marginLeft: 'auto',
    alignSelf: 'center',
  },
});
