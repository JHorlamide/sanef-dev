import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredential, logoutUser } from "../features/authSlice";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const isBrowser = typeof window !== "undefined";
    const token =
      (getState() as RootState).auth.token ||
      (isBrowser ? localStorage.getItem("sanefToken") : null);

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  }
});

const baseQueryWithReAuth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 403) {
    const isBrowser = typeof window !== "undefined";
    const refreshToken =
      (api.getState() as RootState).auth.refreshToken ||
      (isBrowser ? localStorage.getItem("refreshToken") : null);

    // Send refresh token to get new accessToken
    const refreshTokenConfig = {
      url: "/auth/refresh-token",
      method: "POST",
      body: { refreshToken: refreshToken }
    };

    const refreshTokenResult = await baseQuery(
      refreshTokenConfig,
      api,
      extraOptions
    );

    console.log("refreshTokenResult", { refreshTokenResult });

    if (refreshTokenResult.data) {
      const user = (api.getState() as RootState).auth.user;

      // Store the new token
      api.dispatch(setCredential({ ...refreshTokenResult.data, user }));

      // Retry the original query with new accessToken
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logoutUser());
    }
  }

  return result;
};

export const sanefApi = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
  refetchOnReconnect: true
});
