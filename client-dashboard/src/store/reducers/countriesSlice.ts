import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type Country = {
    name?: string,
    slug?: string
};

export const countriesApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "/countries"
    }),
    tagTypes: ['countries'],
    endpoints: (builder) => ({
        storeCountry: builder.mutation({
            query: () => "/"
        }),
        fetchCountries: builder.query<Country[], void>({
            query: () => "/",
            transformResponse: (response: { countries: Country[] }) => response.countries
        })
    })
});

export const { useFetchCountriesQuery, useStoreCountryMutation } = countriesApiSlice;