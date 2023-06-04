import React from "react";

import { StatusBar } from "expo-status-bar";
import { signOut } from "firebase/auth";
import { StyleSheet, Text, ToastAndroid, View } from "react-native";

import type { AdminStackScreenProps } from "@@types/navigation/Admin";
import { Button } from "@components/common";
import { auth } from "@config/firebase";
import { color, font } from "@theme";

function Home({ navigation }: AdminStackScreenProps<"Home">) {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        ToastAndroid.show("You've logged out.", ToastAndroid.SHORT);
      })
      .catch((error) => {
        ToastAndroid.show(error.code, ToastAndroid.SHORT);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.email}>{auth.currentUser?.email} | Admin</Text>
      <StatusBar />

      <Button label="Logout" style={styles.logoutButton} onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  logoutButton: {
    marginTop: 3,
    marginBottom: 3,
  },
  email: {
    fontSize: font.size.TEXT,
    lineHeight: 21,
    fontWeight: font.weight.BOLD,
    letterSpacing: 0.25,
  },
});

export default Home;
