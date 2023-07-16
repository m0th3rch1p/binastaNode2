import { baseQueryWithReauth } from "@/helpers/BaseQueryWrapper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type Distributor = {
    id?: number,
    first_name?: string,
    last_name?: string,
    email?: string,
    store_name?: string,
    phone_number?: string,
    gender?: "male" | "female",
    reward_points?: number,
    verified?: boolean,
    created_at?: string,
};

export const distributorsApiSlice = createApi({
    reducerPath: "DistributorApiSlice",
    baseQuery: baseQueryWithReauth("/users"),
    tagTypes: ["distributors"],
    endpoints: (builder) => ({
        fetchDistributors: builder.query<Distributor[], void>({
            query: () => "/",
            transformResponse: (response: { distributors: Distributor[] }) => response.distributors,
            providesTags: ['distributors']
        }),
        verifyDistributor: builder.mutation<{status: boolean}, {id: number}>({
            query: (params: {id: number}) => ({
                url: "/verify",
                method: "POST",
                body: { id: params.id }
            }),
            invalidatesTags: ['distributors']
        })
    })
});

export const { useFetchDistributorsQuery, useVerifyDistributorMutation  } = distributorsApiSlice;