import { baseQueryWithReauth } from "@/helpers/BaseQueryWrapper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type ProductVariation = {
    variation?: string,
    buy_price?: number,
    sale_price?: number,
    stock?: number,
    wholesale_price?: number,
    wholesale_min?: number,
    created_at?: string
};

export type Product = {
    category_id?: number,
    category_name?: string,
    name?: string,
    slug?: string,
    description?: string,
    images?: { url: string }[],
    variations?: ProductVariation[]
};

export const productApiSlice = createApi({
    reducerPath: "productApi",
    baseQuery: baseQueryWithReauth("/products"),
    tagTypes: ['products', 'product'],
    endpoints: (builder) => ({
        fetchProducts: builder.query<Product[], void>({
            query: () => "/?per_page=10&offset=0",
            providesTags: ['products'],
            transformResponse: (response: { products: Product[] }) => response.products
        }),
        fetchProductById: builder.query<Product, number>({
            query: (id: number) => `/${id}`,
            providesTags: ['product'],
            transformResponse: (response: { product: Product }) => response.product
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
        }),
        storeProductVariation: builder.mutation<null, ProductVariation>({
            query: (productVariation: ProductVariation) => ({
                url: "/product_variations",
                method: "POST",
                body: productVariation
            }),
            invalidatesTags: ['product']
        })
    })
});

export const { useFetchProductsQuery, useStoreProductMutation, useFetchProductByIdQuery, useStoreProductVariationMutation  } = productApiSlice;