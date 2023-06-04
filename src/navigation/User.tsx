import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import type { UserStackParamList, UserTabParamList } from "@@types/navigation/User";
import { DormDetails, Home, Search, UserProfile } from "@components/screens/user";

const Tab = createBottomTabNavigator<UserTabParamList>();
const Stack = createStackNavigator<UserStackParamList>();

function TabScreens() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="UserProfile" component={UserProfile} options={{ title: "User Profile" }} />
    </Tab.Navigator>
  );
}

export default function User() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabScreens" component={TabScreens} options={{ headerShown: false }} />
      <Stack.Screen name="DormDetails" component={DormDetails} options={{ title: "Dorm Details" }} />
    </Stack.Navigator>
  );
}
