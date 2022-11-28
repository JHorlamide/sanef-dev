import { sanefApi } from "./apiSlice";
import { ILoginResponse, ILoginRequest } from "types/login";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const loginApiSlice = sanefApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<ILoginResponse, ILoginRequest>({
      query: (credentials) => ({
        url: `${BASE_URL}/auth`,
        method: "POST",
        body: credentials
      })
    })
  })
});

export const { useLoginUserMutation } = loginApiSlice;
