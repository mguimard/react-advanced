import { useEffect, useState } from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";

function SomeComponent() {
  const [whatever, setWhatever] = useState(false);

  useEffect(() => {
    if (whatever) throw Error("This is from a use effect");
    return () => {
      if (whatever) throw Error("This is from a use effect");
    };
  }, [whatever]);

  return (
    <>
      {" "}
      <p>this is a component</p>
      <button onClick={() => setWhatever(true)}>Click me</button>
    </>
  );
}

function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong (1st level):</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function fallbackRender2({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong (2nd level):</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <SomeComponent />
        <ErrorBoundary fallbackRender={fallbackRender2}>
          <SomeComponent />
        </ErrorBoundary>
      </ErrorBoundary>
    </>
  );
}

export default App;
