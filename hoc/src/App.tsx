import { ComponentType, JSX, useState } from "react";
import "./App.css";

const Beer = () => <p>good beer</p>;
const Pizza = ({ name, price }: { name?: string; price: number }) => (
  <p>
    🍕 {name} {price}
  </p>
);

const withBeer = function <T>(Something: ComponentType<T>) {
  return (props: T & JSX.IntrinsicAttributes) => {
    return (
      <>
        I will have a <Something {...props} /> with a <Beer />
      </>
    );
  };
};

const PizzaWithBeer = withBeer(Pizza);

const withToggle = function <T>(Something: ComponentType<T>) {
  return (props: T & JSX.IntrinsicAttributes) => {
    const [show, setShow] = useState(false);

    return (
      <>
        <button onClick={() => setShow(!show)}>Toggle {Something.name} </button>
        {show && <Something {...props} />}
      </>
    );
  };
};

const PizzaWithToggle = withToggle(Pizza);
const BeerWithToggle = withToggle(Beer);
const PizzaWithBeerWithToggle = withToggle(withBeer(Pizza));

function App() {
  return (
    <>
      <PizzaWithBeerWithToggle name="landaise" price={13.5} />
      <hr />
      <BeerWithToggle />
      <hr />
      <PizzaWithToggle name="Saumon" price={13.5} />
      <hr />
      <PizzaWithBeer name="Basquaise" price={12.5} />
    </>
  );
}

export default App;
