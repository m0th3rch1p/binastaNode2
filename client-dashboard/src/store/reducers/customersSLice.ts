import { baseQueryWithReauth } from "@/helpers/BaseQueryWrapper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type Customer = {
    id?: number,
    email?: string,
    created_at?: string,
};

export const customersApiSlice = createApi({
    reducerPath: "CustomerApiSlice",
    baseQuery: baseQueryWithReauth("/users"),
    tagTypes: ['customers'],
    endpoints: (builder) => ({
        // storeCountry: builder.mutation<{status: number}, {country: Country}>({
        //     query: ({country}: {country: Country}) => ({
        //         url: "/",
        //         method: "POST",
        //         body: { name: country.name, country_code: country.country_code }
        //     }),
        //     invalidatesTags: ['countries']
        // }),
        fetchCustomers: builder.query<Customer[], void>({
            query: () => "/",
            transformResponse: (response: { users: Customer[] }) => response.users,
            providesTags: ['customers']
        })
    })
});

export const { useFetchCustomersQuery } = customersApiSlice;