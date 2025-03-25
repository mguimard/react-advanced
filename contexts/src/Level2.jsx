import React from "react";
import Level3 from "./Level3";
import "./levels.css";

const Level2 = () => {
  return (
    <div className="level2">
      <h2>Level 2</h2>
      <p>We do not need data here</p>
      <Level3 />
      <Level3 />
      <Level3 />
    </div>
  );
};

export default Level2;
