import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type ShopProductVariation = {
    variation?: string,
    buying_price?: number,
    selling_price?: number,
    recomended_price?: number,
    stock?: number,
    sold?: number,
};

export type ShopProductImage = {
    url?: string
};

export type ShopProduct = {
    variation?: string,
    name?: string,
    description?: string,
    category_name?: string,
    product_name?: string,
    product_slug?: string,
    product_image?: string,
    selling_price?: number,
    variations?: ShopProductVariation[], 
    images?: ShopProductImage[],
    recomended_price?: number,
};

export const shopProductApiSlice = createApi({
    reducerPath: "ShopProductApiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: "/shop_products"
    }),
    tagTypes: ['shop_products', 'shop_product'],
    endpoints: (builder) => ({
        fetchShopProducts: builder.query<ShopProduct[], void>({
            query: () => "/",
            providesTags: ['shop_products'],
            transformResponse: (response: { products: ShopProduct[] }) => response.products 
        }),
        fetchShopProductBySlug: builder.query<ShopProduct, { slug: string }>({
            query: ({slug} : {slug: string}) => `/${slug}`,
            providesTags: ['shop_product'],
            transformResponse: (response: { product: ShopProduct }) => response.product
        }) 
    })
});

export const { useFetchShopProductsQuery, useFetchShopProductBySlugQuery } = shopProductApiSlice;