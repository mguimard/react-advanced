import { createSlice } from "@reduxjs/toolkit";

const statuses = ["online", "absent", "busy", "offline"];

const initialState = {
  list: [
    { ledId: 0, name: "alice", status: "online" },
    { ledId: 1, name: "bob", status: "busy" },
    { ledId: 2, name: "jean-kevin", status: "absent" },
    { ledId: 3, name: "joe", status: "offline" },
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      let user = state.list.find((user) => user.ledId === action.payload.id);
      user.status = action.payload.status;
    },
    randomizeUsers: (state) => {
      for (const user of state.list) {
        user.status = statuses[Math.round(Math.random() * 1000) % 4];
      }
    },
    resetUsers: () => initialState,
  },
});

export const { updateUser, randomizeUsers, resetUsers } = userSlice.actions;
