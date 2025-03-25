// Search.jsx
import React, { memo } from "react";

const Search = memo(({ onChange }) => {
    console.log("Rendering search");
    return (
        <>
            <input type="text" onChange={onChange} />
        </>
    );
});

export default Search