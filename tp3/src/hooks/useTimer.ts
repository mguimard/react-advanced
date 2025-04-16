import { useCallback, useEffect, useRef, useState } from "react";

export default function useTimer(timeout: number = 1000): [number, () => void, () => void] {
  const [state, setState] = useState(0);

  const interval = useRef(0);

  const start = useCallback(() => {
    interval.current = setInterval(() => setState((prev) => prev + 1), timeout);
  }, [timeout]);

  const stop = useCallback(() => {
    clearInterval(interval.current);
  }, []);

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return [state, start, stop];
}
