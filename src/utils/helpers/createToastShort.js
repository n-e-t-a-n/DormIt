import { ToastAndroid } from "react-native";

const createToastShort = (message) => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

export default createToastShort;
