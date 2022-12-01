import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Row, Col} from '../Layout';
import Tabs from './Tabs';

export default function () {
  const tabs = [
    'Almoços',
    'Bebidas',
    'Bolos',
    'Doces',
    'Frutas',
    'Salgados',
    'Sobremesas',
    'Sobremesas 2',
    'Sob 3',
    'Sob 4',
    'Sob 5',
    'Sob 6',
  ];

  return (
    <View style={styles.view}>
      <Row>
        <Col>
          <Tabs tabList={tabs} />
        </Col>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginLeft: 12,
  },
});
