import { lazy, Suspense, useState } from "react";
import "./App.css";

// @ts-ignore
const LoginBox = lazy(() => import("my_remote/LoginBox"));
function App() {
  const [show, setShow] = useState(false);

  const toggleLogin = () => {
    setShow(!show);
  };

  return (
    <>
      <h1>App 1</h1>
      <button onClick={toggleLogin}>Show login box</button>
      <hr />
      {show && (
        <Suspense fallback="please wait...">
          <LoginBox title="Please login to App1" />
        </Suspense>
      )}
    </>
  );
}

export default App;
