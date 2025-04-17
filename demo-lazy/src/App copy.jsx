import { lazy, Suspense } from "react";
import "./App.css";

const MyComponent = lazy(() => import("./MyComponent"));

function LoadingIndicator() {
  return <p>please wait.....</p>;
}

function Todos({ todos }) {
  console.log("Todos");
  return <p>There are {todos.length} todos</p>;
}

function withDataLoading(Something) {
  return function (props) {
    return (
      <Suspense fallback="loading ...">
        <Something {...props} />
      </Suspense>
    );
  };
}

const SomeComponent = withDataLoading(
  lazy(async () => {
    let result;

    console.log("request");

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");

      if (res.status !== 200) {
        result = <p>Ooops</p>;
      } else {
        const data = await res.json();
        result = <Todos todos={data} />;
      }
    } catch (e) {
      result = <p>Ooops</p>;
    }

    return { default: () => result };
  })
);

function App() {
  return (
    <>
      <Suspense fallback={<LoadingIndicator />}>
        <MyComponent />
      </Suspense>
      <SomeComponent />
      <SomeComponent />
      <p>Hello</p>
    </>
  );
}

export default App;
