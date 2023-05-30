import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import OwnerBottomTabNavigator from './bottom.js';


const AddListingScreen = () => {
  const [listingData, setListingData] = useState({
    address: '',
    availableSlots: '',
    description: '',
    dormName: '',
    price: '',
    facadeImage: '',
    roomImage: '',
  });

  const handleAddListing = () => {
    // Logic to handle adding a new listing with the listingData
    console.log(listingData);
  };

  return (
    <View>
      <Text>Add Listing</Text>
      <TextInput
        placeholder="Address"
        value={listingData.address}
        onChangeText={(text) => setListingData({ ...listingData, address: text })}
      />
      <TextInput
        placeholder="Available Slots"
        value={listingData.availableSlots}
        onChangeText={(text) => setListingData({ ...listingData, availableSlots: text })}
      />
      <TextInput
        placeholder="Description"
        value={listingData.description}
        onChangeText={(text) => setListingData({ ...listingData, description: text })}
      />
      <TextInput
        placeholder="Dorm Name"
        value={listingData.dormName}
        onChangeText={(text) => setListingData({ ...listingData, dormName: text })}
      />
      <TextInput
        placeholder="Price"
        value={listingData.price}
        onChangeText={(text) => setListingData({ ...listingData, price: text })}
      />
      <TextInput
        placeholder="Facade Image"
        value={listingData.facadeImage}
        onChangeText={(text) => setListingData({ ...listingData, facadeImage: text })}
      />
      <TextInput
        placeholder="Room Image"
        value={listingData.roomImage}
        onChangeText={(text) => setListingData({ ...listingData, roomImage: text })}
      />
      <Button title="Add Listing" onPress={handleAddListing} />
      <OwnerBottomTabNavigator />
    </View>
  );
};

export default AddListingScreen;