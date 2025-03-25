import { call, put, takeEvery } from "redux-saga/effects";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const fetchUserFn = async (id) => {
  console.log("fetchUserFn");
  let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
};

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  console.log("fetchUser*");

  try {
    const user = yield call(fetchUserFn, action.payload.userId);
    yield put({ type: "USER_FETCH_SUCCEEDED", user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

const fetchTodoFn = async (id) => {
  console.log("fetchTodoFn");
  let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.json();
};

function* fetchTodo(action) {
  console.log("fetchTodo*");
  try {
    const todo = yield call(fetchTodoFn, action.payload.todoId);
    yield delay(1000);
    yield put({ type: "TODO_FETCH_SUCCEEDED", todo });
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED", message: e.message });
  }
}

// Starts fetching data on each dispatched USER_FETCH_REQUESTED and TODO_FETCH_REQUESTED actions
// Allows concurrent fetches
export default function* mySaga() {
  console.log("mySaga*");
  yield takeEvery("TODO_FETCH_REQUESTED", fetchTodo);
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}
