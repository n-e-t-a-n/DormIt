import React, {useEffect} from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import { useSignOut } from "react-firebase-hooks/auth";

import Loading from "@components/screens/Loading";
import { Button } from "@components/common";
import { auth } from "@config/firebase";
import { color, font } from "@theme";

function Home() {
  const [signOut, loading, error] = useSignOut(auth);

  useEffect(() => {
    if (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  }, [error]);

  if (loading) return <Loading />;

  return (
    <View style={styles.container}>
      <Text style={styles.email}>{auth.currentUser?.email} | Admin</Text>
      <StatusBar />

      <Button label="Logout" style={styles.logoutButton} onPress={() => signOut()} />
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
