"use strict";
exports.__esModule = true;
exports.useVerifyDistributorMutation = exports.useFetchDistributorsQuery = exports.distributorsApiSlice = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.distributorsApiSlice = react_1.createApi({
    reducerPath: "DistributorApiSlice",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "/distributors"
    }),
    tagTypes: ["distributors"],
    endpoints: function (builder) { return ({
        fetchDistributors: builder.query({
            query: function () { return "/"; },
            transformResponse: function (response) { return response.distributors; },
            providesTags: ['distributors']
        }),
        verifyDistributor: builder.mutation({
            query: function (params) { return ({
                url: "/verify",
                method: "POST",
                body: { id: params.id }
            }); },
            invalidatesTags: ['distributors']
        })
    }); }
});
exports.useFetchDistributorsQuery = exports.distributorsApiSlice.useFetchDistributorsQuery, exports.useVerifyDistributorMutation = exports.distributorsApiSlice.useVerifyDistributorMutation;
