import { createSlice } from "@reduxjs/toolkit";

const initialPizzas = {
  list: ["reine", "saumon"],
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: initialPizzas,
  reducers: {
    addPizza: (state, action) => {
      console.log(state, action);
      state.list.push(action.payload);
    },
    eatAll: (state, action) => {
      console.log(action);
      state.list = [];
    },
  },
});

export const { addPizza, eatAll } = pizzasSlice.actions;
