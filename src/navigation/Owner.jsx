import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { AddListing, Dashboard, Reservation } from "@components/screens/owner";
import { auth } from "@config/firebase";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="AddListing" component={AddListing} />
      <Tab.Screen name="Reservation" component={Reservation} />
    </Tab.Navigator>
  );
}

export default function Owner({ navigation }) {
  if (!auth.currentUser) navigation.goBack();

  return (
    <Stack.Navigator>
      <Stack.Screen name="TabScreens" component={TabScreens} />
    </Stack.Navigator>
  );
}
