import React, { useState } from "react";

const initialItems = new Array(30_000_000).fill(0).map((i, index) => {
  return {
    id: index,
    isSelected: index === 29_999_999,
  };
});

function App() {
  let [count, setCount] = useState(0);
  let [items] = useState(initialItems);

  let selectedItem = items.find((i) => i.isSelected);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
      <p>Selected item : {selectedItem.id}</p>
    </>
  );
}

export default App;
