import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { createSlice } from "@reduxjs/toolkit";
import { ProductVariation } from "@/types/ProductVariation.type";
import { argv } from "process";

export type Product = {
    id?: number,
    category_name?: string,
    category_slug?: string,
    name?: string,
    slug?: string,
    description?: string,
    variations?: ProductVariation[],
    images?: {url: string, ext: string}[],
    related?: Product[]
}

const initialState = {
    products: [] as Product[],
};

export const productApiSlice = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `/products`
    }),
    tagTypes: ['products', 'product'],
    endpoints: (builder) => ({
        fetchProducts: builder.query<Product[], { per_page:number, offset: number, cat?: string | null } | void>({
            query: (args: { per_page: number, offset: number, cat?: string | null} = { per_page: 10, offset: 0, cat: '' }) => `/?per_page=${args.per_page}&offset=${args.offset}${args.cat ? `&cat=${args.cat}` : ''}`,
            transformResponse: (response: { products: Product[] }) => response.products,
            providesTags: ['products'],
        }),
        fetchSingleProduct: builder.query<Product, { slug: string }>({
            query: ({ slug }) => `/${slug}`,
            transformResponse: (response: { product: Product[] }) => response.product[0],
            providesTags: ['products']
        }),
        fetchProductsByCategory: builder.query<Product[], {per_page?: number, offset: number} | void>({
            query: ({per_page = 10, offset = 0}: { per_page?: number, offset: number}) => `/?per_page=${per_page}&offset=${offset}`,
            transformResponse: (response: { products: Product[] }) => response.products,
            providesTags: ['products']
        })
    })
});

export const { useFetchProductsQuery, useFetchSingleProductQuery, useFetchProductsByCategoryQuery } = productApiSlice;


export const productSlice = createSlice({
    name: 'addresses',
    initialState: initialState.products,
    reducers: {
        resetAddressSlice: (state) => {
            state = initialState.products
        },
    }
});

export const { resetAddressSlice } = productSlice.actions;

export default productSlice.reducer;