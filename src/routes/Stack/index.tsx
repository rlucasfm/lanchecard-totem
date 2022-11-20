import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../../screens/Login';
import ProductList from '../../screens/ProductList';

const {Navigator, Screen} = createNativeStackNavigator();

export default function () {
  return (
    <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login} />
      <Screen name="ProductList" component={ProductList} />
    </Navigator>
  );
}
