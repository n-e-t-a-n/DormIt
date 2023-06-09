import React, { useEffect, useState } from "react";

import { StyleSheet, TextInput, ToastAndroid, View } from "react-native";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import type { AuthStackScreenProps } from "@@types/navigation/Auth";
import { Button, Loading } from "@components/common";
import { auth } from "@config/firebase";
import { color } from "@theme";

function Login({ navigation }: AuthStackScreenProps<"Login">) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (error) {
      const warningMessage = error?.code?.replace("auth/", "")?.replace(/-/g, " ");
      const formattedMessage = `${
        (warningMessage?.charAt(0).toUpperCase() ?? "") + (warningMessage?.slice(1) ?? "")
      }.`;
      ToastAndroid.show(formattedMessage, ToastAndroid.SHORT);
    }
  }, [error]);

  if (loading) return <Loading />;

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} />

      <Button
        label="Login"
        style={styles.loginButton}
        onPress={() => signInWithEmailAndPassword(email?.trim(), password)}
      />
      <Button label="Register" onPress={() => navigation.navigate("Register")} />
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
  input: {
    height: 50,
    width: "100%",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: color.LIGHT_GRAY,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  loginButton: {
    marginBottom: 3,
  },
});

export default Login;
