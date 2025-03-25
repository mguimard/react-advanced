import React, { useState } from "react";
import Level2 from "./Level2";
import "./levels.css";

import { useContext } from "react";
import { MyDataContext } from "./MyDataContext";

const Level1 = () => {
  let [ctx, setCtx] = useContext(MyDataContext);

  const [input, setInput] = useState(ctx);

  return (
    <div className="level1">
      <h1>Level 1</h1>
      <p>We need data here</p>
      <p>Data: {ctx} </p>
      <input value={input} onInput={(e) => setInput(e.target.value)} />
      <button onClick={() => setCtx(input)}>Update</button>
      <Level2 />
    </div>
  );
};

export default Level1;
