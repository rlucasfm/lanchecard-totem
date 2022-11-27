/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import padToCurrency from '../../../utils/padToCurrency';
import {Row, Col} from '../../Layout';

interface ProductItemProps {
  nome: string;
  valor: number;
  qnt: number;
  indexParity?: number;
}

export default function ({
  nome,
  valor,
  qnt,
  indexParity = 0,
}: ProductItemProps) {
  return (
    <Row
      style={[
        styles[`${indexParity}Color`],
        {
          height: 40,
        },
      ]}>
      <Col numRows={3} style={[styles.headerCol]}>
        <Text style={[styles.boldText]}>{nome}</Text>
      </Col>
      <Col numRows={3} style={[styles.headerCol]}>
        <Text style={[styles.boldText]}>{padToCurrency(valor)}</Text>
      </Col>
      <Col numRows={6} style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>{qnt}</Text>
      </Col>
    </Row>
  );
}
const styles = StyleSheet.create({
  headerCol: {
    borderRightWidth: 1,
    borderRightColor: 'grey',
    padding: 10,
    alignItems: 'center',
  },
  boldText: {
    fontWeight: '500',
    fontSize: 16,
  },
  '1Color': {
    backgroundColor: '#FAFAFA',
  },
  '0Color': {
    backgroundColor: '#fff',
  },
});
