import React, { memo, useState } from "react"

const User = memo(({ name }) => {
  console.log('User', name)
  return <p>Bonjour {name}</p>
})

function App() {

  let [count, setCount] = useState(0)
  let [users, setUsers] = useState(['alice', 'bob'])

  return (
    <>
      {users.map(u => {
        return <User name={u} key={u} />
      })}

      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>

      <button onClick={() => setUsers([...users, Date.now()])}>Add user</button>
    </>
  )
}

export default App
