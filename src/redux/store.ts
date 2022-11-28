import { configureStore } from "@reduxjs/toolkit";
import { sanefApi } from "./api/apiSlice";
import authReducer from "./features/authSlice";
import bankReducer from "./features/bankSlice";

export const store = configureStore({
  reducer: {
    [sanefApi.reducerPath]: sanefApi.reducer,
    auth: authReducer,
    banks: bankReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sanefApi.middleware),
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
