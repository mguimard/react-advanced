import { createSlice } from "@reduxjs/toolkit";

const initialCounterValue = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterValue,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
