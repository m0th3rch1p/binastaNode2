"use strict";
exports.__esModule = true;
exports.useFetchProductsQuery = exports.productApiSlice = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.productApiSlice = react_1.createApi({
    reducerPath: "productApi",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "/products"
    }),
    tagTypes: ['products'],
    endpoints: function (builder) { return ({
        fetchProducts: builder.query({
            query: function (_a) {
                var _b = _a.per_page, per_page = _b === void 0 ? 0 : _b, _c = _a.offset, offset = _c === void 0 ? 3 : _c;
                return "/?per_page=" + per_page + "&offset=" + offset;
            },
            providesTags: ['products'],
            transformResponse: function (response) { return response.products; }
        })
    }); }
});
exports.useFetchProductsQuery = exports.productApiSlice.useFetchProductsQuery;
