import React, { useMemo, useState } from "react"

function App() {
  console.log('App')

  let [s, setS] = useState(0)

  const someData = useMemo(() => {
    console.log('someData')
    return 'hello world'
  }, []);

  return (
    <>
      {someData}
      <br />
      <button onClick={() => setS(s - 1)}>-</button>
      <span>{s}</span>
      <button onClick={() => setS(s + 1)}>+</button>
    </>
  )
}

export default App
