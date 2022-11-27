/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Col, Container, Row} from './../Layout/index';
import ProductItem from './ProductItem';

export default function () {
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
    <View style={styles.bg}>
      <Container style={styles.container}>
        <Row style={{height: 50}}>
          <Col style={[styles.rowFlex, styles.contentOnEnd]}>
            <Text style={[styles.textBase]}>Pedido </Text>
            <Text style={[styles.textBase, styles.boldText]}>#1273</Text>
          </Col>
          <Col style={[styles.rowFlex, styles.contentOnCenter]}>
            <Icon name="circle-small" size={20} color={'#000'} />
          </Col>
          <Col style={[styles.rowFlex, styles.contentOnStart]}>
            <Text style={[styles.textBase]}>Total </Text>
            <Text style={[styles.textBase, styles.boldText]}>R$ 00,00</Text>
          </Col>
        </Row>
        <Row style={styles.internalList}>
          <Col>
            <Row
              style={{
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
              }}>
              <Col numRows={3} style={styles.headerCol}>
                <Text style={[styles.boldText]}>Produto</Text>
              </Col>
              <Col numRows={3} style={styles.headerCol}>
                <Text style={[styles.boldText]}>Valor (R$)</Text>
              </Col>
              <Col numRows={6} />
            </Row>
            <ScrollView style={{height: '80%'}}>
              {productData.map((obj, i) => (
                <ProductItem
                  key={i}
                  nome={obj.name}
                  valor={obj.valor}
                  qnt={obj.qnt}
                  indexParity={Math.abs(i % 2)}
                />
              ))}
            </ScrollView>
          </Col>
        </Row>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#85ABBE',
    borderRadius: 10,
  },
  container: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    padding: 2,
    paddingTop: 10,
  },
  internalList: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  headerCol: {
    borderRightWidth: 1,
    borderRightColor: 'grey',
    padding: 10,
    alignItems: 'center',
  },
  rowFlex: {
    flexDirection: 'row',
  },
  contentOnCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentOnStart: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contentOnEnd: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textBase: {
    fontWeight: '400',
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
