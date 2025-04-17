import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
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

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [Date.now()],
  },
  reducers: {
    add: (state) => {
      state.data.push(Date.now());
    },
  },
});

const store = configureStore({
  reducer: combineReducers({
    counter: counterSlice.reducer,
    data: dataSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

type RootState = ReturnType<typeof store.getState>;

function Component1() {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  console.log(counterValue);
  return <p>hello c1: {counterValue}</p>;
}

function Component2() {
  const dispatch = useDispatch();

  return (
    <p>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>Increment counter</button>
    </p>
  );
}

function App() {
  return (
    <>
      <Provider store={store}>
        <Component1 />
        <Component2 />
      </Provider>
    </>
  );
}

export default App;
