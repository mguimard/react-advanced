import { useState } from "react";

export const Home = () => <div>Hello Home page</div>;
export const Contact = () => <div>Hello Contact page</div>;
export const About = () => <div>Hello About page</div>;

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

  return (
    <>
      <select onChange={(e) => setPage(e.target.value)}>
        <option value="home">Home</option>
        <option value="contact">Contact</option>
        <option value="about">About</option>
      </select>
      {renderPage()}
    </>
  );
}

export default App;
