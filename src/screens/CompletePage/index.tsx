import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Container} from '../../components/Layout';

export default function () {
  const navigation = useNavigation();

  const handleTouch = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <View style={[styles.viewfather]} onTouchEnd={handleTouch}>
      <Container style={[styles.container]}>
        <Image
          source={require('../../assets/images/Lanchecard-Logo-big.png')}
          style={[styles.logoImage]}
        />
        <Text style={[styles.titleText]}>Operação finalizada!</Text>
        <Text style={[styles.subtitleText]}>
          Clique em qualquer lugar da tela para iniciar um novo pedido.
        </Text>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  viewfather: {
    width: '100%',
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logoImage: {
    width: 442,
    height: 96,
  },
  titleText: {
    color: '#347393',
    fontSize: 24,
    fontWeight: '800',
    marginTop: 51,
    marginBottom: 12,
  },
  subtitleText: {
    color: '#347393',
    fontSize: 24,
    fontWeight: '300',
  },
});
