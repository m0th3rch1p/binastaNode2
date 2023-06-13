import { BASE_URL } from "@/constants/apiStatus";
import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type ProductCategory = {
    id?: number,
    name?: string,
    slug?: string,
};

const initialState: ProductCategory[] = [] as ProductCategory[];

export const productCategoryApiSlice = createApi({
    reducerPath: 'productCategoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/product_categories`
    }),
    tagTypes: ['productCategories'],
    endpoints: (builder) => ({
        fetchProductCategories: builder.query<ProductCategory[], void>({
            query: () => "/",
            transformResponse: (response: { productCategories: ProductCategory[] }) => {
                return response.productCategories
            },
            providesTags: ["productCategories"]
        })
    })
});

export const { useFetchProductCategoriesQuery } = productCategoryApiSlice;

export const productCategorySlice = createSlice({
    name: 'product_categories',
    initialState,
    reducers: {
        resetProductCategorySlice: () => initialState
    }
});

export const { resetProductCategorySlice } = productCategorySlice.actions;

export default productCategorySlice.reducer;