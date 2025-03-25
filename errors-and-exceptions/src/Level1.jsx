import React, { useEffect, useState } from "react";

function Level1() {
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
      <div>Level 1</div>
      <button onClick={onClick}>Throw error</button>
      <hr />
    </>
  );
}

export default Level1;
