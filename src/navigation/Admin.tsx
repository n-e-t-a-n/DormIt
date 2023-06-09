import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import type { AdminStackParamList } from "@@types/navigation/Admin";
import { Home } from "@components/screens/admin";

const AdminStack = createStackNavigator<AdminStackParamList>();

export default function Admin() {
  return (
    <AdminStack.Navigator>
      <AdminStack.Screen name="Home" component={Home} />
    </AdminStack.Navigator>
  );
}
