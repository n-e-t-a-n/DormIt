import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { getUser } from '../utils';
import { StyleSheet, 
         Text, 
         View,
         Pressable } from 'react-native';
import { homeStyles } from '../styles';
import { createToastShort } from '../utils';
import { getAuth, signOut } from 'firebase/auth';

export default function Home() {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      createToastShort("You've logged out.");
    }).catch((error) => {
      let warningMessage = error.code
                           .replace('auth/', '')
                           .replace(/-/g, ' ');

      createToastShort(warningMessage
                        .charAt(0)
                        .toUpperCase() + 
                        warningMessage.slice(1) +
                        '.');
    });
  }

  return (
    <View style={styles.container}>
      <Text>{getUser().email}</Text>
      <StatusBar style="auto" />

      <Pressable style={[homeStyles.button, homeStyles.logoutButton]} onPress={handleLogout}> 
        <Text style={homeStyles.text}>Logout</Text>
      </Pressable>
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