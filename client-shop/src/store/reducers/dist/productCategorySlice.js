"use strict";
exports.__esModule = true;
exports.resetProductCategorySlice = exports.productCategorySlice = exports.useFetchProductCategoriesQuery = exports.productCategoryApiSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var react_1 = require("@reduxjs/toolkit/dist/query/react");
var initialState = [];
exports.productCategoryApiSlice = react_1.createApi({
    reducerPath: 'productCategoryApi',
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "/product_categories"
    }),
    tagTypes: ['productCategories'],
    endpoints: function (builder) { return ({
        fetchProductCategories: builder.query({
            query: function () { return "/"; },
            transformResponse: function (response) {
                return response.categories;
            },
            providesTags: ["productCategories"]
        })
    }); }
});
exports.useFetchProductCategoriesQuery = exports.productCategoryApiSlice.useFetchProductCategoriesQuery;
exports.productCategorySlice = toolkit_1.createSlice({
    name: 'product_categories',
    initialState: initialState,
    reducers: {
        resetProductCategorySlice: function (state) {
            state = initialState;
        }
    }
});
exports.resetProductCategorySlice = exports.productCategorySlice.actions.resetProductCategorySlice;
exports["default"] = exports.productCategorySlice.reducer;
