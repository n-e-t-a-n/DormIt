import type { Dorm } from "@@types/models";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import type { AuthStackParamList, AuthStackScreenProps } from "./Auth";

export type UserStackParamList = {
  TabScreens: undefined;
  DormDetails: { dorm: Dorm };
};

export type UserTabParamList = {
  Home: undefined;
  Search: undefined;
  UserProfile: undefined;
};

export type UserStackScreenProps<T extends keyof UserStackParamList> = CompositeScreenProps<
  StackScreenProps<UserStackParamList, T>,
  AuthStackScreenProps<keyof AuthStackParamList>
>;

export type UserTabScreenProps<T extends keyof UserTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<UserTabParamList, T>,
  UserStackScreenProps<keyof UserStackParamList>
>;
