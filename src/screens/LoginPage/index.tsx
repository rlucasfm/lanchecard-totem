import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoginFormCard from '../../components/LoginFormCard';
import NumericKeyboard from '../../components/NumericKeyboard';

export default function () {
  const [pressedKey, setPressedKey] = useState('');

  return (
    <View style={styles.view}>
      <View style={styles.container_title}>
        <View style={styles.rows}>
          <Text> Logo lanchecard</Text>
          <Text> Texto 2</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.column}>
          <View style={styles.card}>
            <LoginFormCard insertedKey={pressedKey} />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.card}>
            <NumericKeyboard
              handleKeyPressed={pressed => {
                setPressedKey(pressed);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingLeft: 80,
    paddingRight: 80,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container_title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    maxHeight: 150,
  },
  column: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 20,
    elevation: 2,
    margin: 30,
  },
  rows: {
    flexDirection: 'column',
  },
});
