import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { db } from "@config/firebase"; // Import your Firebase configuration from firebase.js

function ReservationApprovalPage() {
  const [reservations, setReservations] = useState([]);
  const [refresh, setRefresh] = useState(false); // State variable for page refresh

  useEffect(() => {
    // Fetch reservations from Firebase database
    const fetchReservations = async () => {
      try {
        const ownerEmail = "test@owner.com"; // CHANGEME

        // Get the reservations where the owner_id matches the owner's email
        const reservationsSnapshot = await db
          .collection("reservations")
          .where("owner_id", "==", ownerEmail)
          .where("status", "==", "unreviewed")
          .get();
        // Fetch additional information from related collections
        const fetchedReservations = await Promise.all(
          reservationsSnapshot.docs.map(async (reservationDoc) => {
            const reservationData = reservationDoc.data();
            // Get the listing name from the listings collection using the listing_id
            const listingDoc = await db
              .collection("listings")
              .where("listing_id", "==", reservationData.listing_id)
              .get();

            let listingData = null;
            if (!listingDoc.empty) {
              listingData = listingDoc.docs[0].data();
            }

            // Get the first_name, last_name, and contact_no of the user from the users collection using the user_id
            const userDoc = await db.collection("users").doc(reservationData.user_id).get();

            const userData = userDoc.data();
            return {
              reservation_id: reservationData.reservation_id,
              listingName: listingData ? listingData.dorm_name : "Unknown",
              firstName: userData.first_name,
              lastName: userData.last_name,
              contactNo: userData.contact_no,
              status: reservationData.status,
            };
          })
        );

        setReservations(fetchedReservations);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [refresh]);

  const handleAcceptReservation = async (reservation_id) => {
    try {
      console.log(reservation_id);
      const reservationQuery = db.collection("reservations").where("reservation_id", "==", reservation_id);

      // Fetch the matching document(s) using the query
      const querySnapshot = await reservationQuery.get();

      // Update each matching document
      querySnapshot.forEach(async (doc) => {
        const reservationRef = db.collection("reservations").doc(doc.id);

        // Update the status of the reservation to 'accepted'
        await reservationRef.update({ status: "accepted" });
        console.log(`Reservation with ID ${doc.id} accepted.`);

        // Fetch the listing document based on the listing_id field
        const listingId = doc.data().listing_id;
        const listingQuery = db.collection("listings").where("listing_id", "==", listingId);
        const listingQuerySnapshot = await listingQuery.get();

        // Check if the listing document exists
        if (!listingQuerySnapshot.empty) {
          const listingDoc = listingQuerySnapshot.docs[0];
          const listingRef = db.collection("listings").doc(listingDoc.id);
          const listingData = listingDoc.data();
          const availableSlots = listingData.available_slots;

          // Ensure availableSlots is greater than 0 before decrementing
          if (availableSlots > 0) {
            await listingRef.update({ available_slots: availableSlots - 1 });
            console.log(`Listing with ID ${listingDoc.id} updated. Available slots decreased by 1.`);
          } else {
            console.log(`Listing with ID ${listingDoc.id} has no available slots.`);
          }
        } else {
          console.log(`Listing with ID ${listingId} not found.`);
        }
        setRefresh(!refresh); // Trigger refresh by toggling the refresh state variable
      });
    } catch (error) {
      console.error("Error accepting reservation:", error);
    }
  };

  const handleRejectReservation = async (reservation_id) => {
    try {
      console.log(reservation_id);
      const reservationQuery = db.collection("reservations").where("reservation_id", "==", reservation_id);

      // Fetch the matching document(s) using the query
      const querySnapshot = await reservationQuery.get();

      // Update each matching document
      querySnapshot.forEach((doc) => {
        const reservationRef = db.collection("reservations").doc(doc.id);

        // Update the status of the reservation to 'rejected'
        reservationRef.update({ status: "rejected" });
        console.log(`Reservation with ID ${doc.id} rejected.`);

        setRefresh(!refresh); // Trigger refresh by toggling the refresh state variable
      });
    } catch (error) {
      console.error("Error rejecting reservation:", error);
    }
  };

  return (
    <View style={styles.container}>
      {reservations.map((reservation) => (
        <View key={reservation.reservation_id} style={styles.reservationContainer}>
          <Text style={styles.studentName}>
            {reservation.firstName} {reservation.lastName}
          </Text>
          <Text>Contact Details: {reservation.contactNo}</Text>
          <Text>Listing Name: {reservation.listingName}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Accept" onPress={() => handleAcceptReservation(reservation.reservation_id)} />
            <Button
              title="Reject"
              onPress={() => handleRejectReservation(reservation.reservation_id)}
              color="#FF0000"
            />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  reservationContainer: {
    marginBottom: 20,
  },
  studentName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ReservationApprovalPage;
