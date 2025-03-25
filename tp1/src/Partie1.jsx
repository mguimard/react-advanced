import React from 'react'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count - 1)}>décrementer</button>
      <button onClick={() => setCount(count + 1)}>incrementer</button>
      <button onClick={() => setCount(0)} >reset</button>
      <p>{count}</p>
    </>);

}

export default App
