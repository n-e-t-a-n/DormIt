import React from "react";

import { color, font } from "@theme";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function Card({ onPress, name, location, image, width }) {
  return (
    <Pressable onPress={onPress}>
      <View style={{ ...styles.cardView, width }}>
        <Image
          style={{ ...styles.image, width }}
          source={{ uri: Array.isArray(image) ? image[0] : image }}
        />
        <View>
          <View>
            <Text style={styles.name}>{name}</Text>
          </View>

          <View style={styles.cardDetails}>
            <View style={styles.location}>
              <Text style={styles.locationText}>{location}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardView: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: color.LIGHT_GRAY,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 10,
  },
  cardDetails: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 200,
  },
  name: {
    fontSize: font.size.SUBTITLE,
    fontWeight: font.weight.BOLD,
    color: color.LIGHT_GRAY,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  location: {
    flex: 4,
    flexDirection: "row",
    borderRightColor: color.LIGHT_GRAY,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  locationText: {
    fontSize: font.size.MICRO,
    fontWeight: font.weight.BOLD,
    paddingTop: 5,
    color: color.LIGHT_GRAY,
  },
});

export default Card;
