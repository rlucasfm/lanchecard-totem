import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from '../../screens/LoginPage';
import ProductPage from '../../screens/ProductPage';
import CheckoutPage from '../../screens/CheckoutPage';
import CompletePage from '../../screens/CompletePage';
import InitialSettingsPage from '../../screens/InitialSettingsPage';
import PrinterTestPage from '../../screens/PrinterTestPage';

const {Navigator, Screen} = createNativeStackNavigator();

export default function () {
  return (
    <Navigator
      initialRouteName="LoginPage"
      screenOptions={{headerShown: false}}>
      <Screen name="InitialSettingsPage" component={InitialSettingsPage} />
      <Screen name="LoginPage" component={LoginPage} />
      <Screen name="ProductPage" component={ProductPage} />
      <Screen name="CheckoutPage" component={CheckoutPage} />
      <Screen name="CompletePage" component={CompletePage} />
      <Screen name="PrinterTestPage" component={PrinterTestPage} />
    </Navigator>
  );
}
