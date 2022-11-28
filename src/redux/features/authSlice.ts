import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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

    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },

    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },

    setRefreshToken: (state, action: PayloadAction<string | null>) => {
      state.refreshToken = action.payload;
    },

    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    }
  }
});

export const { setToken, setRefreshToken, setUser, setCredential, logoutUser } =
  authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
