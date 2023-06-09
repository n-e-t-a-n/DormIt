import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { StackScreenProps } from "@react-navigation/stack";
import type { CompositeScreenProps } from "@react-navigation/native";

export type OwnerStackParamList = {
  TabScreens: undefined;
};

export type OwnerTabParamList = {
  Dashboard: undefined;
  AddListing: undefined;
  Reservation: undefined;
};

export type OwnerStackScreenProps<T extends keyof OwnerStackParamList> = StackScreenProps<
  OwnerStackParamList,
  T
>;

export type OwnerTabScreenProps<T extends keyof OwnerTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<OwnerTabParamList, T>,
  OwnerStackScreenProps<keyof OwnerStackParamList>
>;
