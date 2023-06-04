import type { StackScreenProps } from "@react-navigation/stack";

export type AdminStackParamList = {
  Home: undefined;
};

export type AdminStackScreenProps<T extends keyof AdminStackParamList> = StackScreenProps<
  AdminStackParamList,
  T
>;
