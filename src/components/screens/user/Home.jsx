import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Dimensions, FlatList, View } from "react-native";

import { Card as DormCard } from "@components/modules/Dorm/Listing";
import { homeStyles } from "@styles/user";

const SCREEN_WIDTH = Dimensions.get("window").width;

// MOCK DATA FOR TESTING
const dorms = [
  {
    dormName: "Dorm1",
    dormOwner: "DO1",
    location: "Address1",
    image: [
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png",
    ],
    description: "This is Dorm 1.",
    price: "1000",
    contactInfo: "01234567890",
    id: 0,
  },
  {
    dormName: "Dorm2",
    location: "Address2",
    image: "https://placehold.co/600x400.png",
    id: 1,
  },
  {
    dormName: "Dorm2",
    location: "Address3",
    image: "https://placehold.co/600x400.png",
    id: 2,
  },
];

function Home() {
  const navigation = useNavigation();

  const handleDormPress = (dormId) => {
    navigation.navigate("DormDetails", { dorm: dorms.find((d) => d.id === dormId) });
  };

  return (
    <View>
      <FlatList
        style={homeStyles.list}
        data={dorms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DormCard
            width={SCREEN_WIDTH * 0.95}
            name={item.dormName}
            location={item.location}
            image={item.image}
            onPress={() => handleDormPress(item.id)}
          />
        )}
      />
    </View>
  );
}

export default Home;
