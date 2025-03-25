import React from "react";

const Search = ({ onChange }) => {
  console.log("Rendering search");
  return (
    <>
      <input type="text" onChange={onChange} />
    </>
  );
};

export default Search;
