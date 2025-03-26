import React, { useReducer } from 'react';
import capitalizeReducer from './capitalize-reducer';
import useArray from './use-array';
import useMousePosition from './use-mouse-position';
import useOnlineState from './use-online-state';
import useRandom from './use-random';
import useTimer from './use-timer';
import useCycler from './user-cycler';

function App() {

  let [value, prev, next] = useCycler(['alice', 'bob', 'joe'])
  let [random, nextRandom] = useRandom()
  let isOnline = useOnlineState()
  let { x, y } = useMousePosition()
  let [users, addUser, clearUsers] = useArray(['alice', 'bob'])
  let [timer, stopTimer, startTimer] = useTimer(10)
  const [text, dispatch] = useReducer(capitalizeReducer, '')

  return (
    <>
      <button onClick={startTimer}>Start</button><button onClick={stopTimer}>Stop</button>
      <p>{timer}</p>

      <hr />
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


