import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "types/user";
import { RootState } from "../store";

type AuthState = {
  user: IUser | null;
  token: string | null;
  refreshToken: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredential: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },

    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    }
  }
});

export const { setCredential, logoutUser } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
