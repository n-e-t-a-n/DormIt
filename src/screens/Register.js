import React, { useState } from 'react';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { StyleSheet, 
         View, 
         Text, 
         TextInput, 
         Pressable,
         ToastAndroid } from 'react-native';

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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Pressable style={[styles.button, styles.registerButton]} onPress={handleRegister}> 
        <Text style={styles.text}>Register</Text>
      </Pressable>

      <Pressable style={[styles.button, styles.cancelButton]} onPress={() => navigation.goBack()}> 
        <Text style={styles.text}>Cancel</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  input: {
    height: 50,
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  registerButton : {
    marginBottom: 5,
    backgroundColor: '#000000',
    marginBottom: 3,
  },
  cancelButton : {
    backgroundColor: '#000000',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
