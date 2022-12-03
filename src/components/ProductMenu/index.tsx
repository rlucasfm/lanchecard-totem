import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {Row, Col} from '../Layout';
import MenuList from './MenuList';
import Tabs from './Tabs';

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

export default function () {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <View style={styles.view}>
      <Row>
        <Col>
          <Tabs tabList={tabs} onChangeTab={obj => setSelectedTab(obj)} />
        </Col>
      </Row>
      <Row style={{marginTop: 10, padding: 20, marginBottom: 70}}>
        <Col>
          <MenuList />
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
