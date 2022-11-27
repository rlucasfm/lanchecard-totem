import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Container, Row, Col} from '../../components/Layout';
import ProductListCard from '../../components/ProductListCard';

export default function () {
  return (
    <Container style={styles.container}>
      <Row>
        <View style={styles.titlerow}>
          <Col numRows={4}>
            <Image
              source={require('../../assets/images/Lanchecard-Logo.png')}
            />
          </Col>
          <Col numRows={4}>
            <View style={styles.textcont}>
              <Text style={[styles.text1]}>Olá, </Text>
              <Text style={styles.text2}>João Felipe</Text>
            </View>
          </Col>
          <Col numRows={4}>
            <View style={styles.textcont}>
              <Text style={[styles.text1]}>Saldo: </Text>
              <Text style={styles.text2}>R$ 120,00</Text>
            </View>
          </Col>
        </View>
      </Row>
      <Row style={{height: '80%'}}>
        <Col numRows={4}>
          <ProductListCard />
        </Col>
        <Col numRows={6}>
          <Text>Menu de produtos</Text>
        </Col>
      </Row>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 50,
  },
  titlerow: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
  },
  textcont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text1: {
    fontSize: 24,
    fontWeight: '300',
    color: '#347393',
  },
  text2: {
    fontSize: 24,
    fontWeight: '800',
    color: '#347393',
  },
});
