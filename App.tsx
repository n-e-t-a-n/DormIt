import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useAuthState } from "react-firebase-hooks/auth";

import Auth from "@navigation/Auth";
import RoleResolver from "@navigation/RoleResolver";

import useCreateToastOnAuthChange from "@hooks/useCreateToastOnAuthChange";
import { auth } from "@config/firebase";

function App() {
  const [user] = useAuthState(auth);

  useCreateToastOnAuthChange(user);

  return <NavigationContainer>{user ? <RoleResolver /> : <Auth />}</NavigationContainer>;
}

export default App;
