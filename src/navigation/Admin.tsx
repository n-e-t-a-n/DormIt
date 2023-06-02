import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import type { AdminStackParamList } from "@@types/navigation/Admin";
import type { AuthStackScreenProps } from "@@types/navigation/Auth";
import { Home } from "@components/screens/admin";
import { auth } from "@config/firebase";

const AdminStack = createStackNavigator<AdminStackParamList>();

export default function Admin({ navigation }: AuthStackScreenProps<"AdminStack">) {
  if (!auth.currentUser) navigation.goBack();

  return (
    <AdminStack.Navigator>
      <AdminStack.Screen name="Home" component={Home} />
    </AdminStack.Navigator>
  );
}
