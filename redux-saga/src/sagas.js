import { all, call, delay, put, takeEvery } from "redux-saga/effects";

export function* helloSaga() {
  console.log("Hello Saga!");
}

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "increment" });
}

export function* watchIncrementAsync() {
  yield takeEvery("increment_async", incrementAsync);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([call(helloSaga), call(watchIncrementAsync)]);
}
