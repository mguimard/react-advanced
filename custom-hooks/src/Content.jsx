import React, { useCallback } from "react";
import { useDocumentTitle } from "./UseDocumentTitle";
import { useFetch } from "./UseFetch";
import { useToggle } from "./UseToggle";

const Content = () => {
  const [value, setValue] = useToggle();
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");

  const setTitle = useDocumentTitle("New title");

  const handleClick = useCallback(() => {
    setTitle("You clicked a button");
  });

  return (
    <>
      <div>Content</div>
      {loading ? "Loading...." : ""}

      <p>Count todos: {data ? data.length : 0}</p>
      <p>Value is : {value ? "true" : "false"}</p>
      <button onClick={() => setValue(!value)}>Toggle</button>
      <button onClick={handleClick}>Change title</button>
    </>
  );
};

export default Content;
