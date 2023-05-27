import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login, Register } from '../screens';

const AuthStack = createStackNavigator();

export default function Auth() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
}