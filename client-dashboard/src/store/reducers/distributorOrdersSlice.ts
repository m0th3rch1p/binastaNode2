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

export interface DistributorOrder {
    ref?: string,
    distributor_id?: number,
    distributor_address_id?: number,
    first_name?: string,
    last_name?: string,
    phone_number?: string,
    address?: string,
    email?: string,
    status?: "pending" | "delivered",
    amount?: number,
    variations?: OrderProductVariation[],
    created_at?: string
}


export const distributorOrdersApiSlice = createApi({
    reducerPath: "DistributorOrderApiSlice",
    baseQuery: baseQueryWithReauth("/distributor_orders"),
    tagTypes: ['distributor-orders', 'distributor-order'],
    endpoints: (builder) => ({
        fetchDistributorOrders: builder.query<DistributorOrder[], void>({
            query: () => "/",
            providesTags: ['distributor-orders'],
            transformResponse: (response: { orders: DistributorOrder[] }) => response.orders
        }),
        fetchDistributorOrderById: builder.query<DistributorOrder, number>({
            query: (id: number) => `/${id}`,
            providesTags: ['distributor-order'],
            transformResponse: (response: { order: DistributorOrder }) => response.order
        })
    })
});

export const { useFetchDistributorOrdersQuery, useFetchDistributorOrderByIdQuery } = distributorOrdersApiSlice;