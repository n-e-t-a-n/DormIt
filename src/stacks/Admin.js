import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from '../../config/firebase';

const AdminStack = createStackNavigator();

export default function Admin() {
  if (!auth.currentUser) navigation.goBack();

  return (
    <AdminStack.Navigator>
    </AdminStack.Navigator>
  );
}