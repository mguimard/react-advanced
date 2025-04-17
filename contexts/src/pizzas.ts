import { createContext } from "react";

export type PizzaContextType = {
  pizzas: string[];
  setPizzas: (pizzas: string[]) => void;
};

export const PizzaContext = createContext<PizzaContextType>({
  pizzas: [],
  setPizzas: () => {},
});
