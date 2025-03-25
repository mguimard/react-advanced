const initialState = {};

export default function todoReducer(state = initialState, action) {
  console.log("todo reducer", arguments);
  switch (action.type) {
    case "TODO_FETCH_SUCCEEDED":
      return action.todo;

    default:
      return state;
  }
}
