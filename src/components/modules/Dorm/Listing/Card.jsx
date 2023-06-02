import React from "react";

import { homeStyles } from "@styles/user";
import { Image, Text, TouchableOpacity, View } from "react-native";

function Card({ onPress, name, location, image, width }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...homeStyles.cardView, width }}>
        <Image
          style={{ ...homeStyles.image, width }}
          source={{ uri: Array.isArray(image) ? image[0] : image }}
        />
        <View>
          <View>
            <Text style={homeStyles.name}>{name}</Text>
          </View>

          <View style={homeStyles.cardDetails}>
            <View style={homeStyles.location}>
              <Text style={homeStyles.locationText}>{location}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Card;
