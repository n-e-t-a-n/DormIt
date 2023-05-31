import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { searchStyles } from '../../styles/user';

export default function Search() {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [amenities, setAmenities] = useState([]);
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // search logic ahhh
  };

  const handleAmenityChange = (amenity, checked) => {
    if (checked) {
      setAmenities([...amenities, amenity]);
    } else {
      setAmenities(amenities.filter(item => item !== amenity));
    }
  };

  return (
    <View style={searchStyles.container}>
      <Text style={searchStyles.title}>Filters</Text>

      <View style={searchStyles.inputContainer}>
        <Text style={searchStyles.label}>Price Range:</Text>
        <View style={searchStyles.priceContainer}>
          <TextInput
            style={searchStyles.input}
            placeholder="Min"
            value={minPrice}
            onChangeText={setMinPrice}
            keyboardType="numeric"
          />
          <Text style={searchStyles.priceSeparator}>-</Text>
          <TextInput
            style={searchStyles.input}
            placeholder="Max"
            value={maxPrice}
            onChangeText={setMaxPrice}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={searchStyles.inputContainer}>
        <Text style={searchStyles.label}>Amenities:</Text>
        <Text style={searchStyles.labelSmall}>Essentials</Text>
        <View style={searchStyles.CheckboxContainer}>
          <Checkbox
            style={searchStyles.Checkbox}
            value={amenities.includes('WiFi')}
            onValueChange={checked => handleAmenityChange('WiFi', checked)}
          />
          <Text style={searchStyles.CheckboxLabel}>WiFi</Text>
        </View>
        <View style={searchStyles.CheckboxContainer}>
          <Checkbox
            style={searchStyles.Checkbox}
            value={amenities.includes('Kitchen')}
            onValueChange={checked => handleAmenityChange('Kitchen', checked)}
          />
          <Text style={searchStyles.CheckboxLabel}>Kitchen</Text>
        </View>
        <Text style={searchStyles.labelSmall}>Features</Text>
        <View style={searchStyles.CheckboxContainer}>
          <Checkbox
            style={searchStyles.Checkbox}
            value={amenities.includes('Parking')}
            onValueChange={checked => handleAmenityChange('Parking', checked)}
          />
          <Text style={searchStyles.CheckboxLabel}>Parking</Text>
        </View>
        <View style={searchStyles.CheckboxContainer}>
          <Checkbox
            style={searchStyles.Checkbox}
            value={amenities.includes('Gym')}
            onValueChange={checked => handleAmenityChange('Gym', checked)}
          />
          <Text style={searchStyles.CheckboxLabel}>Gym</Text>
        </View>
        <Text style={searchStyles.labelSmall}>Safety</Text>
        <View style={searchStyles.CheckboxContainer}>
          <Checkbox
            style={searchStyles.Checkbox}
            value={amenities.includes('Smoke')}
            onValueChange={checked => handleAmenityChange('Smoke', checked)}
          />
          <Text style={searchStyles.CheckboxLabel}>Smoke Alarm</Text>
        </View>
        <View style={searchStyles.CheckboxContainer}>
          <Checkbox
            style={searchStyles.Checkbox}
            value={amenities.includes('Security')}
            onValueChange={checked => handleAmenityChange('Security', checked)}
          />
          <Text style={searchStyles.CheckboxLabel}>Security System</Text>
        </View>
      </View>

      <View style={searchStyles.inputContainer}>
        <Text style={searchStyles.label}>Location:</Text>
        <View style={searchStyles.priceContainer}>
        <TextInput
          style={searchStyles.input}
          placeholder="Enter location"
          value={location}
          onChangeText={setLocation}
        />
        </View>
      </View>

      <Button title="Search" onPress={handleSearch} />
    </View>
  );
}