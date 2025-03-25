import React, { useEffect, useState } from "react";

function Level2() {
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (value) {
      throw new Error("ERROR");
    }
  }, [value]);

  const onClick = () => {
    setValue(true);
  };

  return (
    <>
      <div>Level 2</div>
      <button onClick={onClick}>Throw error</button>
      <hr />
    </>
  );
}

export default Level2;
