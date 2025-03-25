import React, { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);

  const decrement = () => {
    setCounter(counter - 1);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <button data-testid="decrement" onClick={decrement}>
        -
      </button>
      <span data-testid="counter">{counter}</span>
      <button data-testid="increment" onClick={increment}>
        +
      </button>
    </>
  );
}

export default Counter;
