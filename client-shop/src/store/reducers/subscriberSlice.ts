import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export interface Subscriber {
    email: "string"
}

export const subscriberApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "/subscribe"
    }),
    endpoints: (builder) => ({
        storeSubscriber: builder.mutation<boolean, Subscriber>({
            query: (subscriber: Subscriber) => ({
                url: "/",
                method: "POST",
                body: subscriber
            })
        })
    })
});

export const { useStoreSubscriberMutation } = subscriberApiSlice;