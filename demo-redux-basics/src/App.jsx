import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import { addPizza, eatAll } from "./redux/pizzasSlice";

function PizzasList() {
  const pizzas = useSelector((state) => state.pizzas.list);
  return (
    <>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza}>{pizza}</li>
        ))}
      </ul>
    </>
  );
}

function BeersList() {
  console.log("Beerlist");
  const beers = useSelector((state) => state.beers.list);
  return (
    <>
      <ul>
        {beers.map((beer) => (
          <li key={beer}>{beer}</li>
        ))}
      </ul>
    </>
  );
}

function PizzaManagement() {
  const dispatch = useDispatch();
  //dispatch(eatAll());
  return (
    <>
      <button onClick={() => dispatch(addPizza("chorizo"))}>AddPizza</button>
      <button onClick={() => dispatch(eatAll())}>Eat all</button>
    </>
  );
}

function App() {
  return (
    <>
      <Provider store={store}>
        <PizzasList />

        <PizzasList />

        <PizzasList />
        <hr />
        <BeersList />
        <hr />

        <PizzaManagement />
      </Provider>
    </>
  );
}

export default App;
