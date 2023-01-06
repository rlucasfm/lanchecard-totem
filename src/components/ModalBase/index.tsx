import React from 'react';
import {Container} from '../Layout';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ModalBaseProps {
  onClose: () => any;
  title: string;
  text: string;
  closeBtnText: string;
}

export default function ({onClose, title, text, closeBtnText}: ModalBaseProps) {
  return (
    <Container style={[styles.container]}>
      <Image
        source={require('../../assets/images/danger.png')}
        style={[styles.logoImage]}
      />
      <Text style={[styles.titleText]}>{title}</Text>
      <Text style={[styles.subtitleText]}>{text}</Text>
      <TouchableOpacity onPress={onClose} style={[styles.returnbtn]}>
        <Text style={[styles.btnBack]}>{closeBtnText}</Text>
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
