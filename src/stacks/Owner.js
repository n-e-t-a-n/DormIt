import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from 'firebase/auth';

const OwnerStack = createStackNavigator();

export default function Owner({ navigation }) {
  if (!auth.currentUser) navigation.goBack();

  return (
    <OwnerStack.Navigator>
    </OwnerStack.Navigator>
  );
}