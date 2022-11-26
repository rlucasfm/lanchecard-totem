import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../../screens/Login';
import ProductList from '../../screens/ProductList';
import LoginPage from '../../screens/LoginPage';

const {Navigator, Screen} = createNativeStackNavigator();

export default function () {
  return (
    <Navigator
      initialRouteName="LoginPage"
      screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login} />
      <Screen name="ProductList" component={ProductList} />
      <Screen name="LoginPage" component={LoginPage} />
    </Navigator>
  );
}
