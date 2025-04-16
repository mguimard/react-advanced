import { useReducer } from "react";
import "./App.css";
import useCounter from "./useCounter";
import useLocalStorage from "./useLocalStorage";

function ComponentA() {
  const [userName, setUserName] = useLocalStorage("userName", "");
  return (
    <>
      <p>Username: {userName} </p>
      <button onClick={() => setUserName("bob")}>Set to bob</button>
    </>
  );
}

function Counter() {
  const { count, add } = useCounter(20, 30);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => add(2)}>Add 2</button>
    </>
  );
}

enum PizzaActions {
  AddStock,
  RemoveStock,
  EatAll,
}

function pizzaReducer(state, action) {
  console.log("pizzaReducer", state, action);

  switch (action) {
    case PizzaActions.AddStock:
      console.log("Add to stock");
      return { ...state, stock: state.stock + 1 };
      break;
    case PizzaActions.RemoveStock:
      console.log("Add to stock");
      return { ...state, stock: state.stock - 1 };
      break;
    case PizzaActions.EatAll:
      console.log("Add to stock");
      return { ...state, stock: 0 };
      break;

    default:
      if (action.type === "fetch") {
        // .....
        console.log(`fetching pizzas from ${action.server}....`);
      }
      break;
  }

  return state;
}

function Pizza() {
  const [pizza, dispatch] = useReducer(pizzaReducer, { name: "chorizo", stock: 10 });

  return (
    <>
      <p>
        Pizza: {pizza.name}, stock: {pizza.stock}
      </p>
      <button onClick={() => dispatch(PizzaActions.AddStock)}>Add stock</button>
      <button onClick={() => dispatch(PizzaActions.EatAll)}>Eat all</button>
      <button onClick={() => dispatch({ type: "fetch", server: "server1.net" })}>
        {" "}
        Fetch pizzas
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <Pizza />
      <hr />
      <ComponentA />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
