import { color, font } from "@theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  list: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
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
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  logoutButton: {
    marginTop: 3,
    backgroundColor: color.BLACK,
    marginBottom: 3,
  },
  email: {
    fontSize: font.size.TEXT,
    lineHeight: 21,
    fontWeight: font.weight.BOLD,
    letterSpacing: 0.25,
  },
  text: {
    fontSize: font.size.TEXT,
    lineHeight: 21,
    fontWeight: font.weight.BOLD,
    letterSpacing: 0.25,
    color: color.WHITE,
  },
  cardView: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: color.LIGHT_GRAY,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 10,
  },
  cardDetails: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 200,
  },
  name: {
    fontSize: font.size.SUBTITLE,
    fontWeight: font.weight.BOLD,
    color: color.LIGHT_GRAY,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  location: {
    flex: 4,
    flexDirection: "row",
    borderRightColor: color.LIGHT_GRAY,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  locationText: {
    fontSize: font.size.MICRO,
    fontWeight: font.weight.BOLD,
    paddingTop: 5,
    color: color.LIGHT_GRAY,
  },
});
