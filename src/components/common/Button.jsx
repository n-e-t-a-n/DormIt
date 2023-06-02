import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { color, font } from "@theme";

function Button({ label = "", primary = false, style, onPress }) {
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
