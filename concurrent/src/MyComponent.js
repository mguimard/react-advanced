import React, { cache } from "react";

const veryLongProcess = (inp) => {
  console.log("veryLongProcess");
  return inp.map((i) => i * 2);
};

const data = [1, 2, 3, 4, 5];

const getResult = cache(veryLongProcess);

const MyComponent = () => {
  const result = getResult(data);
  const result2 = getResult(data);

  console.log(result, result2);

  return <p>Hello world !</p>;
};

export default MyComponent;
