// App.jsx
import { lazy, Suspense, useCallback, useState } from "react";

const Home = lazy(() => import('./Home'))
const Contact = lazy(() => import('./Contact'))
const About = lazy(() => import('./About'))

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "contact":
        return <Contact />;
      case "about":
        return <About />;
      default:
        return <p>404</p>;
    }
  };

  const changeHandler = useCallback((e) => {
    setPage(e.target.value)
  }, []);

  return (
    <>
      <select onChange={changeHandler}>
        <option value="home">Home</option>
        <option value="contact">Contact</option>
        <option value="about">About</option>
      </select>
      <Suspense fallback="Loading...">
        {renderPage()}
      </Suspense>
    </>
  );
}

export default App;