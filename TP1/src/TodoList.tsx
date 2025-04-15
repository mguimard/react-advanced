import { useCallback, useState } from "react";
import TodoItem from "./TodoItem";

const initialTodos = [
  { name: "Do this", completed: false },
  { name: "Do that", completed: true },
  { name: "Do this again", completed: false },
];

enum Filters {
  Completed,
  Todos,
  All,
}

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState(Filters.All);

  const toggleHandler = useCallback((name: string, checked: boolean) => {
    setTodos((prevTodos) => {
      const todo = prevTodos.find((todo) => todo.name === name);
      if (todo) todo.completed = checked;
      return [...prevTodos];
    });
  }, []);

  return (
    <>
      <p>Filter:</p>
      <button onClick={() => setFilter(Filters.Completed)}>Completed</button>
      <button onClick={() => setFilter(Filters.Todos)}>Not completed</button>
      <button onClick={() => setFilter(Filters.All)}>All</button>
      <ul>
        {todos
          .filter((todo) => {
            return (
              (filter === Filters.Completed && todo.completed) ||
              (filter === Filters.Todos && !todo.completed) ||
              filter === Filters.All
            );
          })
          .map((todo) => (
            <li key={todo.name}>
              <TodoItem name={todo.name} checked={todo.completed} toggleHandler={toggleHandler} />
            </li>
          ))}
      </ul>
    </>
  );
}
