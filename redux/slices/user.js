import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
  user: null,
  userLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    userLoading: (state, action) => {
      state.userLoading = action.payload;
    },
  },
});

export const { setUser, setUserLoading } = userSlice.actions;

export default userSlice.reducer;
