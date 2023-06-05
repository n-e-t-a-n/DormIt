import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useAuthState } from "react-firebase-hooks/auth";

import Auth from "@navigation/Auth";
import RoleResolver from "@navigation/RoleResolver";

import { ToastAndroid } from "react-native";

import useEffectAfterMount from "@hooks/useEffectAfterMount";
import { auth } from "@config/firebase";

function App() {
  const [user] = useAuthState(auth);

  useEffectAfterMount(() => {
    const message = user ? "Successfully logged in." : "You've logged out";
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }, [user]);

  return <NavigationContainer>{user ? <RoleResolver /> : <Auth />}</NavigationContainer>;
}

export default App;
