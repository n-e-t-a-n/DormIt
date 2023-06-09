import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastAndroid } from "react-native";

import Auth from "@navigation/Auth";
import RoleResolver from "@navigation/RoleResolver";
import useEffectAfterMount from "@hooks/effectAfterMount";
import useFirestoreState from "@hooks/firestoreState";
import { auth } from "@config/firebase";

function App() {
  const [user] = useAuthState(auth);
  const [hasFirestoreData] = useFirestoreState(user);

  useEffectAfterMount(() => {
    const message = user ? "Successfully logged in." : "You've logged out";
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }, [user]);

  return (
    <NavigationContainer>{user && hasFirestoreData ? <RoleResolver /> : <Auth />}</NavigationContainer>
  );
}

export default App;
