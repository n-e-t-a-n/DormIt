import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getUser } from '../utils';

const OwnerStack = createStackNavigator();

export default function Owner() {
  if (!getUser()) navigation.goBack();

  return (
    <OwnerStack.Navigator>
    </OwnerStack.Navigator>
  );
}