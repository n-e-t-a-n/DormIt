import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/owner";
import { auth } from "../../config/firebase";
import { default as AddListingScreen } from "../screens/owner/AddListing";
import { default as DashboardScreen } from "../screens/owner/Dashboard";
import { default as ReservationApprovalPage } from "../screens/owner/Reservation";

const OwnerStack = createStackNavigator();

export default function Owner({ navigation }) {
  return (
    <OwnerStack.Navigator>
      <OwnerStack.Screen name="Home" component={Home} />
    </OwnerStack.Navigator>
  );
}
