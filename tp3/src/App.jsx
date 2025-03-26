import React, { useCallback, useEffect, useReducer, useState } from 'react';
import capitalizeReducer from './capitalize-reducer';
import useArray from './use-array';
import useMousePosition from './use-mouse-position';
import useOnlineState from './use-online-state';
import useRandom from './use-random';
import useCycler from './user-cycler';

function useTimer(timeout = 1000, autostart = false) {

  let [started, setStarted] = useState(autostart);
  let [count, setcount] = useState(0)
  let [intervalRef, setIntervalRef] = useState(null)

  let clear = useCallback(() => clearInterval(intervalRef), [intervalRef])

  useEffect(() => {
    console.log('use effect', started)
    if (started) {

      let i = setInterval(() => {
        setcount((c) => { return c + 1 })
      }, timeout)

      setIntervalRef(() => { return i })
    }
    else {
      clear()
    }

    return () => {
      console.log('clean up')
      clear()
    }

  }, [started, timeout, clear])

  return [count, () => setStarted(false), () => setStarted(true)];
}

function App() {

  let [value, prev, next] = useCycler(['alice', 'bob', 'joe'])
  let [random, nextRandom] = useRandom()
  let isOnline = useOnlineState()
  let { x, y } = useMousePosition()
  let [users, addUser, clearUsers] = useArray(['alice', 'bob'])
  const [text, dispatch] = useReducer(capitalizeReducer, '')

  // let [timer, stopTimer, startTimer] = useTimer()
  /* <button onClick={startTimer}>Start</button>
       <p>{timer}</p>
       <button onClick={stopTimer}>Stop</button> */

  return (
    <>
      <input type="text" value={text} onChange={(e) => dispatch(e.target.value)} />
      <p>{text}</p>
      <hr />
      {users.map((u, index) => <p key={index}>{u}</p>)}
      <button onClick={() => addUser(Date.now())}>Add user</button>
      <button onClick={clearUsers}>Clear</button>
      <hr />
      <p>x: {x}, y : {y}</p>
      <hr />
      <p>Vous êtes : {isOnline ? 'en ligne' : 'hors ligne'}</p>
      <p>Random value: {random}</p>
      <button onClick={nextRandom}>Next random</button>
      <hr />
      <button onClick={prev}>Previous</button>
      <p>{value}</p>
      <button onClick={next}>Next</button>
    </>
  )
}

export default App


