const stateLogger = (store) => {
  return (next) => {
    return (action) => {
      let previousState = store.getState();
      let type = action.type;
      const res = next(action);
      let nextState = store.getState();

      console.log("previous", previousState);
      console.log("next", nextState);

      return res;
    };
  };
};

export default stateLogger;
