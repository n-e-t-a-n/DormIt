import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Login({ navigation }) {
  const handleSignIn = async () => {

  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        onChangeText={() => {}}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={() => {}}
      />
      <Button title="Login" onPress={handleSignIn} />
      <Button title="Register" onPress={() => navigation.navigate("Register")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});