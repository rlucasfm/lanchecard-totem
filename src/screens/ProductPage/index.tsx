import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import FinalizeButton from '../../components/Buttons/FinalizeButton';
import {Container, Row, Col} from '../../components/Layout';
import ProductListCard from '../../components/ProductListCard';
import QuitButton from '../../components/Buttons/QuitButton';
import ProductMenu from '../../components/ProductMenu';
import UserData from '../../utils/data/UserData';
import SessionData from '../../utils/data/SessionData';
import {ICategories} from '../../typings/Categories';
import http from '../../http-common';

export default function () {
  const [finalizeEnabled, setFinalizeEnabled] = useState(false);
  const navigation = useNavigation();
  const userData = UserData.getUserData();
  const sessionData = SessionData.getSessionData();
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    http
      .get<ICategories[]>(
        '/categoria?idEstabelecimento=' + sessionData.idEstabelecimento,
      )
      .then((response: any) => {
        setCategories(response.data);
      })
      .catch(() => {
        setCategories(null);
      });
  }, [sessionData.idEstabelecimento]);

  const handleFinalize = (pressed: any) => {
    console.log(pressed);
  };

  const handleFinalizeEnable = (selected: boolean) => {
    setFinalizeEnabled(selected);
  };

  const handleQuit = () => {
    navigation.navigate('LoginPage');
  };

  const productData = [
    {
      name: 'Produto 1',
      valor: 4027.23,
      qnt: 3,
    },
    {
      name: 'Produto 2',
      valor: 4.5,
      qnt: 3,
    },
    {
      name: 'Produto 3',
      valor: 4.5,
      qnt: 3,
    },
    {
      name: 'Produto 4',
      valor: 4.5,
      qnt: 3,
    },
    {
      name: 'Produto 5',
      valor: 4.5,
      qnt: 3,
    },
    {
      name: 'Produto 6',
      valor: 4.5,
      qnt: 3,
    },
  ];

  return (
    <Container style={styles.container}>
      <Row>
        <View style={styles.titlerow}>
          <Col numRows={4}>
            <Image
              source={require('../../assets/images/Lanchecard-Logo.png')}
            />
          </Col>
          <Col numRows={4}>
            <View style={styles.textcont}>
              <Text style={[styles.text1]}>Olá, </Text>
              <Text style={styles.text2}>{userData.nomeCliente}</Text>
            </View>
          </Col>
          <Col numRows={4}>
            <View style={styles.textcont}>
              <Text style={[styles.text1]}>Saldo: </Text>
              <Text style={styles.text2}>R$ {userData.saldoCartao}</Text>
            </View>
          </Col>
        </View>
      </Row>
      <Row style={{height: '85%'}}>
        <Col numRows={4}>
          <ProductListCard
            productSelected={handleFinalizeEnable}
            productList={productData}
          />
          <View style={styles.button_section}>
            <Row style={{marginBottom: 15}}>
              <Col>
                <FinalizeButton
                  onPress={handleFinalize}
                  enabled={finalizeEnabled}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <QuitButton onPress={handleQuit} />
              </Col>
            </Row>
          </View>
        </Col>
        <Col numRows={6}>
          {categories ? <ProductMenu tabs={categories} /> : null}
        </Col>
      </Row>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 50,
  },
  titlerow: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
  },
  textcont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text1: {
    fontSize: 24,
    fontWeight: '300',
    color: '#347393',
  },
  text2: {
    fontSize: 24,
    fontWeight: '800',
    color: '#347393',
  },
  button_section: {
    marginTop: 5,
  },
});
