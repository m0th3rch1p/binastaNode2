import { ProductVariation } from "@/types/ProductVariation.type";
import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type Order = {
    id?: number,
    ref?: string,
    status?: string,
    amount?: number,
    distributor_address_id?: number,
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
        baseUrl: `/orders`
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
            query: (id) => `/${id}`,
            transformResponse: (response: { order: Order}) => {
                return response.order
            },
            providesTags: ["orders"]
        }),
        placeOrder: builder.mutation<{ status: number, id: number }, { distributor_address_id: number, product_variations: [number, number][] }>({
            query: (order) => ({
                url: "/",
                method: "POST",
                body: { distributor_address_id: order.distributor_address_id, product_variations: order.product_variations }
            }),
            transformResponse: (response: { status: number, id: number }) => {
                return response
            },
            invalidatesTags: ["orders"]
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