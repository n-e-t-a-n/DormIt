import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OwnerBottomTabNavigator from './bottom.js';

const Tab = createBottomTabNavigator();

const DashboardScreen = () => {
  // Placeholder data for listings
  const listings = [
    {
      id: 1,
      name: 'Listing 1',
      address: '123 Main St',
      availableUnits: 3,
      reservationRequests: 2,
    },
    {
      id: 2,
      name: 'Listing 2',
      address: '456 Elm St',
      availableUnits: 2,
      reservationRequests: 0,
    },
  ];

  return (
    <View style={styles.container}>
      {listings.map((listing) => (
        <View key={listing.id} style={styles.listingContainer}>
          <Text style={styles.listingName}>{listing.name}</Text>
          <Text>{listing.address}</Text>
          <Text>Available Units: {listing.availableUnits}</Text>
          <Text>Reservation Requests: {listing.reservationRequests}</Text>
        </View>
      ))}
      <OwnerBottomTabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listingContainer: {
    marginBottom: 20,
  },
  listingName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DashboardPage;