/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Col, Container, Row} from './../Layout/index';
import ProductItem from './ProductItem';
import {IProductList} from './../../typings/index';
import padToCurrency from '../../utils/padToCurrency';

interface ProductListCardsProps {
  productSelected: (selected: boolean) => void;
  productList: Array<IProductList>;
  onPlus: (item: IProductList) => any;
  onLess: (item: IProductList) => any;
}

export default function ({
  productSelected,
  productList,
  onPlus,
  onLess,
}: ProductListCardsProps) {
  productSelected(false);

  const calculateSum = () => {
    let value = 0;
    productList.forEach((item: IProductList) => {
      value += item.quantity * item.valorVenda;
    });
    return value;
  };

  return (
    <View style={styles.bg}>
      <Container style={styles.container}>
        <Row style={{height: 25}}>
          <Col style={[styles.rowFlex, styles.contentOnEnd]}>
            <Text style={[styles.textBase]}>Pedido </Text>
            <Text style={[styles.textBase, styles.boldText]}>#1273</Text>
          </Col>
          <Col style={[styles.rowFlex, styles.contentOnCenter]}>
            <Icon name="circle-small" size={20} color={'#000'} />
          </Col>
          <Col style={[styles.rowFlex, styles.contentOnStart]}>
            <Text style={[styles.textBase]}>Total </Text>
            <Text style={[styles.textBase, styles.boldText]}>
              R$ {padToCurrency(calculateSum())}
            </Text>
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
            <ScrollView style={{height: '84%'}}>
              {productList.map((obj, i) => (
                <ProductItem
                  key={i}
                  nome={obj.nomeProduto}
                  valor={obj.valorVenda}
                  qnt={obj.quantity}
                  indexParity={Math.abs(i % 2)}
                  onPlus={() => onPlus(obj)}
                  onLess={() => onLess(obj)}
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
    paddingBottom: 10,
  },
  internalList: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
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
