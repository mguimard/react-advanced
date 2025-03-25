const initialState = {};

export default function userReducer(state = initialState, action) {
  console.log("user reducer", arguments);
  switch (action.type) {
    case "USER_FETCH_SUCCEEDED":
      return action.user;

    default:
      return state;
  }
}
