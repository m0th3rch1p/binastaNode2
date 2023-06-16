import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type ProductCategory = {
    id?: number,
    name?: string,
    slug?: string,
    image_path?: string,
};

const initialState: ProductCategory[] = [] as ProductCategory[];

export const productCategoryApiSlice = createApi({
    reducerPath: 'productCategoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `/product_categories`
    }),
    tagTypes: ['productCategories'],
    endpoints: (builder) => ({
        fetchProductCategories: builder.query<ProductCategory[], void>({
            query: () => "/",
            transformResponse: (response: { categories: ProductCategory[] }) => {
                return response.categories;
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
        resetProductCategorySlice: (state) => {
            state = initialState;
        }
    }
});

export const { resetProductCategorySlice } = productCategorySlice.actions;

export default productCategorySlice.reducer;