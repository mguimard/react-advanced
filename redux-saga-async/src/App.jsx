import React from "react";
import store from "./store";

const action = (action) => store.dispatch(action);

function App() {
  let state = store.getState();
  console.log(state);
  return (
    <>
      <div>Hello saga async</div>

      <button
        onClick={() => {
          action({ type: "USER_FETCH_REQUESTED", payload: { userId: 1 } });
          action({ type: "TODO_FETCH_REQUESTED", payload: { todoId: 1 } });
        }}>
        Click to fetch user
      </button>

      {state?.user?.id && <h2> User fetched: {state.user.name} </h2>}
      {state?.todo?.id && <h2> Todo fetched: {state.todo.title} </h2>}
    </>
  );
}

export default App;
