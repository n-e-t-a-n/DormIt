import React from "react";

import { StatusBar } from "expo-status-bar";
import { signOut } from "firebase/auth";
import { Pressable, Text, ToastAndroid, View } from "react-native";

import { auth } from "@config/firebase";
import { homeStyles } from "@styles/user";

function Home({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null,
    });
  }, [navigation]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        ToastAndroid.show("You've logged out.", ToastAndroid.SHORT);
        navigation.goBack();
      })
      .catch((error) => {
        ToastAndroid.show(error.code, ToastAndroid.SHORT);
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

export default Home;
