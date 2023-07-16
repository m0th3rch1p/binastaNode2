import { baseQueryWithReauth } from "@/helpers/BaseQueryWrapper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type ProductCategory = {
    id?: number,
    name?: string,
    slug?: string,
    ext?: string,
    image_path?: string,
    img?: File,
    products_count?: number,
};

export const productCategoryApiSlice = createApi({
    reducerPath: "productCategoryApi",
    baseQuery: baseQueryWithReauth("/product_categories"),
    tagTypes: ['productCategories'],
    endpoints: (builder) => ({
        fetchProductCategories: builder.query<ProductCategory[] , void>({
            query: () => "/",
            transformResponse: (response: { categories: ProductCategory[] }) => {
                return response.categories
            },
            providesTags: ['productCategories']
        }),
        storeProductCategory: builder.mutation<{ status: boolean }, FormData>({
            query: (category: FormData) => ({
                url: "/",
                method: "POST",
                body: category,
                headers: {
                    contentType: "multipart/form-data"
                }
            }),
            invalidatesTags: ['productCategories']
        })
    })
});

export const { useFetchProductCategoriesQuery, useStoreProductCategoryMutation } = productCategoryApiSlice;