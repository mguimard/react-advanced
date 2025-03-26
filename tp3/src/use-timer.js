import { useEffect, useRef, useState } from "react"

function useTimer(timeout = 200, autostart = true) {
    let [count, setCount] = useState(0)
    let [started, setStarted] = useState(autostart)
    let intervalRef = useRef(null)
  
    useEffect(() => {
      if (started) {
        intervalRef.current = setInterval(() => setCount((c) => c + 1), timeout)
      } else if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
  
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }, [started, timeout])
  
    return [count, () => setStarted(false), () => setStarted(true)];
  }

  export default useTimer