import React from "react";

import { signOut } from "firebase/auth";
import { Pressable, Text, ToastAndroid, View } from "react-native";

import { auth } from "@config/firebase";
import { userProfileStyles } from "@styles/user";

function UserProfile({ navigation }) {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        ToastAndroid.show("You've logged out.", ToastAndroid.SHORT);
        navigation.navigate("Login");
      })
      .catch((error) => {
        ToastAndroid.show(error.code, ToastAndroid.SHORT);
      });
  };

  return (
    <View style={userProfileStyles.container}>
      <Text>Username: </Text>
      <Text>Email: {auth.currentUser?.email}</Text>

      <Pressable style={[userProfileStyles.button, userProfileStyles.logoutButton]} onPress={handleLogout}>
        <Text style={userProfileStyles.text}>Logout</Text>
      </Pressable>
    </View>
  );
}

export default UserProfile;
