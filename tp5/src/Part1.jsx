import React, { useState } from "react";
import { useMemo } from "react";

const initialItems = new Array(30_000_000).fill(0).map((i, index) => {
  return {
    id: index,
    isSelected: index === 29_999_999,
  };
});

function Part1() {
  let [count, setCount] = useState(0);
  let [items] = useState(initialItems);

  let selectedItem = useMemo(() => items.find((i) => i.isSelected), [items]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
      <p>Selected item: {selectedItem.id}</p>
    </>
  );
}

export default Part1;
