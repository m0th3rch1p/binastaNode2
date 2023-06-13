import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "@/constants/apiStatus";
import { ProductVariation } from "@/types/ProductVariation.type";

export type Product = {
    id?: number,
    category_name?: string,
    category_slug?: string,
    name?: string,
    slug?: string,
    description?: string,
    variations?: ProductVariation[],
    images?: {url: string}[]
}

const initialState = {
    products: [] as Product[],
};

export const productApiSlice = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/products`
    }),
    tagTypes: ['products', 'product'],
    endpoints: (builder) => ({
        fetchProducts: builder.query<Product[], void>({
            query: () => "/",
            transformResponse: (response: { products: Product[] }) => response.products,
            providesTags: ['products'],
        }),
        fetchSingleProduct: builder.query<Product, { slug: string }>({
            query: (slug) => `/${slug}`,
            transformResponse: (response: { product: Product }) => response.product,
            providesTags: ['product']
        })
    })
});

export const { useFetchProductsQuery, useFetchSingleProductQuery } = productApiSlice;


export const productSlice = createSlice({
    name: 'addresses',
    initialState: initialState.products,
    reducers: {
        resetAddressSlice: () => initialState.products
    }
});

export const { resetAddressSlice } = productSlice.actions;

export default productSlice.reducer;