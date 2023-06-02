import React from "react";

import { Image, Text, TouchableOpacity, View } from "react-native";
import { homeStyles } from "../../styles/user";

export default function DormCard({ onPressDormCard, dormName, location, image, screenWidth }) {
  return (
    <TouchableOpacity onPress={onPressDormCard}>
      <View style={{ ...homeStyles.cardView, width: screenWidth }}>
        <Image
          style={{ ...homeStyles.image, width: screenWidth }}
          source={{ uri: Array.isArray(image) ? image[0] : image }}
        />
        <View>
          <View>
            <Text style={homeStyles.dormName}>{dormName}</Text>
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
