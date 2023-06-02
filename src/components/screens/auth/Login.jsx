import React, { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { Pressable, Text, TextInput, ToastAndroid, View } from "react-native";

import { auth } from "@config/firebase";
import { getAuthUser } from "@services/user";
import { loginStyles } from "@styles/auth";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email?.trim(), password)
      .then(async () => {
        ToastAndroid.show("Successfully logged in.", ToastAndroid.SHORT);

        const user = await getAuthUser();

        navigation.navigate(`${user?.role}Stack`, { screen: "Home" });
      })
      .catch((error) => {
        const warningMessage = error?.code?.replace("auth/", "")?.replace(/-/g, " ");
        const formattedMessage = `${
          (warningMessage?.charAt(0).toUpperCase() ?? "") + (warningMessage?.slice(1) ?? "")
        }.`;

        ToastAndroid.show(formattedMessage, ToastAndroid.SHORT);
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

      <Pressable style={loginStyles.button} onPress={() => navigation.navigate("Register")}>
        <Text style={loginStyles.text}>Register</Text>
      </Pressable>
    </View>
  );
}

export default Login;
