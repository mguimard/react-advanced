export const saveCounterMiddleware = (store) => (next) => (action) => {
  const response = next(action);

  if (action.type === "counter/inc") {
    console.log("Saving counter to database....");
  }

  return response;
};
