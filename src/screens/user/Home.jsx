import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Pressable,
  FlatList,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createToastShort } from "../../utils/helpers";
import { auth } from "../../../config/firebase";
import { homeStyles } from "../../styles/user";
import { DormData, DormCard } from "../../utils/components";

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
        keyExtractor={(item, index) => index.toString()}
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

  /*
    <View style={homeStyles.container}>
      <Text style={homeStyles.email}>{auth.currentUser?.email}</Text>
      <StatusBar style="auto" />
    </View>
    */
  );
}
