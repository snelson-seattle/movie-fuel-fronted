import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://7dezero58a.execute-api.us-west-2.amazonaws.com/DEV",
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
