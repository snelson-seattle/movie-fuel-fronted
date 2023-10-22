import { apiSlice } from "../api/apiSlice";

export const movieApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMovieByID: builder.mutation({
            query: (id: number) => ({
                url: `/MovieFuel/search/byID?idnumber=${id}`,
                method: "GET"
            })
        }),
        getMovieQuery: builder.mutation({
            query: ({ search, page }: { search: string, page: number }) => ({
                url: `/MovieFuel/search?search=${search}&page=${page}`,
                method: "GET"
            })
        }),
    })
});

export const { useGetMovieByIDMutation, useGetMovieQueryMutation} = movieApiSlice;