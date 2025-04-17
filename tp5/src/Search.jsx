// Search.jsx
import React from "react";
import { memo } from "react";

const Search = memo(({ onChange }) => {
  console.log("Rendering search");
  return (
    <>
      <input type="text" onChange={onChange} />
    </>
  );
});

export default Search;
