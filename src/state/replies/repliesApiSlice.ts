import { apiSlice } from "../api/apiSlice";

export const repliesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createReply: builder.mutation({
            query: (data) => ({
                url: "/comments",
                method: "POST",
                body: {...data},
            })
        }),
        getCommentsFromPost: builder.mutation({
            query: (id: string | undefined) => ({
                url: `/comments/${id}`,
                method: "GET"
            })
        }),
        getCommentFromReplyID: builder.mutation({
            query: (id: string) => ({
                url: `/comments/comment/${id}`,
                method: "GET"
            })
        }),

    })
});

export const { useCreateReplyMutation, useGetCommentsFromPostMutation, useGetCommentFromReplyIDMutation } = repliesApiSlice;