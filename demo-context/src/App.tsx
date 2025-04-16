import { useContext, useState } from "react";
import "./App.css";
import { MyDataContext } from "./contexts/data";

function TodoAddComponent() {
  console.log("TodoAddComponent");
  const { addTodo } = useContext(MyDataContext);
  return <button onClick={() => addTodo("Todo:" + Date.now())}>Add todo</button>;
}

function TodoListComponent() {
  console.log("TodoListComponent");
  const { todos } = useContext(MyDataContext);
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <MyDataContext.Provider value={{ todos, addTodo }}>
        <p>Hello</p>
        <TodoAddComponent />
        <hr />
        <TodoListComponent />
        <hr />
        <TodoListComponent />
      </MyDataContext.Provider>
    </>
  );
}

export default App;
