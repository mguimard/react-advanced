import { useState } from "react";
import "./App.css";

function MyItem({ value, removeHandler }) {
  const [animate, setAnimate] = useState(false);

  return (
    <p
      onClick={() => setAnimate(true)}
      className={animate ? "animate" : ""}
      onTransitionEnd={removeHandler}>
      {value}
    </p>
  );
}

function MyList() {
  const [data, setData] = useState(["bananes", "pizzas", "beers"]);

  const removeHandler = (item) => {
    setData(data.filter((i) => i !== item));
  };

  return (
    <>
      {data.map((item) => (
        <MyItem key={item} value={item} removeHandler={() => removeHandler(item)} />
      ))}
    </>
  );
}

function App() {
  const [className, setClassName] = useState("");
  const [state, setState] = useState("idle");

  return (
    <>
      <div className="my-list">
        <MyList />
      </div>
      <hr />
      <div className="my-div">
        State: {state}
        <button
          onClick={() => {
            setState("pending");
            setClassName("animation2");
          }}>
          Click me
        </button>
        <p
          onAnimationEnd={() => setState("Finished")}
          onTransitionEnd={() => setState("Finished")}
          className={className}>
          This is some paragraph
        </p>
      </div>
    </>
  );
}

export default App;
