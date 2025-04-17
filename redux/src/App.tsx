import { combineReducers, configureStore, createSlice, Middleware, Tuple } from "@reduxjs/toolkit";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

const historySlice = createSlice({
  name: "history",
  initialState: {
    actions: [""],
  },
  reducers: {
    push: (state, action) => {
      state.actions.push(action.payload);
    },
  },
});

const myMiddleWare1: Middleware = () => (next) => async (action) => {
  console.log("myMiddleWare1", action);
  const result = next(action);
  return result;
};

const myMiddleWare2: Middleware = () => (next) => async (action) => {
  console.log("myMiddleWare2", action);
  const result = next(action);
  return result;
};

const historyMiddleWare: Middleware = (store) => (next) => (action) => {
  console.log("historyMiddleWare", action);

  if ((action as { type: string }).type !== "history/push") {
    store.dispatch(historySlice.actions.push((action as { type: string }).type));
  }
  const result = next(action);

  return result;
};

const store = configureStore({
  reducer: combineReducers({
    counter: counterSlice.reducer,
    history: historySlice.reducer,
  }),
  middleware: () => new Tuple(myMiddleWare1, myMiddleWare2, historyMiddleWare),
});

type RootState = ReturnType<typeof store.getState>;

function useCounterValue() {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  return counterValue;
}

function Component1() {
  const counterValue = useCounterValue();
  return <p>hello c1: {counterValue}</p>;
}

function Component2() {
  const dispatch = useDispatch();

  return (
    <p>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>-</button>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>+</button>
    </p>
  );
}

function History() {
  console.log("History");
  const logs = useSelector((state: RootState) => state.history.actions);
  return (
    <>
      {logs.map((log) => (
        <p>{log}</p>
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Provider store={store}>
        <Component1 />
        <Component2 />
        <History />
      </Provider>
    </>
  );
}

export default App;
