import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type Blog = {
    blog_category_id?: number,
    blog_category_name?: string,
    title?: string,
    description?: string,
    post?: string,
    created_at?: string
};

export const blogsApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "/blogs"
    }),
    tagTypes: ['blogs'],
    endpoints: (builder) => ({
        fetchBlogs: builder.query<Blog[], null>({
            query: () => "/",
            transformResponse: (response: { blogs: Blog[] }) => response.blogs
        }),
        storeBlog: builder.mutation<null, FormData>({
            query: (blog: FormData) => ({
                url: "/",
                method: "POST",
                body: blog,
                headers: {
                    contentType: "multipart/form-data"
                }
            })
        })
    })
});

export const { useFetchBlogsQuery, useStoreBlogMutation } = blogsApiSlice;