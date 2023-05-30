import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/user';
import { auth } from 'firebase/auth';

const UserStack = createStackNavigator();

export default function User({ navigation }) {
  if (!auth.currentUser) navigation.goBack();

  return (
    <UserStack.Navigator>
      <UserStack.Screen name="Home" component={Home} />
    </UserStack.Navigator>
  );
}