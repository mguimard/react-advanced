import { ComponentType, useState, JSX } from "react";
import "./App.css";

function Beer() {
  return <p>good beer</p>;
}

function Pizza({ name }: { name: string }) {
  return <p>🍕{name}</p>;
}

function withBeer(Something) {
  return (props) => {
    return (
      <>
        I'll have a <Something {...props} /> with a <Beer />
      </>
    );
  };
}

function withToggle<T>(Something: ComponentType<T>, defaultShow = false) {
  return (props: T & JSX.IntrinsicAttributes) => {
    const [show, setShow] = useState(defaultShow);

    return (
      <>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <Something {...props} />}
      </>
    );
  };
}

const PizzaWithBeer = withBeer(Pizza);
const PizzaWithToggle = withToggle(Pizza, true);
const BeerWithToggle = withToggle(Beer);
const PizzaWithBeerAndToggle = withToggle(withBeer(Pizza));

function App() {
  return (
    <>
      <p>Hello</p>
      <PizzaWithBeerAndToggle name="chorizo" />
      <hr />
      <BeerWithToggle />
      <hr />
      <PizzaWithToggle name="landaise" />
      <hr />
      <PizzaWithBeer name="basquaise" />
      <hr />
    </>
  );
}

export default App;
