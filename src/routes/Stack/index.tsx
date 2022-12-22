import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from '../../screens/LoginPage';
import ProductPage from '../../screens/ProductPage';
import CheckoutPage from '../../screens/CheckoutPage';

const {Navigator, Screen} = createNativeStackNavigator();

export default function () {
  return (
    <Navigator
      initialRouteName="LoginPage"
      screenOptions={{headerShown: false}}>
      <Screen name="LoginPage" component={LoginPage} />
      <Screen name="ProductPage" component={ProductPage} />
      <Screen name="CheckoutPage" component={CheckoutPage} />
    </Navigator>
  );
}
