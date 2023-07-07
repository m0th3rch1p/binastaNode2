"use strict";
exports.__esModule = true;
exports.useStoreProductMutation = exports.useFetchProductsQuery = exports.productApiSlice = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.productApiSlice = react_1.createApi({
    reducerPath: "productApi",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "/products"
    }),
    tagTypes: ['products'],
    endpoints: function (builder) { return ({
        fetchProducts: builder.query({
            query: function () { return "/?per_page=10&offset=0"; },
            providesTags: ['products'],
            transformResponse: function (response) { return response.products; }
        }),
        storeProduct: builder.mutation({
            query: function (product) { return ({
                url: "/",
                method: "POST",
                body: product,
                headers: {
                    contentType: "multipart/form-data"
                }
            }); },
            invalidatesTags: ['products']
        })
    }); }
});
exports.useFetchProductsQuery = exports.productApiSlice.useFetchProductsQuery, exports.useStoreProductMutation = exports.productApiSlice.useStoreProductMutation;
