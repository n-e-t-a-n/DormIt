import { color, font } from "@theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  dormName: {
    fontSize: font.size.TITLE,
    fontWeight: font.weight.BOLD,
    marginBottom: 10,
  },
  dormOwner: {
    fontSize: font.size.TEXT,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  description: {
    fontSize: font.size.SUBTITLE,
    marginBottom: 10,
  },
  price: {
    fontSize: font.size.TEXT,
    marginBottom: 10,
  },
  contactContainer: {
    borderWidth: 1,
    borderColor: color.LIGHT_GRAY,
    padding: 10,
    marginBottom: 20,
  },
  contactInfo: {
    fontSize: font.size.TEXT,
  },
  buttonContainer: {
    backgroundColor: color.PRIMARY,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: font.size.SUBTITLE,
    color: color.WHITE,
  },
});
