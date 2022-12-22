import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Row, Col} from '../Layout';
import MenuList from './MenuList';
import Tabs from './Tabs';

interface ProductMenuProps {
  tabs: any;
}

export default function ({tabs}: ProductMenuProps) {
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
