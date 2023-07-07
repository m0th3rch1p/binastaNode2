"use strict";
exports.__esModule = true;
exports.resetOrderSlice = exports.orderSlice = exports.usePlaceOrderMutation = exports.useFetchSingleOrderQuery = exports.useFetchOrdersQuery = exports.orderApiSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var react_1 = require("@reduxjs/toolkit/dist/query/react");
var initialState = {
    id: 0,
    ref: '',
    variations: []
};
exports.orderApiSlice = react_1.createApi({
    reducerPath: 'orderApi',
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "/orders"
    }),
    tagTypes: ["orders"],
    endpoints: function (builder) { return ({
        fetchOrders: builder.query({
            query: function () { return "/"; },
            transformResponse: function (response) {
                return response.orders;
            },
            providesTags: ["orders"]
        }),
        fetchSingleOrder: builder.query({
            query: function (id) { return "/" + id; },
            transformResponse: function (response) {
                return response.order;
            },
            providesTags: ["orders"]
        }),
        placeOrder: builder.mutation({
            query: function (order) { return ({
                url: "/",
                method: "POST",
                body: { distributor_address_id: order.distributor_address_id, product_variations: order.product_variations }
            }); },
            transformResponse: function (response) {
                return response;
            },
            invalidatesTags: ["orders"]
        })
    }); }
});
exports.useFetchOrdersQuery = exports.orderApiSlice.useFetchOrdersQuery, exports.useFetchSingleOrderQuery = exports.orderApiSlice.useFetchSingleOrderQuery, exports.usePlaceOrderMutation = exports.orderApiSlice.usePlaceOrderMutation;
exports.orderSlice = toolkit_1.createSlice({
    name: 'orders',
    initialState: initialState,
    reducers: {
        resetOrderSlice: function () { return initialState; }
    }
});
exports.resetOrderSlice = exports.orderSlice.actions.resetOrderSlice;
exports["default"] = exports.orderSlice.reducer;
