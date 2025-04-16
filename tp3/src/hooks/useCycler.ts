import { useCallback, useRef, useState } from "react";

export default function useCycler<T>(arr: T[]): [T, () => void, () => void] {
  const index = useRef(0);
  const [current, setState] = useState<T>(arr[index.current]);

  const prev = useCallback(() => {
    index.current = (arr.length + index.current - 1) % arr.length;
    setState(arr[index.current]);
  }, [arr]);

  const next = useCallback(() => {
    index.current = (index.current + 1) % arr.length;
    setState(arr[index.current]);
  }, [arr]);

  return [current, prev, next];
}
