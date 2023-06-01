import { StatusBar } from "expo-status-bar";
import { signOut } from "firebase/auth";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { auth } from "../../../config/firebase";
import { homeStyles } from "../../styles/user";
import { createToastShort } from "../../utils/helpers";

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
      <Text style={homeStyles.email}>{auth.currentUser?.email} | Admin</Text>
      <StatusBar style="auto" />

      <Pressable style={[homeStyles.button, homeStyles.logoutButton]} onPress={handleLogout}>
        <Text style={homeStyles.text}>Logout</Text>
      </Pressable>
    </View>
  );
}
