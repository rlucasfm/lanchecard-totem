import React from 'react';
import {StyleSheet, View} from 'react-native';
import KeyButton from './KeyButton';
import DeleteButton from './DeleteButton';

interface NumericKeyboardProps {
  handleKeyPressed: (pressed: any) => any;
}

export default function ({handleKeyPressed}: NumericKeyboardProps) {
  const handleKey = (pressed: any) => {
    handleKeyPressed(pressed);
  };

  return (
    <View style={styles.container}>
      <View style={styles.columns}>
        <View style={styles.column}>
          <KeyButton
            onPress={() => {
              handleKey(1);
            }}>
            1
          </KeyButton>
        </View>
        <View style={styles.column}>
          <KeyButton
            onPress={() => {
              handleKey(2);
            }}>
            2
          </KeyButton>
        </View>
        <View style={styles.column}>
          <KeyButton
            onPress={() => {
              handleKey(3);
            }}>
            3
          </KeyButton>
        </View>
      </View>
      <View style={styles.columns}>
        <View style={styles.column}>
          <KeyButton
            onPress={() => {
              handleKey(4);
            }}>
            4
          </KeyButton>
        </View>
        <View style={styles.column}>
          <KeyButton
            onPress={() => {
              handleKey(5);
            }}>
            5
          </KeyButton>
        </View>
        <View style={styles.column}>
          <KeyButton
            onPress={() => {
              handleKey(6);
            }}>
            6
          </KeyButton>
        </View>
      </View>
      <View style={styles.columns}>
        <View style={styles.column}>
          <KeyButton
            onPress={() => {
              handleKey(7);
            }}>
            7
          </KeyButton>
        </View>
        <View style={styles.column}>
          <KeyButton
            onPress={() => {
              handleKey(8);
            }}>
            8
          </KeyButton>
        </View>
        <View style={styles.column}>
          <KeyButton
            onPress={() => {
              handleKey(9);
            }}>
            9
          </KeyButton>
        </View>
      </View>
      <View style={styles.columns}>
        <View style={styles.column_empty} />
        <View style={styles.column}>
          <KeyButton
            onPress={() => {
              handleKey(0);
            }}>
            0
          </KeyButton>
        </View>
        <View style={styles.column}>
          <DeleteButton
            onPress={() => {
              console.log('delete');
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 55,
    paddingRight: 55,
  },
  columns: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  column_empty: {
    width: '32%',
  },
});
