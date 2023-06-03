import React, { useState } from "react";

import Checkbox from "expo-checkbox";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { Button } from "@components/common";
import { color, font } from "@theme";

type Amenity = "WiFi" | "Kitchen" | "Parking" | "Gym" | "Smoke" | "Security";

function Search() {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [amenities, setAmenities] = useState<Amenity[]>([]);
  const [location, setLocation] = useState<string>("");

  const handleSearch = () => {
    // search logic ahhh
  };

  const handleAmenityChange = (amenity: Amenity, checked: boolean) => {
    if (checked) {
      setAmenities([...amenities, amenity]);
    } else {
      setAmenities(amenities.filter((item) => item !== amenity));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filters</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Price Range:</Text>
        <View style={styles.priceContainer}>
          <TextInput
            style={styles.input}
            placeholder="Min"
            value={minPrice}
            onChangeText={setMinPrice}
            keyboardType="numeric"
          />
          <Text style={styles.priceSeparator}>-</Text>
          <TextInput
            style={styles.input}
            placeholder="Max"
            value={maxPrice}
            onChangeText={setMaxPrice}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Amenities:</Text>
        <Text style={styles.labelSmall}>Essentials</Text>
        <View style={styles.CheckboxContainer}>
          <Checkbox
            style={styles.Checkbox}
            value={amenities.includes("WiFi")}
            onValueChange={(checked) => handleAmenityChange("WiFi", checked)}
          />
          <Text style={styles.CheckboxLabel}>WiFi</Text>
        </View>
        <View style={styles.CheckboxContainer}>
          <Checkbox
            style={styles.Checkbox}
            value={amenities.includes("Kitchen")}
            onValueChange={(checked) => handleAmenityChange("Kitchen", checked)}
          />
          <Text style={styles.CheckboxLabel}>Kitchen</Text>
        </View>
        <Text style={styles.labelSmall}>Features</Text>
        <View style={styles.CheckboxContainer}>
          <Checkbox
            style={styles.Checkbox}
            value={amenities.includes("Parking")}
            onValueChange={(checked) => handleAmenityChange("Parking", checked)}
          />
          <Text style={styles.CheckboxLabel}>Parking</Text>
        </View>
        <View style={styles.CheckboxContainer}>
          <Checkbox
            style={styles.Checkbox}
            value={amenities.includes("Gym")}
            onValueChange={(checked) => handleAmenityChange("Gym", checked)}
          />
          <Text style={styles.CheckboxLabel}>Gym</Text>
        </View>
        <Text style={styles.labelSmall}>Safety</Text>
        <View style={styles.CheckboxContainer}>
          <Checkbox
            style={styles.Checkbox}
            value={amenities.includes("Smoke")}
            onValueChange={(checked) => handleAmenityChange("Smoke", checked)}
          />
          <Text style={styles.CheckboxLabel}>Smoke Alarm</Text>
        </View>
        <View style={styles.CheckboxContainer}>
          <Checkbox
            style={styles.Checkbox}
            value={amenities.includes("Security")}
            onValueChange={(checked) => handleAmenityChange("Security", checked)}
          />
          <Text style={styles.CheckboxLabel}>Security System</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location:</Text>
        <View style={styles.priceContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter location"
            value={location}
            onChangeText={setLocation}
          />
        </View>
      </View>

      <Button label="Search" onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: font.size.TITLE,
    fontWeight: font.weight.BOLD,
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: font.size.TITLE,
    fontWeight: font.weight.BOLD,
    marginBottom: 8,
  },
  labelSmall: {
    fontSize: font.size.SMALL,
    fontWeight: font.weight.BOLD,
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: color.LIGHT_GRAY,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  priceSeparator: {
    marginHorizontal: 8,
  },
  CheckboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  Checkbox: {
    marginRight: 8,
  },
  CheckboxLabel: {
    fontSize: font.size.TEXT,
  },
});

export default Search;
