import React from "react";
import { useSelector } from "react-redux";

function AnOtherComponent() {
  const count = useSelector((state) => state.counter);
  const pizzas = useSelector((state) => state.pizzas);

  return (
    <>
      <hr />
      <h2>Display only</h2>
      <p>Counter: {count.value}</p>
      <div>
        Pizzas:
        <ul>
          {pizzas.data.map((p, index) => (
            <li key={index}>{p}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AnOtherComponent;
