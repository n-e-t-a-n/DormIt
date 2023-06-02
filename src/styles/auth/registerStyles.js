import { color, font } from "@theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  input: {
    height: 50,
    width: "100%",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: color.LIGHT_GRAY,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: color.BLACK,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  registerButton: {
    marginTop: 5,
    marginBottom: 3,
  },
  text: {
    fontSize: font.size.TEXT,
    lineHeight: 21,
    fontWeight: font.weight.BOLD,
    letterSpacing: 0.25,
    color: color.WHITE,
  },
});
