import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Hello react</div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click {count}
      </button>
    </>
  );
}

export default App;
