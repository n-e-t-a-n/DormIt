import React from "react";

import { signOut } from "firebase/auth";
import { StyleSheet, Text, ToastAndroid, View } from "react-native";

import { Button } from "@components/common";
import { auth } from "@config/firebase";
import { color } from "@theme";

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
    <View style={styles.container}>
      <Text>Username: </Text>
      <Text>Email: {auth.currentUser?.email}</Text>

      <Button label="Logout" style={styles.logoutButton} onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
    padding: 20,
  },
  logoutButton: {
    marginTop: 3,
    marginBottom: 3,
  },
});

export default UserProfile;
