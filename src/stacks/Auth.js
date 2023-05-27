import React from 'react';
import User from './User';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register } from '../screens';

const AuthStack = createStackNavigator();

export default function Auth() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />

      <AuthStack.Screen
        name="UserStack"
        component={User}
        options={{ headerShown: false }} 
      />
    </AuthStack.Navigator>
  );
}