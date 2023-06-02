import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { StyleSheet, TextInput, ToastAndroid, View } from "react-native";

import { Button } from "@components/common";
import { auth } from "@config/firebase";
import { color } from "@theme";

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
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} />

      <Button label="Register" style={styles.registerButton} onPress={handleRegister} />
      <Button label="Cancel" onPress={() => navigation.goBack()} />
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
  registerButton: {
    marginTop: 5,
    marginBottom: 3,
  },
});

export default Register;
