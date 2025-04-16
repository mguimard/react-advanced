import { useCallback, useState } from "react";

export default function useArray<T>(arr: T[]): [T[], (t: T) => void, () => void] {
  const [state, setState] = useState<T[]>(arr);

  const push = useCallback((data: T) => {
    setState((prev: T[]) => [...prev, data]);
  }, []);

  const clear = useCallback(() => {
    setState(() => []);
  }, []);
  return [state, push, clear];
}
