import React, { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);
  return (
    <>
      <button data-cy="dec" onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <span data-cy="counter">{counter}</span>
      <button data-cy="inc" onClick={() => setCounter(counter + 1)}>
        +
      </button>
    </>
  );
}
