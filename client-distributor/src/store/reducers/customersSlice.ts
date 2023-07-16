import { baseQueryWithReauth } from "@/helpers/BaseQueryWrapper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type Customer = {
    email?: string,
    created_at?: string,
};

export type CustomerStats = {
    registered_at: number,
    total_users: number
};

export const customersApiSlice = createApi({
    reducerPath: "CustomersApiSlice",
    baseQuery: baseQueryWithReauth("/customers"),
    tagTypes: ["customers"],
    endpoints: (builder) => ({
        fetchCustomers: builder.query<{ customers: Customer[], stats: CustomerStats[]}, void>({
            query: () => "/",
            providesTags: ["customers"],
            transformResponse: (response: { users: Customer[], stats: CustomerStats[] }) => ({ customers: response.users, stats: response.stats })
        })
    })
});

export const { useFetchCustomersQuery } = customersApiSlice;