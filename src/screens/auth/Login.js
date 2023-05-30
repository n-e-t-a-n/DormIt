import React, { useState } from 'react';
import { auth } from '../../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { View, 
         Text, 
         TextInput, 
         Pressable } from 'react-native';
import { loginStyles } from '../../styles/auth';
import { createToastShort } from '../../utils/helpers';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email?.trim(), password)
    .then(() => {
      createToastShort("Successfully logged in.");
      navigation.navigate('UserStack', { screen:'Home' });
    })
    .catch((error) => {
      let warningMessage = error?.code
                           ?.replace('auth/', '')
                           ?.replace(/-/g, ' ');

      createToastShort(warningMessage
                       ?.charAt(0)
                       ?.toUpperCase() + 
                       warningMessage?.slice(1) +
                       '.');
    });
  };

  return (
    <View style={loginStyles.container}>
      <TextInput
        style={loginStyles.input}
        placeholder="Email"
        onChangeText={(text) => {setEmail(text)}}
      />

      <TextInput
        style={loginStyles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => {setPassword(text)}}
      />

      <Pressable style={[loginStyles.button, loginStyles.loginButton]} onPress={handleLogin}> 
        <Text style={loginStyles.text}>Login</Text>
      </Pressable>

      <Pressable style={[loginStyles.button, loginStyles.registerButton]} onPress={() => navigation.navigate("Register")}> 
        <Text style={loginStyles.text}>Register</Text>
      </Pressable>
    </View>
  );
}