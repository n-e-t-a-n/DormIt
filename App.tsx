import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useAuthState } from "react-firebase-hooks/auth";

import Auth from "@navigation/Auth";
import RoleResolver from "@navigation/RoleResolver";

import useCreateToastOnAuthChange from "@hooks/useCreateToastOnAuthChange";
import useFirestoreState from "@hooks/useFirestoreState";
import { auth } from "@config/firebase";

function App() {
  const [user] = useAuthState(auth);
  const [firestore] = useFirestoreState(user);

  useCreateToastOnAuthChange(user);

  return <NavigationContainer>{user && firestore ? <RoleResolver /> : <Auth />}</NavigationContainer>;
}

export default App;
