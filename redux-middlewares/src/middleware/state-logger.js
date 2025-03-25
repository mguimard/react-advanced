export const myLoggerMiddleware = (store) => (next) => (action) => {
  console.log("myLoggerMiddleware", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};
