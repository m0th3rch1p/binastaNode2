import { baseQueryWithReauth } from "@/helpers/BaseQueryWrapper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type Address = {
   address?: string,
   phone_number?: string,
   user_email?: string 
}; 

export const addressApiSlice = createApi({
    reducerPath: "addressApi",
    baseQuery: baseQueryWithReauth("/addresses"),
    tagTypes: ["addresses"],
    endpoints: (builder) => ({
        fetchAddresses: builder.query<Address[], void>({
            query: () => "/",
            transformResponse: (response: { addresses: Address[] }) => {
                return response.addresses;
            },
            providesTags: ["addresses"]
        }),
    })
});

export const { useFetchAddressesQuery } = addressApiSlice;