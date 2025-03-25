"use client";

import { useEffect, useState } from "react";
import Todo from "../interfaces/todo";

const initialTodos: Todo[] = [];

export default function Component2() {
  console.log("Component2");

  const [state, setState] = useState(initialTodos);

  useEffect(() => {
    (async function () {
      const data: Todo[] = await (await fetch("https://jsonplaceholder.typicode.com/todos")).json();
      console.log("Result from server", data);
      setState(data);
    })();

    return () => {};
  }, []);

  return (
    <>
      <p>Hello Component2</p>
      <p>Fetched {state.length} todos on client side</p>
    </>
  );
}
