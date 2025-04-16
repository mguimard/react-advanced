import { useReducer } from "react";
import "./App.css";
import useArray from "./hooks/useArray";
import useCycler from "./hooks/useCycler";
import useMousePosition from "./hooks/useMousePosition";
import useOnlineState from "./hooks/useOnlineState";
import useRandom from "./hooks/useRandom";
import useTimer from "./hooks/useTimer";
import capitalizeReducer from "./reducers/capitalizeReducer";

function CyclerTest() {
  const [data, prev, next] = useCycler(["alice", "bob", "joe"]);

  return (
    <>
      <p>Current: {data}</p>
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
    </>
  );
}

function RandomTest() {
  const [rand, nextRand] = useRandom();

  return (
    <>
      <p>Rand: {rand}</p>
      <button onClick={nextRand}>Next</button>
    </>
  );
}

function OnlineTest() {
  const online = useOnlineState();
  return (
    <>
      <p>Online state: {online ? "OnLine" : "OffLine"}</p>
    </>
  );
}

function TimerTest() {
  const [timer, start, stop] = useTimer(100);

  return (
    <>
      <p>{timer}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}

function MousePositionTest() {
  const { x, y } = useMousePosition();
  return (
    <>
      <p>
        X: {x}, Y: {y}
      </p>
    </>
  );
}

function ArrayTest() {
  const [arr, push, clear] = useArray(["banane", "kiwi", "citron"]);
  return (
    <>
      <p>Array</p>
      <ul>
        {arr.map((a: string, index: number) => (
          <li key={index}>{a}</li>
        ))}
      </ul>
      <button onClick={() => push("pomme")}>Push</button>
      <button onClick={clear}>Clear</button>
    </>
  );
}

function ReducerTest() {
  const [text, dispatch] = useReducer(capitalizeReducer, "");

  return (
    <>
      <input type="text" value={text} onChange={(e) => dispatch(e.target.value)} />
      <p>{text}</p>
    </>
  );
}

function App() {
  return (
    <>
      <CyclerTest />
      <hr />
      <RandomTest />
      <hr />
      <OnlineTest />
      <hr />
      <TimerTest />
      <hr />
      <MousePositionTest />
      <hr />
      <ArrayTest />
      <hr />
      <ReducerTest />
    </>
  );
}

export default App;
