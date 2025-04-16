import { combineReducers, configureStore, Tuple } from "@reduxjs/toolkit";
import { eatAll, pizzasSlice } from "./pizzasSlice";
import { BeersSlice, drinkAll } from "./beersSlice";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const loggerMiddleware = (store) => (next) => async (action) => {
  //await sleep(1000);

  console.log("[State before]", store.getState());
  const result = next(action);
  //...
  // all middleware have been exceuted, and reducers have done the job
  console.log("[State after]", store.getState());

  if (store.getState().pizzas.list.length >= 5) {
    store.dispatch(eatAll());
    store.dispatch(drinkAll());
  }

  console.log("result", result);

  return result;
};

const historyMiddleware = (store) => (next) => (action) => {
  if (action.type.startsWith("beers/")) {
    localStorage.data += action.type;
  }
  console.log("historyMiddleware");
  const result = next(action);
  return result;
};

export const store = configureStore({
  reducer: combineReducers({
    pizzas: pizzasSlice.reducer,
    beers: BeersSlice.reducer,
  }),
  middleware: () => new Tuple(loggerMiddleware, historyMiddleware),
});
