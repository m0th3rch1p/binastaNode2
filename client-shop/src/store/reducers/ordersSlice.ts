import { BASE_URL } from "@/constants/apiStatus";
import { ProductVariation } from "@/types/ProductVariation.type";
import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type Order = {
    id?: number,
    ref?: string,
    amount?: number,
    variations?: ProductVariation[],
    created_at?: string
};

const initialState: Order = {
    id: 0,
    ref: '',
    variations: [] as ProductVariation[]
};

export const orderApiSlice = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/orders`
    }),
    tagTypes: ["orders"],
    endpoints: (builder) => ({
        fetchOrders: builder.query<Order[], void>({
            query: () => "/",
            transformResponse: (response: { orders: Order[] }) => {
                return response.orders
            },
            providesTags: ["orders"]
        }),
        fetchSingleOrder: builder.query<Order, number>({
            query: (id) => `${BASE_URL}/orders/${id}`,
            transformResponse: (response: { order: Order }) => {
                return response.order;
            },
            providesTags: ["orders"]
        }),
        placeOrder: builder.mutation<Order["id"], Order["id"]>({
            query: (order) => ({
                url: "/",
                method: "POST",
                body: order
            })
        })   
    })
});

export const { useFetchOrdersQuery, useFetchSingleOrderQuery, usePlaceOrderMutation } = orderApiSlice;

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        resetOrderSlice: () => initialState
    }
});

export const { resetOrderSlice } = orderSlice.actions;

export default orderSlice.reducer;