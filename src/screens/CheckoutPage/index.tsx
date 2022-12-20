/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Col, Container, Row} from '../../components/Layout';
import {Image, StyleSheet, Text, View} from 'react-native';
import SelectButton from '../../components/Buttons/SelectButton';
import NumericKeyboard from '../../components/NumericKeyboard';
import PasswordFormCard from '../../components/PasswordFormCard';
import http from '../../http-common';
import {IUserData} from '../../typings/Login';
import {useNavigation} from '@react-navigation/native';

export default function () {
  const [selectedBtn, setSelectedBtn] = useState(1);
  const [password, setPassword] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);
  const navigation = useNavigation();

  const handleRetrieve = (btnIndex: number) => {
    setSelectedBtn(btnIndex);
  };

  const handleInsert = (key: any) => {
    setPassword(prev => prev + key);
  };

  const handleDelete = () => {
    setPassword(prev => prev.slice(0, -1));
  };

  const handleSend = () => {
    http
      .get<IUserData[]>('/users')
      .then((response: any) => {
        const user_data = response.data[0];
        if (user_data.username === '123' && user_data.password === password) {
          navigation.navigate('ProductPage');
        } else {
          setErrorStatus(true);
        }
      })
      .catch(() => {
        setErrorStatus(true);
      });
  };

  const handleReturn = () => {
    navigation.navigate('ProductPage');
  };

  return (
    <Container style={styles.container}>
      <View style={styles.titlerow}>
        <Row>
          <Col numRows={6}>
            <Image
              source={require('../../assets/images/Lanchecard-Logo.png')}
            />
          </Col>
          <Col numRows={6}>
            <View style={styles.textcont}>
              <Text style={[styles.text1]}>Checkout</Text>
            </View>
          </Col>
        </Row>
      </View>
      <View style={[styles.centerComp]}>
        <Row>
          <Text style={[styles.text2]}>Selecione o momento da retirada:</Text>
        </Row>
        <Row style={{width: '60%', marginTop: 10}}>
          <Col style={[styles.btnCol]}>
            <SelectButton
              onPress={() => handleRetrieve(1)}
              isSelected={selectedBtn === 1}>
              IMEDIATO
            </SelectButton>
          </Col>
          <Col style={[styles.btnCol]}>
            <SelectButton
              onPress={() => handleRetrieve(2)}
              isSelected={selectedBtn === 2}>
              INTERVALO (MANHÃ)
            </SelectButton>
          </Col>
          <Col style={[styles.btnCol]}>
            <SelectButton
              onPress={() => handleRetrieve(3)}
              isSelected={selectedBtn === 3}>
              INTERVALO (TARDE)
            </SelectButton>
          </Col>
        </Row>
      </View>
      <View style={{marginTop: 50}}>
        <Row>
          <Col numRows={6}>
            <Row>
              <Text style={{fontSize: 24, fontWeight: '800', color: '#347393'}}>
                Confirme a sua senha:
              </Text>
            </Row>
            <Row>
              <PasswordFormCard
                password={password}
                errorStatus={errorStatus}
                handleSend={handleSend}
                handleReturn={handleReturn}
              />
            </Row>
          </Col>
          <Col>
            <NumericKeyboard
              handleKeyPressed={pressed => {
                handleInsert(pressed);
              }}
              deleteKeyPressed={handleDelete}
            />
          </Col>
        </Row>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 50,
  },
  btnCol: {
    width: 170,
    height: 60,
    marginRight: 5,
    marginLeft: 5,
  },
  titlerow: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
  },
  textcont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#347393',
  },
  text2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#347393',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerComp: {
    alignItems: 'center',
  },
  column: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 2,
    borderRadius: 20,
    elevation: 2,
  },
  containerLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
