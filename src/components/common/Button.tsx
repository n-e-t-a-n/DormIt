import React from "react";

import type { StyleProp, ViewStyle } from "react-native";
import { Pressable, StyleSheet, Text } from "react-native";

import { color, font } from "@theme";

interface ButtonProps {
  label: string;
  primary?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

function Button({ label = "", primary = false, style, onPress }: ButtonProps) {
  return (
    <Pressable
      style={StyleSheet.compose(
        [styles.button, { backgroundColor: primary ? color.PRIMARY : color.BLACK }],
        style
      )}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.BLACK,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: font.size.TEXT,
    fontWeight: font.weight.BOLD,
    letterSpacing: 0.25,
    color: color.WHITE,
  },
});

export default Button;
