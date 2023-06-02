import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { createToastShort } from "../../utils/helpers";
import { homeStyles } from "../../styles/user";

import { default as DashboardScreen } from "./Dashboard";
import { default as AddListingScreen } from "./AddListing";
import { default as ReservationApprovalPage } from "./Reservation";

// Bottom Tab Stuff
const Tab = createBottomTabNavigator();

function Dashboard() {
  const navigation = useNavigation();

  return (
    <View>
      <DashboardScreen navigation={navigation} />
    </View>
  );
}

function AddListing() {
  const navigation = useNavigation();

  return (
    <View>
      <AddListingScreen navigation={navigation} />
    </View>
  );
}

function Reservations() {
  const navigation = useNavigation();

  return (
    <View>
      <ReservationApprovalPage navigation={navigation} />
    </View>
  );
}

export default function Home({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null,
    });
  }, [navigation]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        createToastShort("You've logged out.");
        navigation.goBack();
      })
      .catch((error) => {
        createToastShort(error.code);
      });
  };

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.email}>{auth.currentUser?.email} | Owner</Text>
      <StatusBar style="auto" />

      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Add Listing" component={AddListing} />
        <Tab.Screen name="Reservations" component={Reservations} />
      </Tab.Navigator>
      <Pressable style={[homeStyles.button, homeStyles.logoutButton]} onPress={handleLogout}>
        <Text style={homeStyles.text}>Logout</Text>
      </Pressable>
    </View>
  );
}
