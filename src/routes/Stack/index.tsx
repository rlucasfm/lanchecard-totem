import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductList from '../../screens/ProductList';
import LoginPage from '../../screens/LoginPage';
import ProductPage from '../../screens/ProductPage';

const {Navigator, Screen} = createNativeStackNavigator();

export default function () {
  return (
    <Navigator
      initialRouteName="ProductPage"
      screenOptions={{headerShown: false}}>
      <Screen name="ProductList" component={ProductList} />
      <Screen name="LoginPage" component={LoginPage} />
      <Screen name="ProductPage" component={ProductPage} />
    </Navigator>
  );
}
