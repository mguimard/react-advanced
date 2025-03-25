import { useState } from "react";

export const initialState = {
  pizzas: [
    { id: 0, name: "reine", prix: 12, stock: 10 },
    { id: 1, name: "Saumon", prix: 13, stock: 15 },
    { id: 2, name: "4 fromages", prix: 10, stock: 8 },
  ],
};

export function pizzaReducer(state, action) {
  console.log("Execution pizzaReducer");

  switch (action.type) {
    case "sell": {
      state.pizzas.find((p) => action.id === p.id).stock--;
      return {
        ...state,
      };
    }
    case "increase_price": {
      state.pizzas.find((p) => action.id === p.id).prix++;
      return {
        ...state,
      };
    }
    case "rename": {
      state.pizzas.find((p) => action.id === p.id).name += " renamed";
      return {
        ...state,
      };
    }
    default: {
      throw Error("Action inconnue: " + action.type);
    }
  }
}

export function usePizzaReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}
