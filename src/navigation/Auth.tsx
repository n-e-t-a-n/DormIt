import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Login, Register } from "@components/screens/auth";
import Admin from "@navigation/Admin";
import Owner from "@navigation/Owner";
import User from "@navigation/User";

import type { AuthStackParamList } from "@@types/navigation/Auth";

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function Auth() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />

      <AuthStack.Screen name="AdminStack" component={Admin} options={{ headerShown: false }} />
      <AuthStack.Screen name="OwnerStack" component={Owner} options={{ headerShown: false }} />
      <AuthStack.Screen name="UserStack" component={User} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
}
