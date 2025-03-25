import { combineReducers } from "redux";
import counterReducer from "./reducers/counter";
import pizzasReducer from "./reducers/pizza";

const rootReducer = combineReducers({
  counter: counterReducer,
  pizzas: pizzasReducer,
});

export default rootReducer;
