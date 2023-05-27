import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens';

const UserStack = createStackNavigator();

export default function User() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="Home" component={Home} />
    </UserStack.Navigator>
  );
}