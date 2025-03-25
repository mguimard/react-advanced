import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  const [input, setInput] = useState("");

  return (
    <>
      <div>Hello redux middleware</div>
      <p>Counter: {count.value}</p>
      <button onClick={() => dispatch({ type: "counter/inc" })}>Increment</button>
      <button onClick={() => dispatch({ type: "counter/dec" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "counter/reset" })}>Reset</button>
      <p>Add a pizza</p>
      <input value={input} onInput={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch({ type: "pizzas/add", payload: input })}>Add</button>
    </>
  );
}

export default App;
