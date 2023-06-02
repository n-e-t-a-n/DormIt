import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import type { AuthStackParamList, AuthStackScreenProps } from "./Auth";

export type OwnerStackParamList = {
  TabScreens: undefined;
};

export type OwnerTabParamList = {
  Dashboard: undefined;
  AddListing: undefined;
  Reservation: undefined;
};

export type OwnerStackScreenProps<T extends keyof OwnerStackParamList> = CompositeScreenProps<
  StackScreenProps<OwnerStackParamList, T>,
  AuthStackScreenProps<keyof AuthStackParamList>
>;

export type OwnerTabScreenProps<T extends keyof OwnerTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<OwnerTabParamList, T>,
  OwnerStackScreenProps<keyof OwnerStackParamList>
>;
