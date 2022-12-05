import { sanefApi } from "./apiSlice";
import { IUpdateBankRequest, IBankResponse, IBankRequest } from "types/bank";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const bankApiSlice = sanefApi.injectEndpoints({
  endpoints: (builder) => ({
    getRegulators: builder.query<IBankResponse, void>({
      query: () => `${BASE_URL}/regulators`,
      keepUnusedDataFor: 5
    }),

    getRegulatorDetails: builder.query<IBankResponse, string>({
      query: (data) => `${BASE_URL}/regulators/${data}`,
      keepUnusedDataFor: 5
    }),

    updateRegulatorDetails: builder.mutation<IBankResponse, IUpdateBankRequest>(
      {
        query: (bankData) => ({
          url: `${BASE_URL}/regulators/${bankData.id}`,
          method: "PUT",
          body: bankData
        })
      }
    ),

    registerNewRegulator: builder.mutation<IBankResponse, IBankRequest>({
      query: (bankData) => ({
        url: `${BASE_URL}/regulators`,
        method: "POST",
        body: bankData
      })
    })
  })
});

export const {
  useGetRegulatorsQuery,
  useGetRegulatorDetailsQuery,
  useRegisterNewRegulatorMutation,
  useUpdateRegulatorDetailsMutation
} = bankApiSlice;
