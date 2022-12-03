import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import MenuItem from './MenuItem';

const DATA = [
  'item 1',
  'item 2',
  'item 3',
  'item 4',
  'item 5',
  'item 6',
  'item 7',
  'item 8',
  'item 9',
  'item 10',
  'item 11',
  'item 12',
  'item 13',
  'item 14',
  'item 15',
  'item 16',
  'item 17',
  'item 18',
  'item 19',
  'item 20',
];

export default function () {
  return <FlatList data={DATA} numColumns={5} renderItem={MenuItem} />;
}

const styles = StyleSheet.create({});
