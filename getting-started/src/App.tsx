import { lazy, Suspense, useState } from "react";
import "./App.css";

function Todos({ todos }) {
  return (
    <>
      <p>todos: {todos.length}</p>
    </>
  );
}

const TodosLazy = lazy(async (props) => {
  console.log(props);
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (res.status !== 200) {
      return { default: () => <p>Ooooops</p> };
    }

    const data = await res.json();
    return { default: () => <Todos todos={data} /> };
  } catch (e) {
    return { default: () => <p>Ooooops</p> };
  }
});

export const withLazyComponent = (Something) => {
  return (props) => (
    <Suspense fallback="loading ...">
      <Something {...props} />
    </Suspense>
  );
};

const TodosLazy2 = withLazyComponent(
  lazy(async (props) => {
    console.log(props);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");

      if (res.status !== 200) {
        return { default: () => <p>Ooooops</p> };
      }

      const data = await res.json();
      return { default: () => <Todos todos={data} /> };
    } catch (e) {
      return { default: () => <p>Ooooops</p> };
    }
  })
);

function Wrap() {
  /*return lazy(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");

      if (res.status !== 200) {
        return { default: () => <p>Ooooops</p> };
      }

      const data = await res.json();
      return { default: () => <Todos todos={data} /> };
    } catch (e) {
      return { default: () => <p>Ooooops</p> };
    }
  });*/
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <p>Hello React</p>
      <Suspense fallback="please wait">
        <TodosLazy />
      </Suspense>
      <button onClick={() => setShow(!show)}>show</button>
      {show && (
        <Suspense fallback="please wait">
          <TodosLazy2 />
        </Suspense>
      )}
    </>
  );
}

export default App;
