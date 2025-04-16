import { ChangeEvent, useRef } from "react";
import "./App.css";

function App() {
  const value = useRef("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("handle change", e.target.value);
    value.current = e.target.value;
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <p>{value.current}</p>
    </>
  );
}

export default App;
