import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { Button } from "@components/common";
import { color, font } from "@theme";

function DormDetails({ dorm }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.dormName}>{dorm?.dormName}</Text>
      <Text style={styles.dormOwner}>Dorm Owner: {dorm?.dormOwner}</Text>

      <View style={styles.imageContainer}>
        {/* Render dorm images here */}
        {dorm?.image && Array.isArray(dorm.image) ? (
          dorm.image.map((image) => <Image key={image} style={styles.image} source={{ uri: image }} />)
        ) : (
          <Text>No images available</Text>
        )}
      </View>

      <Text style={styles.description}>{dorm?.description}</Text>
      <Text style={styles.price}>Price: {dorm?.price}</Text>

      <View style={styles.contactContainer}>
        <Text style={styles.contactInfo}>Contact: {dorm?.contactInfo}</Text>
      </View>

      <Button label="Request Reservation" primary />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  dormName: {
    fontSize: font.size.TITLE,
    fontWeight: font.weight.BOLD,
    marginBottom: 10,
  },
  dormOwner: {
    fontSize: font.size.TEXT,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  description: {
    fontSize: font.size.SUBTITLE,
    marginBottom: 10,
  },
  price: {
    fontSize: font.size.TEXT,
    marginBottom: 10,
  },
  contactContainer: {
    borderWidth: 1,
    borderColor: color.LIGHT_GRAY,
    padding: 10,
    marginBottom: 20,
  },
  contactInfo: {
    fontSize: font.size.TEXT,
  },
});

export default DormDetails;
