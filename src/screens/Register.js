import React, { useState } from 'react';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { StyleSheet, 
         View, 
         TextInput, 
         Button,
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
      let errorCode = error.code
                      .replace('auth/', '')
                      .replace(/-/g, ' ');
      
      errorCode = errorCode
                  .charAt(0)
                  .toUpperCase() + 
                  errorCode.slice(1) +
                  '.';

      createToast(errorCode);
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign In" onPress={handleRegister} />
      <Button title="Cancel" onPress={() => navigation.goBack()} />
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