import { useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  console.log("App");
  const [value, setValue] = useState(0);
  const [users, setUsers] = useState(["alice", "bob", "joe"]);

  const increment = () => {
    /* setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1); // version avec variable
*/

    // version avec function
    setValue((prev) => {
      return prev + 1;
    });

    setValue((prev) => {
      return prev + 1;
    });

    setValue(value + 1);
  };

  const onRemove = (user: string) => {
    setUsers(users.filter((u) => u !== user));
  };

  return (
    <>
      <p>{value}</p>
      <button onClick={increment}>Click me</button>
      {users.map((user) => (
        <Child key={user} name={user} removeHandler={onRemove} />
      ))}
    </>
  );
}

export default App;
