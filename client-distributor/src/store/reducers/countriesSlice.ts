import { baseQueryWithReauth } from "@/helpers/BaseQueryWrapper";
import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type Country = {
    id?: number | undefined,
    name?: string | undefined
};

export const countriesApiSlice = createApi({
    reducerPath: "countriesApi",
    baseQuery: baseQueryWithReauth("/countries"),
    tagTypes: ['countries'],
    endpoints: (builder) => ({
        fetchCountries: builder.query<Country[], void>({
            query: () => "/",
            transformResponse: (response: { countries: Country[] }) => response.countries,
            providesTags: ['countries']
        })
    })
});

export const { useFetchCountriesQuery } = countriesApiSlice;