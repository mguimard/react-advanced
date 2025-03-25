import React, { useState } from "react";

const State = () => {
  let [state, setState] = useState(0);

  return (
    <>
      <div>Hello useState</div>
      <button onClick={(e) => setState(state + 1)}>Count: {state}</button>
    </>
  );
};

export default State;
