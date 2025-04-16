import { useCallback, useEffect, useState } from "react";

export default function useMousePosition(): { x: number; y: number } {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const mouseMoveHandler = useCallback((e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [mouseMoveHandler]);

  return pos;
}
