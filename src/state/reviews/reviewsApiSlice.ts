import { Review } from "../../types/Review";
import { apiSlice } from "../api/apiSlice";

export const reviewsApiSlice = apiSlice.injectEndpoints({ 
    endpoints: (builder) => ({
        getReviews: builder.query({
            query: () => ({
                url: "/reviews",
                method: "GET"
            })
        }),
        getReview: builder.query({
            query: (id: string) => ({
                url: `/reviews/${id}`,
                method: "GET"
            })
        }),
        // Mutation to refetch the single Review query
        getReviewAgain: builder.mutation({
            query: (id: string | undefined) => ({
                url: `/reviews/${id}`,
                method: "GET"
            })
        }),
        
        createReview: builder.mutation({
            query: (data) => {
                return {
                    url: "/reviews",
                    method: "POST",
                    body: data,
                }
            }
        }),

        // Add the mutation to refetch the getReviews query
        getReviewsAgain: builder.mutation({
            query: () => ({
                url: "/reviews",
                method: "GET"
            }),
        }),
    })
});

export const { useGetReviewsQuery, useGetReviewQuery, useCreateReviewMutation, useGetReviewsAgainMutation, useGetReviewAgainMutation } = reviewsApiSlice;

