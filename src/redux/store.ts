import {
  configureStore,
  MiddlewareAPI,
  isRejectedWithValue,
  Middleware,
  combineReducers
} from "@reduxjs/toolkit";
import { sanefApi } from "./api/apiSlice";
import authReducer, { logoutUser } from "./features/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import toast from "react-hot-toast";

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      if (action?.payload?.data?.message.toLowerCase() === "jwt expired") {
        api.dispatch(logoutUser());
        toast.error("Session expire");
        window.location.replace("/login");
        return;
      } else if (action?.payload?.status === 401) {
        api.dispatch(logoutUser());
        return;
      }
    }
  };

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  blacklist: [sanefApi.reducerPath]
};

const appReducer = combineReducers({
  [sanefApi.reducerPath]: sanefApi.reducer,
  auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(sanefApi.middleware)
      .concat(rtkQueryErrorLogger),
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
