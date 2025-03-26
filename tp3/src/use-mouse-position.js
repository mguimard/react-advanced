import { useCallback, useEffect, useState } from "react"

function useMousePosition() {
    let [mouse, setMouse] = useState({ x: 0, y: 0 })
  
    let handleMouseMove = useCallback((e) => {
      setMouse({ x: e.clientX, y: e.clientY })
    },[])

    useEffect(() => {
      window.addEventListener('mousemove',handleMouseMove)
      return () => {        
        window.removeEventListener('mousemove',handleMouseMove)
      }
    }, [handleMouseMove])
  
    return mouse;
  }
  
  export default useMousePosition