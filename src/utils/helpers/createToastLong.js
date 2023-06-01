import { ToastAndroid } from "react-native";

const createToastLong = (message) => {
  ToastAndroid.show(message, ToastAndroid.LONG);
};

export default createToastLong;
