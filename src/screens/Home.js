import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { getUser } from '../utils';
import { StyleSheet, 
         Text, 
         View,
         Pressable } from 'react-native';
import { homeStyles } from '../styles';
import { getAuth, signOut } from 'firebase/auth';

export default function Home() {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      
    }).catch((error) => {});
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