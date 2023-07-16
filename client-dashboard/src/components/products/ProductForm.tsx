import { ProductCategory, useFetchProductCategoriesQuery } from "@/store/reducers/productCategoriesSlice";
import { useStoreProductMutation } from "@/store/reducers/productsSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function ProductForm() {
  const navigate = useNavigate();
  const [ storeProduct, { isLoading, isSuccess } ] = useStoreProductMutation();
  const { data: categories } = useFetchProductCategoriesQuery();

  const [ productForm, setProductForm ] = useState<{ name: string, category_id: number | null, description: string, categories: ProductCategory[], files: Blob[] | null }>({
      name: '',
      category_id: 0,
      description: '',
      categories: [],
      files: null
  });

  useEffect(() => {
    if (categories) {
      setProductForm((state) => ({
        ...state,
        categories
      }))
    } else if (isSuccess) {
      setProductForm((state) => ({
        name: '',
        category_id: null,
        description: '',
        categories: [],
        files: [] as Blob[]
      }));
    }
  }, [categories, isSuccess])

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProductForm((state) => ({
        ...state,
        [e.target.name]: e.target.value 
    }));
};

const onHandleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const files: Blob[] = [];
      for (let index = 0; index < e.target.files.length; index++) {
        files.push(e.target.files[index]);
      }  

      setProductForm((state) => ({ ...state, files: files }));
    }
};

  const onStoreProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(productForm);
    if (!productForm.name || !productForm.category_id || !productForm.description || !productForm.files || !(productForm.files.length || productForm.files.length < 2)) return;
    
    const formData = new FormData();
    formData.append("name", productForm.name);
    formData.append("category_id", `${productForm.category_id}`);
    formData.append("description", productForm.description);
    productForm.files.forEach((file) => formData.append("img[]", file));

    storeProduct(formData);
  }

  return (
    <form>
      <div className="row">
          <div className="col">
              <div className="form-group mb-3">
                  <label>Product Name</label>
                  <input type="text" name="name" value={productForm.name} onChange={onHandleChange} className="form-control" required={true} />
              </div>
              <div className="form-group mb-3">
                  <label>Product Category</label>
                  <select className="form-control" value={productForm.category_id as number} onChange={onHandleChange} name="category_id" required>
                    <option value="" selected>Select Product Category</option>
                    {
                      productForm.categories.map(category => (
                        <option value={category.id}>{ category.name }</option>
                      ))
                    }
                  </select>
              </div>
              <div className="form-group mb-3">
                  <label>Product Description</label>
                  <input type="text" name="description" value={productForm.description} onChange={onHandleChange} className="form-control" required={true} />
              </div>
              <div className="form-group mb-3">
                  <label>Product Images</label>
                  <input type="file" onChange={onHandleFileChange} className="form-control" multiple required  />
              </div>
          </div>
      </div>
      <div className="form-group mt-4">
          <button id="submitBtn" onClick={onStoreProduct} className="btn btn-primary" disabled={isLoading}>
              { isLoading ? 'Saving...' : 'Save' } 
          </button>
      </div>
  </form>
  )
}

export default ProductForm;