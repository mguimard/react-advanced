import { createSlice } from "@reduxjs/toolkit";

const initialBeers = {
  list: ["IPA", "Guiness"],
};

export const BeersSlice = createSlice({
  name: "beers",
  initialState: initialBeers,
  reducers: {
    drinkAll: (state, action) => {
      console.log(action);
      state.list = [];
    },
  },
});

export const { drinkAll } = BeersSlice.actions;
