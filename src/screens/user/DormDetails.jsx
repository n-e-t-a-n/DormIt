import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { dormDetailsStyles } from "../../styles/user";
import { DormData } from "../../utils/components/DormData";

export default function DormDetails({ route }) {
  const { dormId } = route.params;
  const dorm = DormData.find((item) => item.id === dormId);

  return (
    <ScrollView style={dormDetailsStyles.container}>
      <Text style={dormDetailsStyles.dormName}>{dorm?.dormName}</Text>
      <Text style={dormDetailsStyles.dormOwner}>Dorm Owner: {dorm?.dormOwner}</Text>

      <View style={dormDetailsStyles.imageContainer}>
        {/* Render dorm images here */}
        {dorm?.image && Array.isArray(dorm.image) ? (
          dorm.image.map((image, index) => (
            <Image key={index} style={dormDetailsStyles.image} source={{ uri: image }} />
          ))
        ) : (
          <Text>No images available</Text>
        )}
      </View>

      <Text style={dormDetailsStyles.description}>{dorm?.description}</Text>
      <Text style={dormDetailsStyles.price}>Price: {dorm?.price}</Text>

      <View style={dormDetailsStyles.contactContainer}>
        <Text style={dormDetailsStyles.contactInfo}>Contact: {dorm?.contactInfo}</Text>
      </View>

      <TouchableOpacity style={dormDetailsStyles.buttonContainer}>
        <Text style={dormDetailsStyles.buttonText}>Request Reservation</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
