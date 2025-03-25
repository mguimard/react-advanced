import React from "react";
import { initialState, pizzaReducer, usePizzaReducer } from "./MyReducer";
import { Pizza } from "./Pizza";

const MyComponent = () => {
  console.log("MyComponent");

  const [state, dispatch] = usePizzaReducer(pizzaReducer, initialState);

  return (
    <>
      {state.pizzas.map((p) => (
        <Pizza
          key={p.id}
          id={p.id}
          name={p.name}
          prix={p.prix}
          stock={p.stock}
          dispatch={dispatch}
        />
      ))}
    </>
  );
};

export default MyComponent;
