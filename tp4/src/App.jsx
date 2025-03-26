import React from "react"
import LEDControl from "./views/LEDControl"
import UserLEDState from "./views/UserLEDState"
import UserStatus from "./views/UserStatus"

function App() {

  return (
    <>
      <UserStatus />
      <hr />
      <UserLEDState />
      <hr />
      <LEDControl />
    </>
  )
}

export default App
