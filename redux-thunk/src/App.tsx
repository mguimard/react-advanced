import {
  createAsyncThunk,
  combineReducers,
  configureStore,
  createSlice,
  Middleware,
} from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";

const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const fetchUser = createAsyncThunk("user/fetch", async (id: string) => {
  await sleep(1000);
  const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  return await response.json();
});

const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  await sleep(1000);
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
});

const todosInitialState = {
  entries: [],
  loading: "idle",
};

const todosSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      console.log("Pending state");
      state.loading = "pending";
    });

    builder.addCase(fetchTodos.rejected, (state) => {
      console.log("Rejected state");
      state.loading = "rejected";
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log("Fullfilled state");
      state.loading = "done";
      state.entries = action.payload;
    });
  },
});

const userInitialState = {
  data: {},
  loading: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      console.log("Pending state");
      state.loading = "pending";
    });

    builder.addCase(fetchUser.rejected, (state) => {
      console.log("Rejected state");
      state.loading = "rejected";
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log("Fullfilled state");
      state.loading = "done";
      state.data = action.payload;
    });
  },
});

const logger: Middleware = () => (next) => (action) => {
  console.log("My logger", action);
  return next(action);
};

const store = configureStore({
  reducer: combineReducers({
    todos: todosSlice.reducer,
    user: userSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// fetch at init
//store.dispatch(fetchTodos());

function CurrentUser() {
  const user = useSelector((state) => state.user.data);
  console.log("Current user", user);
  return (
    <>
      <p>
        User: {user.id}, {user.name}
      </p>
    </>
  );
}

function TodosDisplay() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <p>State: {todos.loading}</p>
      {todos.entries.map((todo) => (
        <p key={todo.id} onClick={() => dispatch(fetchUser(todo.userId))}>
          {todo.title}
        </p>
      ))}
    </>
  );
}

function TodosFetchButton() {
  const dispatch = useDispatch();
  return (
    <>
      <p>Todos</p>
      <button onClick={() => dispatch(fetchTodos())}>Fetch</button>
    </>
  );
}

function App() {
  return (
    <>
      <Provider store={store}>
        <CurrentUser />
        <TodosFetchButton />
        <hr />
        <TodosDisplay />
      </Provider>
    </>
  );
}

export default App;
