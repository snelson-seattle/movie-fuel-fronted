import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://35.91.76.180",
    prepareHeaders: (headers, { getState }) => {
      // This adds the token to the headers if we have a token in our auth state
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
