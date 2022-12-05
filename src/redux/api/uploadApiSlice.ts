import { sanefApi } from "./apiSlice";
import { UploadResponse } from "types/upload";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const uploadApiSlice = sanefApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation<UploadResponse, any>({
      query: (uploadData) => ({
        url: `${BASE_URL}/upload-image`,
        method: "POST",
        body: uploadData
      })
    })
  })
});

export const { useUploadImageMutation } = uploadApiSlice;
