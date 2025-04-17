import { useMemo, useState } from "react";
import "./App.css";

function heavyCalculation(value) {
  let sum = 0;
  for (let i = 0; i < value; i++) {
    sum += i;
  }
  return sum;
}

function App() {
  const [show, setShow] = useState(false);
  //const result = useMemo(() => heavyCalculation(data), [data]);
  const [data, setData] = useState(1_000_000_000);
  const result = useMemo(() => heavyCalculation(data), [data]);

  return (
    <>
      {show ? "ON" : "OFF"}
      {result}
      <hr></hr>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <button onClick={() => setData(data + 1)}>Add 1 to data</button>
    </>
  );
}

export default App;
