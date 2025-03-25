import React from "react";
import Animal from "./Animal";
import User from "./User";
import WithBorder from "./WithBorder";

const AnimalWithBorder = WithBorder(Animal);
const UserWithBorder = WithBorder(User);

function App() {
  return (
    <>
      <div>Hello HOC</div>
      <AnimalWithBorder name="Elephant" />
      <Animal name="Alligator" />

      <UserWithBorder name="Alice" />
      <User name="Bob" />
    </>
  );
}

export default App;
