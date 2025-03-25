import React from "react";
import { Counter } from "./Counter";
import { action, store } from "./store";

function App() {
  return (
    <>
      <div>Hello redux saga</div>
      <Counter
        value={store.getState()}
        onIncrement={() => action("increment")}
        onDecrement={() => action("decrement")}
        onIncrementAsync={() => action("increment_async")}
      />
    </>
  );
}

export default App;
