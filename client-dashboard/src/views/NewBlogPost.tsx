
import React, { useEffect, useState } from 'react'

import { BlogCategory, useFetchBlogCategoriesQuery } from '@/store/reducers/blogCategoriesSlice'
import { useStoreBlogMutation } from '@/store/reducers/blogsSlice';
import BlogForm from '@/components/blog/BlogForm';

function Blog() {
    const [ storeBlog, { isLoading, isSuccess } ] = useStoreBlogMutation();
    const { data: categories } = useFetchBlogCategoriesQuery(); 
    const [ blogForm, setBlogForm ] = useState<{blog_category_id: number, title: string, description: string, post: string, file: Blob | null}>({
        blog_category_id: 0,
        title: "",
        description: "",
        post: "",
        file: null
    });

    useEffect(() => {
        if (isSuccess) {
            setBlogForm({
                blog_category_id: 0,
                title: "",
                description: "",
                post: "",
                file: null
            });
        }
    }, [ isSuccess ]);

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setBlogForm((state) => ({
            ...state,
            [e.target.name]: e.target.value 
        }));
    };

    const onHandleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            setBlogForm((state) => ({ ...state, file: e.target.files?.[0] as Blob }))
        }
    };

    const onStoreBlog = (e: React.MouseEvent<HTMLButtonElement | HTMLInputElement>) => {
        if (!blogForm.blog_category_id || !blogForm.title || !blogForm.description || !blogForm.post || !blogForm.file) return;

        const form = new FormData();
        form.append("title", blogForm.title);
        form.append("blog_category_id", `${blogForm.blog_category_id}`);
        form.append("description", blogForm.description);
        form.append("post", blogForm.post);
        form.append("img", blogForm.file as Blob);
        storeBlog(form);
    };

    return (
        <BlogForm categories={categories as BlogCategory[]} isLoading={isLoading} blogForm={blogForm} onHandleChange={onHandleChange} onHandleFileChange={onHandleFileChange} onStoreBlog={onStoreBlog} />    
    )
}

export default Blog