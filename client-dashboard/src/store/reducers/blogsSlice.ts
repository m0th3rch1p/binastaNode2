import { baseQueryWithReauth } from "@/helpers/BaseQueryWrapper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type Blog = {
    blog_category_id?: number,
    category_name?: string,
    title?: string,
    description?: string,
    post?: string,
    views?: number,
    image_path?: string,
    created_at?: string
};

export const blogsApiSlice = createApi({
    baseQuery: baseQueryWithReauth("/blogs"),
    tagTypes: ['blogs'],
    endpoints: (builder) => ({
        fetchBlogs: builder.query<Blog[], void>({
            query: () => "/",
            transformResponse: (response: { blogs: Blog[] }) => response.blogs,
            providesTags: ['blogs']
        }),
        storeBlog: builder.mutation<null, FormData>({
            query: (blog: FormData) => ({
                url: "/",
                method: "POST",
                body: blog,
                headers: {
                    contentType: "multipart/form-data"
                }
            }),
            invalidatesTags: ['blogs']
        })
    })
});

export const { useFetchBlogsQuery, useStoreBlogMutation } = blogsApiSlice;