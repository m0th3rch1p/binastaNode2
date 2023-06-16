import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type Product = {
    category_name?: string,
    name?: string,
    slug?: string,
    description?: string,
    images?: {
        url?: string,
        ext?: string    
    }[]
};

export const productApiSlice = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/products"
    }),
    tagTypes: ['products'],
    endpoints: (builder) => ({
        fetchProducts: builder.query<Product[], {per_page: number, offset: number} | void>({
            query: ({per_page = 0, offset = 3}: {per_page: number, offset: number}) => `/?per_page=${per_page}&offset=${offset}`,
            providesTags: ['products'],
            transformResponse: (response: { products: Product[] }) => response.products
        })
    })
});

export const { useFetchProductsQuery  } = productApiSlice;