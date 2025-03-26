import React, { useEffect, useState } from 'react';

function useUnTruc() {
  return "Un truc";
}

function useHeyHooo() {
  let [heyHo, setHeyHo] = useState('heeeey')

  useEffect(() => {
    let i = 0
    let interval = setInterval(() => {
      i++
      setHeyHo(i % 2 === 0 ? 'Heeeey' : 'Hooooo')
    }, 1000)

    return () => {
      // clear resources....
      clearInterval(interval)
    }
  }, [])

  return heyHo;
}

function useLocalStorage(key, defaultValue) {
  let [state, setState] = useState(localStorage[key] || defaultValue)

  let update = (newValue) => {
    localStorage[key] = newValue
    setState(newValue)
  }

  return [state, update]
}

function useCounter(defaultValue = 0) {
  let [state, setState] = useState(defaultValue)
  return [
    state,
    () => setState(state - 1),
    () => setState(state + 1),
    () => setState(0)
  ]
}

function App() {

  let unTruc = useUnTruc()
  let text = useHeyHooo()
  let [user, updateUser] = useLocalStorage('user', 'alice');
  let [count, decrement, increment, reset] = useCounter(0);

  return (
    <>
      <p>{unTruc}</p>
      <p>{text}</p>
      <p>{user}</p>
      <input type="text" onChange={(e) => updateUser(e.target.value)} value={user} />
      <button onClick={() => updateUser('bob')}>Update user</button>

      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>
      <button onClick={reset}>reset</button>
      <p>{count}</p>

    </>
  )
}

export default App
