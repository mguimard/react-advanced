import React, { useState } from "react";
import Level1 from "./Level1";
import { MyDataContext } from "./MyDataContext";

function App() {
  const [state, setState] = useState("Hello world");

  return (
    <>
      <MyDataContext.Provider value={[state, setState]}>
        <div>Hello Contexts</div>
        <Level1 />
      </MyDataContext.Provider>
    </>
  );
}

export default App;
