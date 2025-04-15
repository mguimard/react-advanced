import { lazy, Suspense, useState } from "react";
import "./App.css";

// @ts-ignore
const LoginBox = lazy(() => import("my_remote/LoginBox"));
// @ts-ignore
const LoggedInMessage = lazy(() => import("my_remote/LoggedInMessage"));

const LocalComponent = lazy(() => import("./LocalComponent"));

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
      <LoggedInMessage />
      {show && (
        <Suspense fallback="please wait...">
          <LoginBox name="Please login to App1" />
        </Suspense>
      )}
      {show && (
        <Suspense fallback="please wait...">
          <LocalComponent />
        </Suspense>
      )}
    </>
  );
}

export default App;
