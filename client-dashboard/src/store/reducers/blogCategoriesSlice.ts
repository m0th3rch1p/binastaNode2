import { baseQueryWithReauth } from "@/helpers/BaseQueryWrapper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type BlogCategory = {
    id?: number,
    name?: string,
    slug?: string,
    blogs_count?: number,
    created_at?: string
};

export const blogCategoriesApiSlice = createApi({
    reducerPath: "blogCategoriesApi",
    baseQuery: baseQueryWithReauth("/blog_categories"),
    tagTypes: ['blog-categories'],
    endpoints: (builder) => ({
        fetchBlogCategories: builder.query<BlogCategory[], void>({
            query: () => "/",
            transformResponse: (response: { categories: BlogCategory[] }) => response.categories,
            providesTags: ['blog-categories']
        }),
        storeBlogCategory: builder.mutation<null, BlogCategory>({
            query: (body: BlogCategory) => ({
                url: "/",
                method: "POST",
                body
            }),
            invalidatesTags: ['blog-categories']
        })
    })
});

export const { useFetchBlogCategoriesQuery, useStoreBlogCategoryMutation } = blogCategoriesApiSlice;