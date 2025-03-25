import React from "react";

export function Pizza({ id, name, prix, stock, dispatch }) {
  return (
    <>
      <p>
        Id: {id}; Name: {name}, Prix: {prix}, Stock: {stock}
      </p>
      <button onClick={() => dispatch({ type: "rename", id: id })}>Rename</button>
      <button onClick={() => dispatch({ type: "sell", id: id })}>Sell</button>
      <button onClick={() => dispatch({ type: "increase_price", id: id })}>Increase price</button>
      <button onClick={() => dispatch({ type: "whatever", id: id })}>Unknown action</button>
    </>
  );
}
