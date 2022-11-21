/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Divider} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

export default function () {
  const [categoria, setCategoria] = useState('');

  return (
    <View style={styles.container}>
      <View style={[styles.column, styles.small_column]}>
        <View style={styles.card}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Olá, Richard Lucas!
          </Text>
          <Divider style={{margin: 5, marginTop: 20, marginBottom: 20}} />
          <Text>Saldo Atual: R$ 100,00</Text>
        </View>
      </View>
      <View style={[styles.column, styles.big_column]}>
        <View style={styles.card}>
          <Text>Selecione a categoria</Text>
          <Picker
            style={styles.picker}
            prompt="Seleciona a categoria"
            selectedValue={categoria}
            onValueChange={itemValue => {
              setCategoria(itemValue);
            }}>
            <Picker.Item label="teste 1" value="teste1" />
            <Picker.Item label="teste 2" value="teste2" />
          </Picker>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#f5f5f7',
  },
  column: {
    padding: 10,
  },
  small_column: {
    width: '33%',
  },
  big_column: {
    width: '66%',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 30,
    elevation: 3,
  },
  picker: {
    backfaceVisibility: 'visible',
    backgroundColor: '#f5f5f7',
  },
});
