import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import Chronometre from "./Chronometre";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Chronometre />
      <hr />
      {show ? "shown" : "not shown"}
      <button onClick={() => setShow(!show)}>Toggle todos</button>
      {show && <TodoList />}
    </>
  );
}

export default App;
