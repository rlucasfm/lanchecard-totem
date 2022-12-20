import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductList from '../../screens/ProductList';
import LoginPage from '../../screens/LoginPage';
import ProductPage from '../../screens/ProductPage';
import CheckoutPage from '../../screens/CheckoutPage';

const {Navigator, Screen} = createNativeStackNavigator();

export default function () {
  return (
    <Navigator
      initialRouteName="CheckoutPage"
      screenOptions={{headerShown: false}}>
      <Screen name="ProductList" component={ProductList} />
      <Screen name="LoginPage" component={LoginPage} />
      <Screen name="ProductPage" component={ProductPage} />
      <Screen name="CheckoutPage" component={CheckoutPage} />
    </Navigator>
  );
}
