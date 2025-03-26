import { useState } from "react"

function useArray(array = []) {
    let [state, setState] = useState(array)
  
    return [state, (el) => setState([...state, el]), () => setState([])]
  }
  
  export default useArray