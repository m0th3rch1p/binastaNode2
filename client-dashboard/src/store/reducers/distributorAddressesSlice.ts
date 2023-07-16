import { baseQueryWithReauth } from "@/helpers/BaseQueryWrapper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type DistributorAddress = {
    address?: string,
    phone_number?: string
};

export const distributorAddressesApiSlice = createApi({
    baseQuery: baseQueryWithReauth("/distributor_addresses"),
    tagTypes: ['distributorAddresses'],
    endpoints: (builder) => ({
        fetchDistributorAddresses: builder.query<DistributorAddress[], void>({
            query: () => "/",
            providesTags: ['distributorAddresses'],
            transformResponse: (response: { distributor_addresses: DistributorAddress[] }) => response.distributor_addresses
        }),
        storeDistributorAddress: builder.mutation({
            query: () => "/",
            invalidatesTags: ['distributorAddresses']
        })
    })
});

const { useFetchDistributorAddressesQuery, useStoreDistributorAddressMutation } = distributorAddressesApiSlice;