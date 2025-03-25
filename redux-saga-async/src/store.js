import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";
import todoReducer from "./todo-reducer";
import userReducer from "./user-reducer";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

// Mount it on the Store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

// Then run the saga
sagaMiddleware.run(mySaga);

export default store;
