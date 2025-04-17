import { memo, useCallback, useState } from "react";
import "./App.css";

const Pizza = memo(({ name }) => {
  console.log("Pizza", name);
  return <p>Je suis une pizza {name}</p>;
});

const handleClick = () => {
  console.log("hello");
};

function ShowPizzas() {
  const [show, setShow] = useState(false);

  const [pizzas, setPizzas] = useState(["reine", "chorizo"]);

  //const handleClick = useCallback(() => console.log("hello"), []);
  //const handleClick = () => console.log("hello");

  return (
    <>
      {pizzas.map((pizza) => (
        <Pizza key={pizza} name={pizza} onClick={handleClick} />
      ))}
      <button onClick={() => setShow(!show)}>Toggle</button>{" "}
      <button onClick={() => setPizzas([...pizzas, "saumon"])}>Add Pizza</button>{" "}
    </>
  );
}

function App() {
  return <ShowPizzas></ShowPizzas>;
}
export default App;
