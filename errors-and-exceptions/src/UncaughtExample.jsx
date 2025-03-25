import React, { useEffect, useState } from "react";

function UncaughtExample() {
  const [counter, setCounter] = useState(1);

  try {
    useEffect(() => {
      if (counter === 2) {
        throw new Error("boo");
      }
    }, [counter]);
  } catch (e) {
    console.log("never called!");
  }

  const onClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div>UncaughtExample</div>
      <button onClick={onClick}>Throw error</button>
      <hr />
    </>
  );
}

export default UncaughtExample;
