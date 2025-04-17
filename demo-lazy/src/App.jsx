import { lazy, Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";

function fallbackRender({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}

function LoadingIndicator() {
  return <p>please wait.....</p>;
}

function Todos({ data }) {
  console.log("Todos");
  return <p>There are {data.length} todos</p>;
}

async function fetchTodos() {
  // Simulate an error
  if (Math.random() > 0.5) throw Error("random error");

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (res.status !== 200) {
    console.log(res);
    throw Error(`Request failed with error code ${res.status}`);
  } else {
    const data = await res.json();
    return { default: () => <Todos data={data} /> };
  }
}

function withDataLoading(asyncFn) {
  return function (props) {
    const Component = lazy(asyncFn);
    return (
      <Suspense fallback={<LoadingIndicator />}>
        <Component {...props} />
      </Suspense>
    );
  };
}

function withErrorBoundaries(SomeComponent) {
  return function (props) {
    const Component = SomeComponent;
    return (
      <ErrorBoundary fallbackRender={fallbackRender}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

function App() {
  const [show, setShow] = useState(false);
  const LazyTodos = withErrorBoundaries(withDataLoading(fetchTodos));

  return (
    <>
      {show && <LazyTodos />}
      <button onClick={() => setShow(!show)}>Show/hide</button>
    </>
  );
}

export default App;
