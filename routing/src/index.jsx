import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Nav from "./Nav";
import Page1 from "./Page1";
import Page2 from "./Page2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
