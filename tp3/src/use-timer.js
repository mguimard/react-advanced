import { useEffect, useRef, useState } from "react"

function useTimer(timeout = 200, autostart = true) {
    let [count, setcount] = useState(0)
    let [started, setStarted] = useState(autostart)
    let intervalRef = useRef(null)
  
    useEffect(() => {
      if (started) {
        intervalRef.current = setInterval(() => setcount((c) => c + 1), timeout)
      } else if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
  
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }, [started, timeout])
  
    return [count, () => setStarted(false), () => setStarted(true)];
  }

  export default useTimer