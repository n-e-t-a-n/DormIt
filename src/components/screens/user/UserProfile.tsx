import React, { useEffect } from "react";

import { useSignOut } from "react-firebase-hooks/auth";
import { StyleSheet, Text, ToastAndroid, View } from "react-native";

import { Button, Loading } from "@components/common";
import { auth } from "@config/firebase";
import { color } from "@theme";

function UserProfile() {
  const [signOut, loading, error] = useSignOut(auth);

  useEffect(() => {
    if (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  }, [error]);

  if (loading) return <Loading />;

  return (
    <View style={styles.container}>
      <Text>Username: </Text>
      <Text>Email: {auth.currentUser?.email}</Text>

      <Button label="Logout" style={styles.logoutButton} onPress={() => signOut()} />
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
