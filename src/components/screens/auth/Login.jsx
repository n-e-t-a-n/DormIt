import React, { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { Pressable, Text, TextInput, View } from "react-native";

import { auth } from "@config/firebase";
import { loginStyles } from "@styles/auth";
import { getCurrentUser } from "@utils/database";
import { createToastShort } from "@utils/helpers";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email?.trim(), password)
      .then(async () => {
        createToastShort("Successfully logged in.");

        const user = await getCurrentUser();

        navigation.navigate(`${user?.role}Stack`, { screen: "Home" });
      })
      .catch((error) => {
        const warningMessage = error?.code?.replace("auth/", "")?.replace(/-/g, " ");

        createToastShort(
          `${(warningMessage?.charAt(0).toUpperCase() ?? "") + (warningMessage?.slice(1) ?? "")}.`
        );
      });
  };

  return (
    <View style={loginStyles.container}>
      <TextInput
        style={loginStyles.input}
        placeholder="Email"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />

      <TextInput
        style={loginStyles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text);
        }}
      />

      <Pressable style={[loginStyles.button, loginStyles.loginButton]} onPress={handleLogin}>
        <Text style={loginStyles.text}>Login</Text>
      </Pressable>

      <Pressable
        style={[loginStyles.button, loginStyles.registerButton]}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={loginStyles.text}>Register</Text>
      </Pressable>
    </View>
  );
}

export default Login;
