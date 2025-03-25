import React from "react";
import { useToggle } from "./UseToggle";

const MenuBar = () => {
  const [value, setValue] = useToggle();

  return (
    <>
      <div>MenuBar</div>
      <p>Value is : {value ? "true" : "false"}</p>
      <button onClick={() => setValue(!value)}>Toggle</button>
    </>
  );
};

export default MenuBar;
