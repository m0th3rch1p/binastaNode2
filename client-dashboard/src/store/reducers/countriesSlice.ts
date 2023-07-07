import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type Country = {
    name?: string,
    slug?: string,
    country_code?: string,
    created_at?: string,
};

export const countriesApiSlice = createApi({
    reducerPath: "CountryApiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: "/countries"
    }),
    tagTypes: ['countries'],
    endpoints: (builder) => ({
        storeCountry: builder.mutation<{status: number}, {country: Country}>({
            query: ({country}: {country: Country}) => ({
                url: "/",
                method: "POST",
                body: { name: country.name, country_code: country.country_code }
            }),
            invalidatesTags: ['countries']
        }),
        fetchCountries: builder.query<Country[], void>({
            query: () => "/",
            transformResponse: (response: { countries: Country[] }) => response.countries,
            providesTags: ['countries']
        })
    })
});

export const { useFetchCountriesQuery, useStoreCountryMutation } = countriesApiSlice;