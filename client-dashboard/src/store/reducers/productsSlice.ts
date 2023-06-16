import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type Product = {
    category_id?: number,
    category_name?: string,
    product_name?: string,
    product_slug?: string,
};

export const productApiSlice = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/products"
    }),
    tagTypes: ['products'],
    endpoints: (builder) => ({
        fetchProducts: builder.query<Product[], void>({
            query: () => "/",
            providesTags: ['products'],
            transformResponse: (response: { products: Product[] }) => response.products
        }),
        storeProduct: builder.mutation<null, FormData>({
            query: (product: FormData) => ({
                url: "/",
                method: "POST",
                body: product,
                headers: {
                    contentType: "multipart/form-data"
                }
            }),
            invalidatesTags: ['products']
        })
    })
});

export const { useFetchProductsQuery, useStoreProductMutation  } = productApiSlice;