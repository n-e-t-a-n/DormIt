import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import type { OwnerStackParamList, OwnerTabParamList } from "@@types/navigation/Owner";
import { AddListing, Dashboard, Reservation } from "@components/screens/owner";

const Tab = createBottomTabNavigator<OwnerTabParamList>();
const Stack = createStackNavigator<OwnerStackParamList>();

function TabScreens() {
  return (
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="AddListing" component={AddListing} />
      <Tab.Screen name="Reservation" component={Reservation} />
    </Tab.Navigator>
  );
}

export default function Owner() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabScreens" component={TabScreens} />
    </Stack.Navigator>
  );
}
