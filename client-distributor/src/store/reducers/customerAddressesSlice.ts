import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type CustomerAddress = {
    email?: string,
    address?: string,
    phone_number?: string
};

export const customerAddressesApiSlice = createApi({
    reducerPath: "CustomerAddressesApiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: "/customer_addresses"
    }),
    tagTypes: ['customer-addresses'],
    endpoints: (builder) => ({
        fetchCustomerAddresses: builder.query<CustomerAddress[], void>({
            query: () => "/",
            providesTags: [ 'customer-addresses' ],
            transformResponse: (response: { addresses: CustomerAddress[] }) => response.addresses
        })
    })
});

export const { useFetchCustomerAddressesQuery } = customerAddressesApiSlice