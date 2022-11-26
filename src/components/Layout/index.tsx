import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Container = ({style, children}) => (
  <View style={[styles.container, style]}>{children}</View>
);

export const Row = ({style = null, children}) => (
  <View style={[styles.row, style]}>{children}</View>
);

export const Col = ({numRows = 1, style = null, children}) => (
  <View style={[styles[`${numRows}col`], style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 12,
  },
  row: {
    flexDirection: 'row',
  },
  '1col': {
    flex: 1,
  },
  '2col': {
    flex: 2,
  },
  '3col': {
    flex: 3,
  },
  '4col': {
    flex: 4,
  },
  '5col': {
    flex: 5,
  },
  '6col': {
    flex: 6,
  },
  '7col': {
    flex: 7,
  },
  '8col': {
    flex: 8,
  },
  '9col': {
    flex: 9,
  },
  '10col': {
    flex: 10,
  },
  '11col': {
    flex: 11,
  },
  '12col': {
    flex: 12,
  },
});
