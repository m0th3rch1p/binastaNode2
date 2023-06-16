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
        fetchSingleOrder: builder.query<{ order: Order, product_variations: {id: number, variation: string, buy_price: number, product_name: string, quantity: {quantity:string}[]}[]}, number>({
            query: (id) => `/${id}`,
            transformResponse: (response: { order: Order, product_variations: {id: number, variation: string, buy_price: number, product_name: string, quantity: {quantity:string}[]}[] }) => {
                return {order: response.order, product_variations: response.product_variations};
            },
            providesTags: ["orders"]
        }),
        placeOrder: builder.mutation<{ status: number, id: number }, { user_address_id: number, product_variations: [number, number][] }>({
            query: (order) => ({
                url: "/",
                method: "POST",
                body: { user_address_id: order.user_address_id, product_variations: order.product_variations }
            }),
            transformResponse: (response: { status: number, id: number }) => {
                return response
            },
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