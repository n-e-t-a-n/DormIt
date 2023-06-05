import { useEffect, useRef } from "react";
import { User } from "firebase/auth";
import { ToastAndroid } from "react-native";

export default function createToastOnAuthChange(user: User | null | undefined): void {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const message = user ? "Successfully logged in." : "You've logged out";
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }, [user]);
}

// Creates a toast message whenever user param changes, but not on mount