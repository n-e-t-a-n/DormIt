import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import OwnerBottomTabNavigator from './bottom.js';

const ReservationApprovalPage = () => {
  // Placeholder data for reservation requests
  const reservationRequests = [
    {
      id: 1,
      studentName: 'John Doe',
      contactDetails: 'john@example.com',
      listingName: 'Listing 1',
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      contactDetails: 'jane@example.com',
      listingName: 'Listing 2',
    },
    // Add more reservation request data as needed
  ];

  const handleAcceptReservation = (reservationId) => {
    // Logic to handle accepting the reservation request
    console.log(`Accept reservation with ID: ${reservationId}`);
  };

  const handleRejectReservation = (reservationId) => {
    // Logic to handle rejecting the reservation request
    console.log(`Reject reservation with ID: ${reservationId}`);
  };

  return (
    <View style={styles.container}>
      {reservationRequests.map((reservation) => (
        <View key={reservation.id} style={styles.reservationContainer}>
          <Text style={styles.studentName}>{reservation.studentName}</Text>
          <Text>Contact Details: {reservation.contactDetails}</Text>
          <Text>Listing: {reservation.listingName}</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Accept"
              onPress={() => handleAcceptReservation(reservation.id)}
            />
            <Button
              title="Reject"
              onPress={() => handleRejectReservation(reservation.id)}
              color="#FF0000"
            />
          </View>
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
  reservationContainer: {
    marginBottom: 20,
  },
  studentName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ReservationApprovalPage;