import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/admin';
import { auth } from '../../config/firebase';

const AdminStack = createStackNavigator();

export default function Admin() {
  if (!auth.currentUser) navigation.goBack();

  return (
    <AdminStack.Navigator>
      <AdminStack.Screen name="Home" component={Home} />
    </AdminStack.Navigator>
  );
}