/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import padToCurrency from '../../../utils/padToCurrency';
import {Row, Col} from '../../Layout';

interface ProductItemProps {
  nome: string;
  valor: number;
  qnt: number;
  indexParity?: number;
  onPlus: () => any;
  onLess: () => any;
}

export default function ({
  nome,
  valor,
  qnt,
  indexParity = 0,
  onPlus,
  onLess,
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
      <Col
        numRows={6}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {qnt <= 1 ? (
          <Icon
            name="delete"
            size={20}
            color={'#FF0000'}
            style={styles.deleteIcon}
            onPress={onLess}
          />
        ) : (
          <TouchableOpacity style={[styles.qntButton]} onPress={onLess}>
            <Text>-</Text>
          </TouchableOpacity>
        )}
        <Text style={[styles.qntText]}>{qnt}</Text>
        <TouchableOpacity style={[styles.qntButton]} onPress={onPlus}>
          <Text>+</Text>
        </TouchableOpacity>
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
  qntText: {
    marginRight: 20,
    marginLeft: 20,
  },
  deleteIcon: {},
  qntButton: {
    backgroundColor: '#ECECEC',
    borderRadius: 40,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignContent: 'center',
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
