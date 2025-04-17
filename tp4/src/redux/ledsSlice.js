import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 0, state: false },
    { id: 1, state: true },
    { id: 2, state: true },
    { id: 3, state: false },
  ],
};

export const ledsSlice = createSlice({
  name: "leds",
  initialState,
  reducers: {
    updateLed: (state, action) => {
      const led = state.list.find((led) => led.id === action.payload.id);
      led.state = action.payload.state;
    },
    randomizeLEDs: (state) => {
      for (const led of state.list) {
        led.state = Math.random() > 0.5;
      }
    },
    resetLEDs: () => initialState,
  },
});

export const { updateLed, randomizeLEDs, resetLEDs } = ledsSlice.actions;
