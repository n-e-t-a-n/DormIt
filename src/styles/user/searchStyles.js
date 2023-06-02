import { color, font } from "@theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: font.size.TITLE,
    fontWeight: font.weight.BOLD,
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: font.size.TITLE,
    fontWeight: font.weight.BOLD,
    marginBottom: 8,
  },
  labelSmall: {
    fontSize: font.size.SMALL,
    fontWeight: font.weight.BOLD,
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: color.LIGHT_GRAY,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  priceSeparator: {
    marginHorizontal: 8,
  },
  CheckboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  Checkbox: {
    marginRight: 8,
  },
  CheckboxLabel: {
    fontSize: font.size.TEXT,
  },
});
