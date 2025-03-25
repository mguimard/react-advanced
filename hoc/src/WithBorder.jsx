import React from "react";

const WithBorder = (SomeComponent) => {
  return (props) => {
    return (
      <div style={{ border: "1px solid orange" }}>
        <SomeComponent {...props} />
      </div>
    );
  };
};

export default WithBorder;
