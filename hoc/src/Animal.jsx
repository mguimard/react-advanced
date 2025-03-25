import React from "react";

const Animal = (props) => {
  return (
    <div>
      <p>This is an animal</p>
      <p>Name: {props.name}</p>
    </div>
  );
};

export default Animal;
