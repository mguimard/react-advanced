import React, { useState } from 'react'
import './App.css'
import Toogle from './Toggle'

const MyComponent = () => <p>hello component</p>

function App() {
  console.log('App')
  let [bool, setBool] = useState(false)

  let handleChange = (e) => setBool(e.target.checked)

  let i = 0;

  return (
    <>
      <MyComponent />
      <Toogle onChange={handleChange} />
      <br />
      {bool ? <p>Affiché</p> : null}
    </>
  )
}

export default App
