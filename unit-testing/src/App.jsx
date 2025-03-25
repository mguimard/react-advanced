import React from "react";
import Counter from "./Counter";
import Users from "./Users";

function App() {
  return (
    <>
      <div>Hello react</div>
      <Users users={["alice", "bob", "jean-kévin"]} />
      <Counter />
    </>
  );
}

export default App;
