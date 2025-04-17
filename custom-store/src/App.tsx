import { useState } from "react";
import "./App.css";
import Component1 from "./Component1";
import Component2 from "./Component2";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Component1 />
      <hr />
      {show && <Component2 />}
      <hr />
      <button onClick={() => setShow(!show)}>Toggle component 2</button>
    </>
  );
}

export default App;
