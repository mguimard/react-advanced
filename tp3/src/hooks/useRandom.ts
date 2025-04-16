import { useCallback, useState } from "react";

export default function useRandom(): [number, () => void] {
  const [state, setState] = useState(Math.random());

  const next = useCallback(() => {
    setState(Math.random());
  }, []);

  return [state, next];
}
