import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Admin, Owner, User } from ".";
import { Login, Register } from "../screens/auth";

const AuthStack = createStackNavigator();

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
