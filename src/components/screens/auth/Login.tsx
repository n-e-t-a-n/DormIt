import React, { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { StyleSheet, TextInput, ToastAndroid, View } from "react-native";

import type { AuthStackScreenProps } from "@@types/navigation/Auth";
import { Button } from "@components/common";
import { auth } from "@config/firebase";
import { getAuthUser } from "@services/user";
import { color } from "@theme";

function Login({ navigation }: AuthStackScreenProps<"Login">) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email?.trim(), password)
      .then(async () => {
        ToastAndroid.show("Successfully logged in.", ToastAndroid.SHORT);

        const user = await getAuthUser();
        if (user) {
          switch (user.role) {
            case "User":
              navigation.navigate("UserStack", { screen: "TabScreens" });
              break;
            case "Owner":
              navigation.navigate("OwnerStack", { screen: "TabScreens" });
              break;
            case "Admin":
              navigation.navigate("AdminStack", { screen: "Home" });
              break;
          }
        }
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

      <Button label="Login" style={styles.loginButton} onPress={handleLogin} />
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
