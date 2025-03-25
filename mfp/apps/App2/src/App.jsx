import fruit from "app1/fruit";
import Header from "nav/Header";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <div>
        Hello app 2
        {fruit.map((f) => (
          <p>{f}</p>
        ))}
      </div>
    </>
  );
}

export default App;
