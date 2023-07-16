import { baseQueryWithReauth } from "@/helpers/BaseQueryWrapper";
import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export type Address = {
    id?: number | null,
    user_id?: number | null,
    address?: string | null,
    phone_number?: string | null,
}

const initialState: Address = {
    id: 0,
    address: '',
    phone_number: ''
};

export const addressApiSlice = createApi({
    reducerPath: 'addressApi',
    baseQuery: baseQueryWithReauth(`/addresses`),
    tagTypes: ["addresses"],
    endpoints: (builder) => ({
        fetchAddresses: builder.query<Address[], void>({
            query: () => "/",
            transformResponse: (response: { addresses: Address[] }) => {
                return response.addresses;
            },
            providesTags: ["addresses"]
        }),
        storeAddress: builder.mutation<{ id: Address["id"] | undefined }, Address>({
            query: (address) => ({
                url: "/",
                method: "POST",
                body: { address: address.address, phone_number: address.phone_number }
            }),
            transformResponse: (response: { id: number | undefined  }) => {
                return response;
            },
            invalidatesTags: ["addresses"]
        })
    })
});

export const { useStoreAddressMutation, useFetchAddressesQuery } = addressApiSlice;

export const addressSlice = createSlice({
    name: 'addresses',
    initialState: initialState.address,
    reducers: {
        resetAddressSlice: (state) => {
            state = initialState.address;
        }
    }
});

export const { resetAddressSlice } = addressSlice.actions;

export default addressSlice.reducer;
