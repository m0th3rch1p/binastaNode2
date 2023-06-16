import { useEffect, useState } from "react";
import { useStoreBlogCategoryMutation } from "@/store/reducers/blogCategoriesSlice";

function BlogCategoryForm({ show }: { show: boolean }) {
    const [ storeCategory, { isLoading, isSuccess } ] = useStoreBlogCategoryMutation();
    
    const [ categoryForm, setCategoryForm ] = useState({
        name: ''
    });

    useEffect(() => {
        if (isSuccess) {
            setCategoryForm((state) => ({ ...state, name: '' }))         
        }
    }, [isSuccess]);

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryForm((state) => ({
            ...state,
            [e.target.name]: e.target.value 
        }));
    };

    const onStoreCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!categoryForm.name) return;
        storeCategory({name: categoryForm.name});
    };

    return (
        <form style={{
            display: show ? 'block' : 'none'
        }}>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label>Category Name</label>
                        <input type="text" name="name" value={categoryForm.name} onChange={onHandleChange} className="form-control" required={true} />
                    </div>
                </div>
            </div>
            <div className="form-group mt-4">
                <button id="submitBtn" onClick={onStoreCategory} type="submit" className="btn btn-primary" disabled={isLoading}>
                    { isLoading ? 'Saving...' : 'Save' } 
                </button>
            </div>
        </form>
    );
}

export default BlogCategoryForm;
