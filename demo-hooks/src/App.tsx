import "./App.css";
import useCounter from "./useCounter";
import useLocalStorage from "./useLocalStorage";

function ComponentA() {
  const [userName, setUserName] = useLocalStorage("userName", "");
  return (
    <>
      <p>Username: {userName} </p>
      <button onClick={() => setUserName("bob")}>Set to bob</button>
    </>
  );
}

function Counter() {
  const { count, add } = useCounter(20, 30);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => add(2)}>Add 2</button>
    </>
  );
}

function App() {
  return (
    <>
      <ComponentA />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
