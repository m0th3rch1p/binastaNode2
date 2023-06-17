import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export type Blog = {
    blog_category_id?: number,
    blog_category_name?: string,
    title?: string,
    slug?: string,
    description?: string,
    post?: string,
    image_path?: string,
    ext?: string,
    created_at?: string,
};

export const blogsApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "/blogs"
    }),
    tagTypes: ['blogs'],
    endpoints: (builder) => ({
        fetchBlogs: builder.query<Blog[], void>({
            query: () => "/",
            transformResponse: (response: { blogs: Blog[] }) => response.blogs
        }),
        fetchBlogBySlug: builder.query<Blog, string>({ 
            query: (slug: string) => `/${slug}`,
            transformResponse: (response: { blog: Blog[] }) => response.blog[0]
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

export const { useFetchBlogsQuery, useFetchBlogBySlugQuery, useStoreBlogMutation } = blogsApiSlice;