import type { NavigatorScreenParams } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";

import type { AdminStackParamList } from "./Admin";
import type { OwnerStackParamList } from "./Owner";
import type { UserStackParamList } from "./User";

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  AdminStack: NavigatorScreenParams<AdminStackParamList>;
  UserStack: NavigatorScreenParams<UserStackParamList>;
  OwnerStack: NavigatorScreenParams<OwnerStackParamList>;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> = StackScreenProps<
  AuthStackParamList,
  T
>;
