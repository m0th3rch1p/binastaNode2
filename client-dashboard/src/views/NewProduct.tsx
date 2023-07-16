import ProductForm from '@/components/products/ProductForm'
function NewProduct() {
  return (
    <>
        <div className="row mb-3">
            <div className="card">
                <div className="card-header">
                    <h5>Add Product</h5>
                </div>
                <div className="card-body">
                    <ProductForm  />
                </div>
            </div>
        </div>
    </>

  )
}

export default NewProduct