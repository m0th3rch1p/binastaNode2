"use strict";
exports.__esModule = true;
exports.resetAddressSlice = exports.productSlice = exports.useFetchSingleProductQuery = exports.useFetchProductsQuery = exports.productApiSlice = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    products: []
};
exports.productApiSlice = react_1.createApi({
    reducerPath: "productApi",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "/products"
    }),
    tagTypes: ['products', 'product'],
    endpoints: function (builder) { return ({
        fetchProducts: builder.query({
            query: function (_a) {
                var _b = _a.per_page, per_page = _b === void 0 ? 10 : _b, _c = _a.offset, offset = _c === void 0 ? 0 : _c;
                return "/?per_page=" + per_page + "&offset=" + offset;
            },
            transformResponse: function (response) { return response.products; },
            providesTags: ['products']
        }),
        fetchSingleProduct: builder.query({
            query: function (_a) {
                var slug = _a.slug;
                return "/" + slug;
            },
            transformResponse: function (response) { return response.product[0]; },
            providesTags: ['products']
        })
    }); }
});
exports.useFetchProductsQuery = exports.productApiSlice.useFetchProductsQuery, exports.useFetchSingleProductQuery = exports.productApiSlice.useFetchSingleProductQuery;
exports.productSlice = toolkit_1.createSlice({
    name: 'addresses',
    initialState: initialState.products,
    reducers: {
        resetAddressSlice: function (state) {
            state = initialState.products;
        }
    }
});
exports.resetAddressSlice = exports.productSlice.actions.resetAddressSlice;
exports["default"] = exports.productSlice.reducer;
