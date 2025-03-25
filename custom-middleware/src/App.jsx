import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reducers";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <>
      <div>Hello custom middleware</div>

      <button
        onClick={() => {
          dispatch(decrement());
        }}>
        Decrease
      </button>

      <span>{count}</span>

      <button
        onClick={() => {
          dispatch(increment());
        }}>
        Increase
      </button>
    </>
  );
}

export default App;
