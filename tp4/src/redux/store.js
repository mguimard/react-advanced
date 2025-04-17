import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./usersSlice";
import { ledsSlice } from "./ledsSlice";

export const store = configureStore({
  reducer: combineReducers({
    users: userSlice.reducer,
    leds: ledsSlice.reducer,
  }),
});
