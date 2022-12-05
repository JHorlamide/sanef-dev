import { sanefApi } from "./apiSlice";
import { IUpdateBankRequest, IBankResponse, IBankRequest } from "types/bank";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const bankApiSlice = sanefApi.injectEndpoints({
  endpoints: (builder) => ({
    getBanks: builder.query<IBankResponse, void>({
      query: () => `${BASE_URL}/banks`,
      keepUnusedDataFor: 5
    }),

    getBankDetails: builder.query<IBankResponse, string>({
      query: (data) => `${BASE_URL}/banks/${data}`,
      keepUnusedDataFor: 5
    }),

    updateBankDetails: builder.mutation<IBankResponse, IUpdateBankRequest>({
      query: (bankData) => ({
        url: `${BASE_URL}/banks/edit`,
        method: "PUT",
        body: bankData
      })
    }),

    registerNewBank: builder.mutation<IBankResponse, IBankRequest>({
      query: (bankData) => ({
        url: `${BASE_URL}/banks`,
        method: "POST",
        body: bankData
      })
    }),

    deleteBank: builder.mutation<IBankResponse, string>({
      query: (bankId) => ({
        url: `${BASE_URL}/banks/${bankId}`,
        method: "DELETE",
        body: {}
      })
    })
  })
});

export const {
  useGetBanksQuery,
  useGetBankDetailsQuery,
  useUpdateBankDetailsMutation,
  useRegisterNewBankMutation,
  useDeleteBankMutation
} = bankApiSlice;
