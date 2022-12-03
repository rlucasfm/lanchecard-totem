import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Col, Row} from '../../../Layout';

interface MenuItemProps {
  item: string;
}

export default function ({item}: MenuItemProps) {
  return (
    <View style={styles.container}>
      <Row>
        <Col>
          <Image
            style={styles.img_box}
            source={require('../../../../assets/images/food-1.png')}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Text style={styles.text}>{item}</Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text style={styles.text}>R$: 9,90</Text>
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
