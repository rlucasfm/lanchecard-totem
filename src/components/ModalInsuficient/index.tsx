import React from 'react';
import {Container} from '../Layout';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function ({onClose}: {onClose: () => any}) {
  return (
    <Container style={[styles.container]}>
      <Image
        source={require('../../assets/images/danger.png')}
        style={[styles.logoImage]}
      />
      <Text style={[styles.titleText]}>Saldo insuficiente para compra</Text>
      <Text style={[styles.subtitleText]}>
        Procure a cantina ou a pessoa responsável para recarregar o cartão.
      </Text>
      <TouchableOpacity onPress={onClose} style={[styles.returnbtn]}>
        <Text style={[styles.btnBack]}>Voltar</Text>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  btnBack: {
    fontWeight: '700',
    fontSize: 16,
    color: 'black',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logoImage: {
    width: 51,
    height: 51,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#D0214B',
    marginTop: 30,
    marginBottom: 5,
  },
  subtitleText: {
    fontSize: 24,
    fontWeight: '300',
  },
  returnbtn: {
    marginTop: 37,
    width: 392,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#347393',
  },
});
