import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, UserProfile, Search, DormDetails } from '../screens/user';
import { auth } from '../../config/firebase';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="UserProfile" component={UserProfile} options={{ title: 'User Profile' }}/>
    </Tab.Navigator>
  );
}

export default function User({ navigation }) {
  if (!auth.currentUser) navigation.goBack();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabScreens"
        component={TabScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="DormDetails" component={DormDetails} options={{ title: 'Dorm Details' }}/>
    </Stack.Navigator>
  );
}
