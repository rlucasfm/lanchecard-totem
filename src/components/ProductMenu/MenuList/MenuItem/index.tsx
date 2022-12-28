import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IProductByCategory} from '../../../../typings';
import padToCurrency from '../../../../utils/padToCurrency';
import {Col, Row} from '../../../Layout';

interface MenuItemProps {
  item: IProductByCategory;
  onClickItem: () => any;
}

export default function ({item, onClickItem}: MenuItemProps) {
  return (
    <View style={styles.container} onTouchEnd={onClickItem}>
      <Row>
        <Col>
          <Image style={styles.img_box} source={{uri: item.imagem}} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Text style={styles.text}>{item.nomeProduto}</Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text style={styles.text}>R$: {padToCurrency(item.valorVenda)}</Text>
        </Col>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  img_box: {
    width: 100,
    height: 100,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    marginRight: 30,
    alignSelf: 'center',
  },
});
