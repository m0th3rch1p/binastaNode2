"use strict";
exports.__esModule = true;
exports.useFetchCountriesQuery = exports.countriesApiSlice = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.countriesApiSlice = react_1.createApi({
    reducerPath: "countriesApi",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "/countries"
    }),
    tagTypes: ['countries'],
    endpoints: function (builder) { return ({
        fetchCountries: builder.query({
            query: function () { return "/"; },
            transformResponse: function (response) { return response.countries; },
            providesTags: ['countries']
        })
    }); }
});
exports.useFetchCountriesQuery = exports.countriesApiSlice.useFetchCountriesQuery;
