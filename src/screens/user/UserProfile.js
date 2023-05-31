import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { auth } from '../../../config/firebase';
import { userProfileStyles } from '../../styles/user';
import { createToastShort } from '../../utils/helpers';
import { signOut } from 'firebase/auth';

export default function UserProfile({navigation}) {

    const handleLogout = () => {
        signOut(auth).then(() => {
          createToastShort("You've logged out.");
          navigation.navigate("Login");
        }).catch((error) => {
          createToastShort(error.code);
        });
      }
      
  return (
    <View style={userProfileStyles.container}>
      <Text>Username: </Text>
      <Text>Email: {auth.currentUser?.email}</Text>
      
      <Pressable style={[userProfileStyles.button, userProfileStyles.logoutButton]} onPress={handleLogout}> 
        <Text style={userProfileStyles.text}>Logout</Text>
      </Pressable>
    </View>
  );
}
