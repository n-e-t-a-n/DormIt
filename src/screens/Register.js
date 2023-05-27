import React, { useState } from 'react';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { View, 
         Text, 
         TextInput, 
         Pressable,
         ToastAndroid } from 'react-native';
import { registerStyles } from '../styles';

export default function Login({ navigation }) {
  const createToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT)
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigation.goBack();
      createToast("Account created successfully!");
    })
    .catch((error) => {
      let warningMessage = error.code
                      .replace('auth/', '')
                      .replace(/-/g, ' ');

      createToast(warningMessage
                  .charAt(0)
                  .toUpperCase() + 
                  warningMessage.slice(1) +
                  '.');
    });
  };

  return (
    <View style={registerStyles.container}>
      <TextInput
        style={registerStyles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={registerStyles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Pressable style={[registerStyles.button, registerStyles.registerButton]} onPress={handleRegister}> 
        <Text style={registerStyles.text}>Register</Text>
      </Pressable>

      <Pressable style={[registerStyles.button, registerStyles.cancelButton]} onPress={() => navigation.goBack()}> 
        <Text style={registerStyles.text}>Cancel</Text>
      </Pressable>
    </View>
  );
}
