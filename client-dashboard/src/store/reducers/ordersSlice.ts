import { baseQueryWithReauth } from "@/helpers/BaseQueryWrapper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export interface OrderProductVariation {
    variation: string, 
    buy_price: number, 
    quantity?: number,
    images: { url: string }[],
    product_name: string, 
    product_image: string
};

export interface Order {
    ref?: string,
    user_id?: number,
    user_address_id?: number,
    email?: string,
    address?: string,
    phone_number?: string,
    status?: string,
    amount?: number,
    variations: OrderProductVariation[],
    created_at?: string  
};

export const ordersApiSlice = createApi({
    reducerPath: "OrderApiSlice",
    baseQuery: baseQueryWithReauth("/orders"),
    tagTypes: ['orders', 'order'],
    endpoints: (builder) => ({
        fetchUserOrders: builder.query<Order[], void>({
            query: () => "/",
            providesTags: ["orders"],
            transformResponse: (response: { orders: Order[] }) => response.orders
        }),
        fetchUserOrderById: builder.query<Order, number>({
            query: (id: number) => `/${id}`,
            providesTags: ["order"],
            transformResponse: (response: { order: Order, product_variations: OrderProductVariation[] }) => {
                response.order.variations = response.product_variations;
                return response.order;
            }
        })
    })
});

export const { useFetchUserOrdersQuery, useFetchUserOrderByIdQuery } = ordersApiSlice;