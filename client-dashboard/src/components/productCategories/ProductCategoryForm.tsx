import { useState, useEffect } from "react";
import { useStoreProductCategoryMutation } from "@/store/reducers/productCategoriesSlice";

function ProductCategoryForm({ show } : { show: boolean }) {
    const [ storeCategory, { isLoading, isSuccess } ] = useStoreProductCategoryMutation();

    const [ categoryForm, setCategoryForm ] = useState<{name: string, file: Blob | undefined}>({
        name: '',
        file: undefined
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

    const onHandleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            setCategoryForm((state) => ({ ...state, file: e.target.files?.[0] }))
        }
    };

    const onStoreCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!categoryForm.name) return;
        const form = new FormData();
        form.append("name", categoryForm.name);
        form.append("img", categoryForm.file as Blob);
        storeCategory(form);
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
                <div className="form-group">
                    <label>Category Image</label>
                    <input type="file" onChange={onHandleFileChange} className="form-control" required  />
                </div>
            </div>
        </div>
        <div className="form-group mt-4">
            <button id="submitBtn" onClick={onStoreCategory} type="submit" className="btn btn-primary" disabled={isLoading}>
                { isLoading ? 'Saving...' : 'Save' } 
            </button>
        </div>
    </form>
  )
}

export default ProductCategoryForm