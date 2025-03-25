import { configureStore, Tuple } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import counterReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: counterReducer,
  middleware: () => new Tuple(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const action = (type) => store.dispatch({ type });
