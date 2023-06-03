import type { CompositeScreenProps } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";

import type { AuthStackParamList, AuthStackScreenProps } from "./Auth";

export type AdminStackParamList = {
  Home: undefined;
};

export type AdminStackScreenProps<T extends keyof AdminStackParamList> = CompositeScreenProps<
  StackScreenProps<AdminStackParamList, T>,
  AuthStackScreenProps<keyof AuthStackParamList>
>;
