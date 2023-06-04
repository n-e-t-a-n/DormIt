import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useAuthState } from "react-firebase-hooks/auth";

import Auth from "@navigation/Auth";
import RoleResolver from "@navigation/RoleResolver";

import { auth } from "@config/firebase";

function App() {
  const [user] = useAuthState(auth);

  return <NavigationContainer>{user ? <RoleResolver user={user} /> : <Auth />}</NavigationContainer>;
}

export default App;
