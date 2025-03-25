import React from "react";

const User = (props) => {
  return (
    <div>
      <p>This is a user</p>
      <p>Name: {props.name}</p>
    </div>
  );
};

export default User;
