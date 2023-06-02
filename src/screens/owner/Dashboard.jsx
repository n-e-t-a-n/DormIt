import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";

function DashboardScreen() {
  const [listings, setListings] = React.useState([]);

  React.useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsSnapshot = await getDocs(
          query(collection(db, "listings"), where("user_id", "==", "test@owner.com"))
        );

        const listingsData = listingsSnapshot.docs.map((doc) => doc.data());
        console.log(listingsData);

        const listingsWithRequests = await Promise.all(
          listingsData.map(async (listing) => {
            // Check if the listing has a `listing_id` field before querying reservations
            if (listing.listing_id) {
              const reservationsSnapshot = await getDocs(
                query(collection(db, "reservations"), where("listing_id", "==", listing.listing_id))
              );

              const reservationRequests = reservationsSnapshot.size;

              return { ...listing, reservationRequests };
            } else {
              // Handle case when the listing does not have a `listing_id` field
              console.error("Listing does not have a `listing_id` field:", listing);
              return listing;
            }
          })
        );

        setListings(listingsWithRequests);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <View style={styles.container}>
      {listings.map((listing) => (
        <View key={listing.listing_id} style={styles.listingContainer}>
          <Text style={styles.listingName}>{listing.name}</Text>
          <Text>{listing.address}</Text>
          <Text>Available Units: {listing.available_slots}</Text>
          <Text>Reservation Requests: {listing.reservationRequests}</Text>
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
  listingContainer: {
    marginBottom: 20,
  },
  listingName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DashboardScreen;
