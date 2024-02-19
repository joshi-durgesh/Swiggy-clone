import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userinfo",
  initialState: {
    users: null,
  },
  reducers: {
    addUser: (state, action) => {
      const newUser = action.payload;
      state.users = {
        ...state.users,
        [newUser.phone]: newUser,
      };
    },
  },
});

export const { addUser } = userInfoSlice.actions;

export default userInfoSlice.reducer;
