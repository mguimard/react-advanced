import { useCallback, useState } from "react";

export default function useCounter(initialValue: number = 0, maxValue: number = Infinity) {
  const [count, setState] = useState(initialValue);

  const add = useCallback(
    (i: number) => {
      setState((prev) => {
        if (prev < maxValue) return prev + i;
        return prev;
      });
    },
    [maxValue]
  );

  const minus = useCallback((i: number) => {
    setState((prev) => prev - i);
  }, []);

  return { count, add, minus };
}
