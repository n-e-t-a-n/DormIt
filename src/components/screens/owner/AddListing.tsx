import React, { useState } from "react";

import { addDoc, collection, updateDoc } from "firebase/firestore";
import { Button, Text, TextInput, View } from "react-native";

import type { DormListing } from "@@types/models";
import { db } from "@config/firebase"; // Import the `db` object from firebase.js

function AddListingScreen() {
  const [listingData, setListingData] = useState<DormListing>({
    address: "",
    available_slots: "",
    description: "",
    dorm_name: "",
    price: "",
    user_id: "test@owner.com", // CHANGEME
  });

  const handleAddListing = async () => {
    try {
      const formattedListingData = {
        ...listingData,
        listing_id: "", // Initialize listing_id as an empty string
        available_slots: Number(listingData.available_slots),
        price: Number(listingData.price),
      };

      const docRef = await addDoc(collection(db, "listings"), formattedListingData);
      const listingId = docRef.id; // Get the auto-generated ID from Firestore
      formattedListingData.listing_id = listingId; // Assign the listing_id field

      // Update the document with the generated listing_id
      await updateDoc(docRef, { listing_id: listingId });

      setListingData({
        address: "",
        available_slots: "",
        description: "",
        dorm_name: "",
        price: "",
        user_id: "test@owner.com",
      });
    } catch (error) {
      console.error("Error adding listing:", error);
    }
  };

  const handleAvailableSlotsChange = (text: string) => {
    const intValue = parseInt(text, 10);
    if (!Number.isNaN(intValue) && intValue >= 0) {
      setListingData({ ...listingData, available_slots: text });
    }
  };

  const handlePriceChange = (text: string) => {
    const intValue = parseInt(text, 10);
    if (!Number.isNaN(intValue) && intValue >= 0) {
      setListingData({ ...listingData, price: text });
    }
  };

  return (
    <View>
      <View>
        <Text>Address:</Text>
        <TextInput
          value={listingData.address}
          onChangeText={(text) => setListingData({ ...listingData, address: text })}
        />
      </View>
      <View>
        <Text>Description:</Text>
        <TextInput
          value={listingData.description}
          onChangeText={(text) => setListingData({ ...listingData, description: text })}
        />
      </View>
      <View>
        <Text>Dorm Name:</Text>
        <TextInput
          value={listingData.dorm_name}
          onChangeText={(text) => setListingData({ ...listingData, dorm_name: text })}
        />
      </View>
      <View>
        <Text>Available Slots:</Text>
        <TextInput
          value={listingData.available_slots}
          onChangeText={handleAvailableSlotsChange}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text>Monthly Rate:</Text>
        <TextInput value={listingData.price} onChangeText={handlePriceChange} keyboardType="numeric" />
      </View>
      <Button title="Add Listing" onPress={handleAddListing} />
    </View>
  );
}

export default AddListingScreen;
