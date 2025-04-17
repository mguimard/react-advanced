import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(0);

  const run = async () => {
    const worker = new ComlinkWorker(new URL("./worker.js", import.meta.url), {});
    const result = await worker.add(2, 3);
    setData(result);
  };

  return (
    <>
      <button onClick={run}>Click to run some worker code</button>
      <p>{data}</p>
    </>
  );
}

export default App;
