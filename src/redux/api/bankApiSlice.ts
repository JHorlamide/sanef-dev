import { sanefApi } from "./apiSlice";
import { IBankResponse } from "types/bank";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const bankApiSlice = sanefApi.injectEndpoints({
  endpoints: (builder) => ({
    getBanks: builder.query<IBankResponse, void>({
      query: () => `${BASE_URL}/banks`,
      keepUnusedDataFor: 5
    })
  })
});

export const { useGetBanksQuery } = bankApiSlice;
