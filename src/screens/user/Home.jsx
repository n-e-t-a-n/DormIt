import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Dimensions, FlatList, TouchableOpacity, View } from "react-native";

import { homeStyles } from "../../styles/user";
import { DormCard, DormData } from "../../utils/components";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Home() {
  const navigation = useNavigation();

  const handleDormPress = (dormId) => {
    navigation.navigate("DormDetails", { dormId });
  };

  return (
    <View>
      <FlatList
        style={homeStyles.list}
        data={DormData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleDormPress(item.id)}>
            <DormCard
              screenWidth={SCREEN_WIDTH * 0.95}
              dormName={item.dormName}
              location={item.location}
              image={item.image}
              onPressDormCard={() => handleDormPress(item.id)}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
