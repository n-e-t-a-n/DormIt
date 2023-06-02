import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { createToastShort } from "../../utils/helpers";
import { homeStyles } from "../../styles/user";

export default function Home({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null,
    });
  }, [navigation]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        createToastShort("You've logged out.");
        navigation.goBack();
      })
      .catch((error) => {
        createToastShort(error.code);
      });
  };

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.email}>{auth.currentUser?.email} | Owner</Text>
      <StatusBar style="auto" />

      <Pressable style={[homeStyles.button, homeStyles.logoutButton]} onPress={handleLogout}>
        <Text style={homeStyles.text}>Logout</Text>
      </Pressable>
    </View>
  );
}
