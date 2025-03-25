import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

function App() {
  return (
    <>
      <div>Hello Portals</div>
      {ReactDOM.createPortal(<Modal />, document.getElementById("my-portal-1"))}
      {ReactDOM.createPortal(<Modal />, document.getElementById("my-portal-2"))}
    </>
  );
}

export default App;
