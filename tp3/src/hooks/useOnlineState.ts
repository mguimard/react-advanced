import { useCallback, useEffect, useState } from "react";

export default function useOnlineState(): boolean {
  const [state, setState] = useState(navigator.onLine);

  const conListener = useCallback(() => {
    setState(navigator.onLine);
  }, []);

  useEffect(() => {
    window.addEventListener("offline", conListener);
    window.addEventListener("online", conListener);

    return () => {
      window.removeEventListener("offline", conListener);
      window.removeEventListener("online", conListener);
    };
  }, [conListener]);

  return state;
}
