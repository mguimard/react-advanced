import React, { useContext } from "react";
import "./levels.css";
import { MyDataContext } from "./MyDataContext";

const Level3 = () => {
  let ctx = useContext(MyDataContext);

  return (
    <div className="level3">
      <h3>Level 3</h3>
      <p>We need data here</p>
      <p>Data: {ctx} </p>
    </div>
  );
};

export default Level3;
