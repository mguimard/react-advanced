import React, { lazy } from "react";
import Loader from "./Loader";

const MyComponent = lazy(() => import("./MyComponent"));

function App() {
  return (
    <>
      <div>Hello concurrent</div>
      <React.Suspense fallback={<Loader />}>
        <MyComponent />
      </React.Suspense>
    </>
  );
}

export default App;
