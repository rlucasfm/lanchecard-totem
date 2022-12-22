import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Row, Col} from '../../Layout';

interface TabsProps {
  tabList: Array<any>;
  onChangeTab: (obj: any) => void;
}

export default function ({tabList, onChangeTab}: TabsProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const [visibleTabs, setVisibleTabs] = useState(tabList.slice(0, 6));
  const [behindBtn, setBehindBtn] = useState(false);
  const [aheadBtn, setAheadBtn] = useState(true);
  const [selectedTab, setSelectedTab] = useState(tabList[0]);

  useEffect(() => {
    if (tabIndex <= 0) {
      setBehindBtn(false);
    } else {
      setBehindBtn(true);
    }

    if (tabIndex >= tabList.length - 6) {
      setAheadBtn(false);
    } else {
      setAheadBtn(true);
    }
  }, [tabIndex, tabList, tabList.length]);

  const updateVisibleTabs = (index: number) => {
    setVisibleTabs(tabList.slice(index, index + 6));
  };

  const handleNext = () => {
    if (tabIndex + 1 <= tabList.length - 6) {
      setTabIndex(ind => ind + 1);
      updateVisibleTabs(tabIndex + 1);
    }
  };

  const handleBack = () => {
    if (tabIndex - 1 >= 0) {
      setTabIndex(ind => ind - 1);
      updateVisibleTabs(tabIndex - 1);
    }
  };

  const handleSelectTab = (obj: any) => {
    setSelectedTab(obj);
    onChangeTab(obj);
  };

  return (
    <View>
      <Row>
        {behindBtn ? (
          <Icon
            name="chevron-left"
            size={20}
            color={'#FFFFFF'}
            style={styles.behind_btn}
            onPress={handleBack}
          />
        ) : null}
        {visibleTabs.map((obj, i) => (
          <Col
            numRows={2}
            key={i}
            style={[
              styles.inner_col,
              selectedTab === obj ? styles.selected_tab : null,
            ]}>
            <TouchableOpacity onPress={() => handleSelectTab(obj)}>
              <Text
                style={[
                  styles.tab_text,
                  selectedTab === obj ? styles.selected_text : null,
                ]}>
                {obj.nomeCategoria}
              </Text>
            </TouchableOpacity>
          </Col>
        ))}
        {aheadBtn ? (
          <Icon
            name="chevron-right"
            size={20}
            color={'#FFFFFF'}
            style={styles.ahead_btn}
            onPress={handleNext}
          />
        ) : null}
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  tab_text: {
    color: 'rgba(60, 60, 67, 0.6)',
    fontSize: 16,
    fontWeight: '700',
  },
  inner_col: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ahead_btn: {
    marginLeft: 10,
    backgroundColor: '#85ABBE',
    padding: 10,
  },
  behind_btn: {
    marginRight: 10,
    backgroundColor: '#85ABBE',
    padding: 10,
  },
  selected_tab: {
    borderBottomColor: '#347393',
    borderBottomWidth: 2,
  },
  selected_text: {
    color: '#347393',
  },
});
