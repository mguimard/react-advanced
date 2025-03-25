import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary";
import Level1 from "./Level1";
import Level2 from "./Level2";
import UncaughtExample from "./UncaughtExample";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UncaughtExample />
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <UncaughtExample />
    </ErrorBoundary>

    <ErrorBoundary fallback={<p>Error level 1</p>}>
      <Level1 />
      <ErrorBoundary fallback={<p>Error level 2</p>}>
        <Level2 />
      </ErrorBoundary>
    </ErrorBoundary>
  </StrictMode>
);
