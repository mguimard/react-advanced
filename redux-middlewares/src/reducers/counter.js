const initialState = {
  value: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/inc": {
      let value = state.value + 1;
      return {
        ...state,
        value,
      };
    }
    case "counter/dec": {
      let value = state.value - 1;
      return {
        ...state,
        value,
      };
    }
    case "counter/reset": {
      let value = 0;
      return {
        ...state,
        value,
      };
    }
    default:
      return state;
  }
}
