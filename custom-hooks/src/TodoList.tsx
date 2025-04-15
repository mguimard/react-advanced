import useTodos from "./useTodos";

function TodoList() {
  console.log("TodoList");
  const { todos, done, errors, refetch } = useTodos();

  return (
    <>
      <p>{!done ? "Loading..." : null}</p>
      <p>{errors ? "Ooops..." : null}</p>
      <button onClick={() => refetch()}>Reload list</button>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </>
  );
}

export default TodoList;
