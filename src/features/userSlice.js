import { createSlice } from "@reduxjs/toolkit";

// Creating the user object
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// selecting the user for information
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
