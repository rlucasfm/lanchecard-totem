import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Row, Col} from '../../Layout';

interface TabsProps {
  tabList: Array<any>;
}

export default function ({tabList}: TabsProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const [visibleTabs, setVisibleTabs] = useState(tabList.slice(0, 6));
  const [behindBtn, setBehindBtn] = useState(false);
  const [aheadBtn, setAheadBtn] = useState(true);

  const handleVisibleTabs = (index: number) => {
    setVisibleTabs(tabList.slice(index, index + 6));
  };

  const handleNext = () => {
    setTabIndex(index => index + 1);
    handleVisibleTabs(tabIndex);

    if (tabIndex === 0) {
      setBehindBtn(false);
    } else {
      setBehindBtn(true);
    }

    if (tabIndex >= tabList.length - 6) {
      setAheadBtn(false);
    }
  };

  const handleBack = () => {
    setTabIndex(index => index - 1);
    handleVisibleTabs(tabIndex);

    if (tabIndex === 0) {
      setBehindBtn(false);
      setAheadBtn(true);
    }
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
          <Col numRows={2} key={i} style={styles.inner_col}>
            <Text style={styles.tab_text}>{obj}</Text>
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
  },
  tab_text_selected: {
    color: '#347393',
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
});
