import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getUser } from '../utils';
import { Home } from '../screens';

const UserStack = createStackNavigator();

export default function User() {
  if (!getUser()) navigation.goBack();

  return (
    <UserStack.Navigator>
      <UserStack.Screen name="Home" component={Home} />
    </UserStack.Navigator>
  );
}