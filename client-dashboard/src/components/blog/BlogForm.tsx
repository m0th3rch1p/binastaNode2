import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

function BlogForm({ categories, isLoading, blogForm, onHandleFileChange, onHandleChange, onStoreBlog } 
    : {
        categories: any[],
        isLoading: boolean,
        blogForm: {blog_category_id: number, title: string, description: string, post: string, file: Blob | null},        
        onHandleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => any,
        onHandleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => any,
        onStoreBlog: (e: React.MouseEvent<HTMLButtonElement | HTMLInputElement>) => any
    }) {
  return (
    <div className="row">
        <div className="card">
            <div className="card-header">
                <h4>New Blog Post</h4>
            </div>
            <div className="card-body">
            <form>
        <div className="row">
            <div className="col">
                <div className="form-group mb-3">
                    <label>Blog Title</label>
                    <input type="text" name="title" value={blogForm.title} onChange={onHandleChange} className="form-control" required={true} />
                </div>
                <div className="form-group mb-3">
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
                <div className="form-group mb-3">
                    <label>Blog Description</label>
                    <input type="text" name="description" value={blogForm.description} onChange={onHandleChange} className="form-control" required={true} />
                </div>
                <div className="form-group mb-3">
                    <label>Blog Post</label>
                    <CKEditor editor={ ClassicEditor } onChange={(event, editor) => {
                        blogForm.post = editor.getData();
                    }} />
                </div>
                <div className="form-group mb-3">
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
            </div>
        </div>
    </div>
  )
}

export default BlogForm