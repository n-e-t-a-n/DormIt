import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  labelSmall: {
    fontSize: 14,
    fontWeight: "bold",
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
    borderColor: "gray",
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
    fontSize: 16,
  },
});
