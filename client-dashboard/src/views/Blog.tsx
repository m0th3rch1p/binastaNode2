
import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useFetchBlogCategoriesQuery } from '@/store/reducers/blogCategoriesSlice'
import { useStoreBlogMutation } from '@/store/reducers/blogsSlice';

function Blog() {
    const [ storeBlog, { isLoading, isSuccess } ] = useStoreBlogMutation();
    const { data: categories } = useFetchBlogCategoriesQuery(); 
    console.log(categories);
    const [ blogForm, setBlogForm ] = useState<{blog_category_id: number, title: string, description: string, post: string, file: Blob | null}>({
        blog_category_id: 0,
        title: "",
        description: "",
        post: "",
        file: null
    });

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

    const onStoreBlog = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    <form>
        <div className="row">
            <div className="col">
                <div className="form-group">
                    <label>Blog Title</label>
                    <input type="text" name="title" value={blogForm.title} onChange={onHandleChange} className="form-control" required={true} />
                </div>
                <div className="form-group">
                    <label>Blog Category</label>
                    <select className="form-control" value={blogForm.blog_category_id as number} onChange={onHandleChange} name="blog_category_id" required>
                      <option value="" selected>Select Product Category</option>
                      {
                        categories?.map(category => (
                          <option value={category.id}>{ category.name }</option>
                        ))
                      }
                    </select>
                </div>
                <div className="form-group">
                    <label>Blog Description</label>
                    <input type="text" name="description" value={blogForm.description} onChange={onHandleChange} className="form-control" required={true} />
                </div>
                <div className="form-group">
                    <label>Blog Post</label>
                    <CKEditor editor={ ClassicEditor } onChange={(event, editor) => {
                        blogForm.post = editor.getData();
                    }} />
                    <input type="text" name="post" value={blogForm.post} onChange={onHandleChange} className="form-control" required={true} />
                </div>
                <div className="form-group">
                    <label>Blog Images</label>
                    <input type="file" onChange={onHandleFileChange} className="form-control" multiple required  />
                </div>
            </div>
        </div>
        <div className="form-group mt-4">
            <button id="submitBtn" onClick={onStoreBlog} className="btn btn-primary" disabled={isLoading}>
                { isLoading ? 'Saving...' : 'Save' } 
            </button>
        </div>
    </form>    
  )
}

export default Blog