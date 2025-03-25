import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./store";

let root = createRoot(document.getElementById("root"));

function render() {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

render();
store.subscribe(render);
