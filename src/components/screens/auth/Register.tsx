import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { StyleSheet, TextInput, ToastAndroid, View } from "react-native";

import type { AuthStackScreenProps } from "@@types/navigation/Auth";
import { createUser } from "@services/user";
import { Button } from "@components/common";
import { auth } from "@config/firebase";
import { color } from "@theme";

function Register({ navigation }: AuthStackScreenProps<"Register">) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async () => {
    try {
        await createUserWithEmailAndPassword(auth, email?.trim(), password);
        await createUser({ email: email }, "User");
    } catch (error: any) {
        const warningMessage = error?.code?.replace("auth/", "")?.replace(/-/g, " ");
        const formattedMessage = `${
          (warningMessage?.charAt(0).toUpperCase() ?? "") + (warningMessage?.slice(1) ?? "")
        }.`;

        ToastAndroid.show(formattedMessage, ToastAndroid.SHORT);
      }
    }

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
