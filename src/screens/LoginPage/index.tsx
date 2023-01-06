import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Modal} from 'react-native';
import LoginFormCard from '../../components/LoginFormCard';
import NumericKeyboard from '../../components/NumericKeyboard';
import http from '../../http-common';
import {IUserData} from './../../typings/index';
import {useNavigation} from '@react-navigation/native';
import UserData from '../../utils/data/UserData';
import ModalBase from '../../components/ModalBase';

export default function () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordActive, setPasswordActive] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (errorStatus) {
      setModalVisible(true);
    }
  }, [errorStatus]);

  const handleSend = () => {
    http
      .post<IUserData[]>('/cliente/login', {
        NrCartaoMatricula: username,
        senha: password,
      })
      .then((response: any) => {
        const res = response.data;
        if (res.statusLogin) {
          UserData.setUserData(res.dadosCliente);
          navigation.navigate('ProductPage');
        } else {
          setErrorStatus(true);
        }
      })
      .catch(() => {
        setErrorStatus(true);
      });
  };

  const handleDelete = () => {
    if (!passwordActive) {
      setUsername(prev => prev.slice(0, -1));
    } else {
      setPassword(prev => prev.slice(0, -1));
    }
  };

  const handleInsert = (key: any) => {
    if (passwordActive) {
      setPassword(prev => prev + key);
    } else {
      setUsername(prev => prev + key);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setErrorStatus(false);
  };

  return (
    <View style={styles.view}>
      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <ModalBase
          onClose={handleCloseModal}
          title={'Ops! Algo deu errado'}
          text={'Conta digital não encontrada'}
          closeBtnText={'Voltar'}
        />
      </Modal>
      <View style={styles.container_title}>
        <View style={styles.rows}>
          <Image source={require('../../assets/images/Lanchecard-Logo.png')} />
          <Text style={styles.subtitle}>
            Olá! Insira seus dados para continuar:
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.column}>
          <View style={styles.card}>
            <LoginFormCard
              username={username}
              password={password}
              setPasswordActive={setPasswordActive}
              errorStatus={errorStatus}
              handleSend={handleSend}
            />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.card}>
            <NumericKeyboard
              handleKeyPressed={pressed => {
                handleInsert(pressed);
              }}
              deleteKeyPressed={handleDelete}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingLeft: 80,
    paddingRight: 80,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container_title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    maxHeight: 140,
    marginLeft: 10,
  },
  column: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 20,
    elevation: 2,
    marginTop: 10,
    marginBottom: 50,
  },
  rows: {
    flexDirection: 'column',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#347393',
    marginTop: 22,
    marginLeft: 10,
  },
});
