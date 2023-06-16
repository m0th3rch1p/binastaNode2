"use strict";
exports.__esModule = true;
exports.useStoreBlogMutation = exports.useFetchBlogBySlugQuery = exports.useFetchBlogsQuery = exports.blogsApiSlice = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.blogsApiSlice = react_1.createApi({
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "/blogs"
    }),
    tagTypes: ['blogs'],
    endpoints: function (builder) { return ({
        fetchBlogs: builder.query({
            query: function () { return "/"; },
            transformResponse: function (response) { return response.blogs; }
        }),
        fetchBlogBySlug: builder.query({
            query: function (slug) { return "/" + slug; },
            transformResponse: function (response) { return response.blog; }
        }),
        storeBlog: builder.mutation({
            query: function (blog) { return ({
                url: "/",
                method: "POST",
                body: blog,
                headers: {
                    contentType: "multipart/form-data"
                }
            }); }
        })
    }); }
});
exports.useFetchBlogsQuery = exports.blogsApiSlice.useFetchBlogsQuery, exports.useFetchBlogBySlugQuery = exports.blogsApiSlice.useFetchBlogBySlugQuery, exports.useStoreBlogMutation = exports.blogsApiSlice.useStoreBlogMutation;
