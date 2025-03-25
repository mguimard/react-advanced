const initialState = {
  data: [],
};

export default function pizzasReducer(state = initialState, action) {
  switch (action.type) {
    case "pizzas/add": {
      let data = [...state.data, action.payload];
      return {
        ...state,
        data,
      };
    }
    default:
      return state;
  }
}
