import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getUser } from '../utils';

const AdminStack = createStackNavigator();

export default function Admin() {
  if (!getUser()) navigation.goBack();

  return (
    <AdminStack.Navigator>
    </AdminStack.Navigator>
  );
}