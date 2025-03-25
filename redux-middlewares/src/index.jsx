import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import AnOtherComponent from "./AnOtherComponent";
import App from "./App";
import store from "./store";

store.dispatch({ type: "pizzas/add", payload: "Reine" });
store.dispatch({ type: "counter/inc" });

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <AnOtherComponent />
    </Provider>
  </React.StrictMode>
);
