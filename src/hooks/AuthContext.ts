import { useEffect, useRef } from "react";

import { createContext } from "react";
import { User } from "firebase/auth";

export const UserContext = createContext<User | null | undefined>(null);

export function useIfNotMounted(fn: any, inputs:any) {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) { 
    return fn();
    }
    hasMounted.current = true;
  }, inputs);
}