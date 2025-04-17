// App.jsx
import { Suspense } from "react";
import { lazy } from "react";
import { useState } from "react";
import Nav, { NavV2 } from "./nav";
import { useCallback } from "react";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));

function LoadingInficator() {
  return <p>Please wait ...</p>;
}

const renderPage = (page) => {
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

function App() {
  const [page, setPage] = useState("home");

  const handlePageChange = useCallback((e) => setPage(e.target.value), []);

  return (
    <>
      <Nav handlePageChange={handlePageChange} />
      <hr />
      <NavV2 handlePageChange={handlePageChange} />
      <hr />
      <Suspense fallback={<LoadingInficator />}>{renderPage(page)}</Suspense>
    </>
  );
}

export default App;
