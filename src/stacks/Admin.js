import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getUser } from '../utils/helpers';

const AdminStack = createStackNavigator();

export default function Admin() {
  if (!getUser()) navigation.goBack();

  return (
    <AdminStack.Navigator>
    </AdminStack.Navigator>
  );
}