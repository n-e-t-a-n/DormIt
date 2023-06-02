import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { Pressable, Text, TextInput, ToastAndroid, View } from "react-native";

import { auth } from "@config/firebase";
import { registerStyles } from "@styles/auth";

function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    createUserWithEmailAndPassword(auth, email?.trim(), password)
      .then(() => {
        navigation.goBack();
        ToastAndroid.show("Account created successfully!", ToastAndroid.SHORT);
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
    <View style={registerStyles.container}>
      <TextInput style={registerStyles.input} placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <TextInput
        style={registerStyles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Pressable style={[registerStyles.button, registerStyles.registerButton]} onPress={handleRegister}>
        <Text style={registerStyles.text}>Register</Text>
      </Pressable>

      <Pressable style={registerStyles.button} onPress={() => navigation.goBack()}>
        <Text style={registerStyles.text}>Cancel</Text>
      </Pressable>
    </View>
  );
}

export default Register;
