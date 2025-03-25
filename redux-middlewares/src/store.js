import { configureStore, Tuple } from "@reduxjs/toolkit";
import { saveCounterMiddleware } from "./middleware/save-counter";
import { myLoggerMiddleware } from "./middleware/state-logger";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(myLoggerMiddleware, saveCounterMiddleware),
});

export default store;
