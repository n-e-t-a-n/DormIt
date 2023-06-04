import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useAuthState } from "react-firebase-hooks/auth";

import Auth from "@navigation/Auth";
import RoleResolver from "@navigation/RoleResolver";

import { auth } from "@config/firebase";
import { UserContext } from "@hooks/AuthContext";

function App() {
  const [user] = useAuthState(auth);

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>{user ? <RoleResolver /> : <Auth />}</NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;
