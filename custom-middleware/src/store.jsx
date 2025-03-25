import { configureStore, Tuple } from "@reduxjs/toolkit";
import stateLogger from "./state-logger";

import counterReducer from "./reducers";

const store = configureStore({
  reducer: counterReducer,
  middleware: () => new Tuple(stateLogger),
});

export default store;
