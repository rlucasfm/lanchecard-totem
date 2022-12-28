import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IProductByCategory} from '../../typings';
import {Row, Col} from '../Layout';
import MenuList from './MenuList';
import Tabs from './Tabs';

interface ProductMenuProps {
  tabs: any;
  addItem: (item: IProductByCategory) => any;
}

export default function ({tabs, addItem}: ProductMenuProps) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleAddItem = (item: any) => {
    addItem(item);
  };

  return (
    <View style={styles.view}>
      <Row>
        <Col>
          <Tabs tabList={tabs} onChangeTab={obj => setSelectedTab(obj)} />
        </Col>
      </Row>
      <Row style={{marginTop: 10, padding: 20, marginBottom: 70}}>
        <Col>
          <MenuList selectedTab={selectedTab} addItem={handleAddItem} />
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
