import type { Dorm } from "@@types/models";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type UserStackParamList = {
  TabScreens: undefined;
  DormDetails: { dorm: Dorm };
};

export type UserTabParamList = {
  Home: undefined;
  Search: undefined;
  UserProfile: undefined;
};

export type UserTabScreenProps<T extends keyof UserTabParamList> = BottomTabScreenProps<
  UserTabParamList,
  T
>;
