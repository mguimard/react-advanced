import { useEffect, useState } from "react"

function useMousePosition() {
    let [mouse, setMouse] = useState({ x: 0, y: 0 })
  
    useEffect(() => {
      window.addEventListener('mousemove', (e) => {
        setMouse({ x: e.clientX, y: e.clientY })
      })
      return () => {
        // remove event listener
      }
    }, [])
  
    return mouse;
  }
  
  export default useMousePosition