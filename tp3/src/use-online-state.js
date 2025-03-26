import { useEffect, useState } from 'react';

function useOnlineState() {
  let [state, setState] = useState(navigator.onLine)

  useEffect(() => {

    let resetState = () => setState(navigator.onLine)

    window.addEventListener("offline", resetState);
    window.addEventListener("online", resetState);

    return () => {
      window.removeEventListener("offline", resetState);
      window.addEventListener("online", resetState);
    }

  }, [])

  return state;
}

export default useOnlineState