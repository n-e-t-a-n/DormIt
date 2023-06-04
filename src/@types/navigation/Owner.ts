import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type OwnerStackParamList = {
  TabScreens: undefined;
};

export type OwnerTabParamList = {
  Dashboard: undefined;
  AddListing: undefined;
  Reservation: undefined;
};

export type OwnerTabScreenProps<T extends keyof OwnerTabParamList> = BottomTabScreenProps<
  OwnerTabParamList,
  T
>;
