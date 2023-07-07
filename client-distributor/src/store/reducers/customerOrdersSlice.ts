import { Product } from "./productsSlice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type CustomerOrder = {
    id?: number,
    ref?: string,
    status?: "pending" | "delivered",
    amount?: number,
    email?: string,
    phone_number?: string,
    address?: string,
    created_at?: string,  
    variations?: Product["variations"],
};


export const customerOrdersApiSlice = createApi({
    reducerPath: "CustomerOrdersApiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: "/customer_orders"
    }),
    tagTypes: ['customer-orders', 'customer-order-ref'],
    endpoints: (builder) => ({
        fetchCustomerOrders: builder.query<CustomerOrder[], void>({
            query: () => "/",
            providesTags: [ 'customer-orders' ],
            transformResponse: (response: { orders: CustomerOrder[] }) => response.orders
        }),
        fetchSingleCustomerOrder: builder.query<CustomerOrder, { ref: string }>({
            query: (params: { ref: string }) => `/${params.ref}`,
            providesTags: ['customer-order-ref'],
            transformResponse: (response: { order: CustomerOrder, product_variations: Product["variations"] }) => {
                response.order.variations = response.product_variations
                return response.order;
            } 
        }),
        markCustomerOrder: builder.mutation<boolean, number>({
            query: (order_id: number) => ({ 
                url: "/mark-delivered",
                method: "POST",
                body: { order_id }
            }),
            invalidatesTags: ['customer-orders', 'customer-order-ref'],
            transformResponse: (response: { status: boolean }) => response.status
        })
    })
});

export const { useFetchCustomerOrdersQuery, useFetchSingleCustomerOrderQuery, useMarkCustomerOrderMutation} = customerOrdersApiSlice;