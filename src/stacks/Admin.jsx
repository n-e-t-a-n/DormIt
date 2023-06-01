import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { auth } from "../../config/firebase";
import { Home } from "../screens/admin";

const AdminStack = createStackNavigator();

export default function Admin({ navigation }) {
  if (!auth.currentUser) navigation.goBack();

  return (
    <AdminStack.Navigator>
      <AdminStack.Screen name="Home" component={Home} />
    </AdminStack.Navigator>
  );
}
