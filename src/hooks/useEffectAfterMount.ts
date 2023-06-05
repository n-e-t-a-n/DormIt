import { EffectCallback, useEffect, useRef } from "react";

export default function useEffectAfterMount(fn: EffectCallback, inputs: ReadonlyArray<any>): void {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) {
      return fn();
    }
    hasMounted.current = true;

    return () => {};
  }, inputs);
}
