import { EffectCallback, useEffect, useRef } from "react";

export default function useEffectAfterMount(fn: EffectCallback, inputs: ReadonlyArray<any>): void {
  const hasMounted = useRef(false);

  useEffect(() => {
    const memoizedFn = () => {
      fn();
    };

    if (hasMounted.current) {
      return memoizedFn();
    }
    hasMounted.current = true;

    return () => {};
  }, [fn, inputs]);
}
