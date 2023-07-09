import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export interface Message {
    name?: string,
    email?: string,
    phone_number?: string,
    message?: string
};

export const messageApiSlice = createApi({
    reducerPath: "MessageApiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: "/messages"
    }),
    endpoints: (builder) => ({
        storeMessage: builder.mutation<boolean, Message>({
            query: (message: Message) => ({
                url: "/",
                method: "POST",
                body: { ...message }
            })
        })
    })
});

export const { useStoreMessageMutation } = messageApiSlice;