import { useContext, useState } from "react";
import "./App.css";
import { PizzaContext } from "./pizzas";

function Component1() {
  const { pizzas } = useContext(PizzaContext);
  return <p>Hello: {pizzas.join(",")}</p>;
}

function Component2() {
  const { pizzas, setPizzas } = useContext(PizzaContext);
  return (
    <p>
      <button onClick={() => setPizzas([...pizzas, "chorizo"])}>Add a pizza</button>
    </p>
  );
}

function App() {
  const [pizzas, setPizzas] = useState(["reine", "saumon"]);

  return (
    <>
      <PizzaContext.Provider value={{ pizzas, setPizzas }}>
        <Component1 />
        <Component1 />

        <Component1 />
        <Component2 />
      </PizzaContext.Provider>
    </>
  );
}

export default App;
