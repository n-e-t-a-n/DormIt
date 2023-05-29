import React from 'react';
import { auth } from '../../../config/firebase';
import { StatusBar } from 'expo-status-bar';
import { getUser } from '../../utils';
import { Text, 
         View,
         Pressable } from 'react-native';
import { homeStyles } from '../../styles';
import { createToastShort } from '../../utils';
import { signOut } from 'firebase/auth';

export default function Home({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null,
    });
  }, [navigation]);

  const handleLogout = () => {
    signOut(auth).then(() => {
      createToastShort("You've logged out.");
      navigation.goBack();
    }).catch((error) => {
      createToastShort(error.code);
    });
  }

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.email}>{getUser().email}</Text>
      <StatusBar style="auto" />

      <Pressable style={[homeStyles.button, homeStyles.logoutButton]} onPress={handleLogout}> 
        <Text style={homeStyles.text}>Logout</Text>
      </Pressable>
    </View>
  );
}