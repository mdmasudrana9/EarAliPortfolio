// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TAuthState } from "@/redux/features/auth/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectUser = (state: { auth: TAuthState }) => state.auth.user;
export const selectToken = (state: { auth: TAuthState }) => state.auth.token;
