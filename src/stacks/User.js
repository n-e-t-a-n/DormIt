import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens';

const Stack = createStackNavigator();

export default function User() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}