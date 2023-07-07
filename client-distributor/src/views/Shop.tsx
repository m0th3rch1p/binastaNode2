import CategoriesComponent from "@/components/shop/CategoriesComponent";
import ProductComponent from "@/components/shop/ProductComponent";
import { useFetchProductCategoriesQuery } from "@/store/reducers/productCategorySlice";
import { useFetchProductsQuery } from "@/store/reducers/productsSlice"

function Shop() {
    const { data: products, isLoading: isFetchProductsLoading, isError: isFetchProductsError } = useFetchProductsQuery();
    const { data: categories, isLoading: isFetchProductCategoriesLoading, isError: isFetchProductCategoriesError } = useFetchProductCategoriesQuery();
  return (
    <div className="row">
        <div className="col-md-12">
            <div className="card mb-4">
                <div className="card-body">
                    <div className="d-md-flex gap-4 align-items-center">
                        <div className="d-none d-md-flex">All Products</div>
                    </div>
                </div>
            </div>
            <div className="row g-4">
                <ProductComponent products={ products ? products : [] } />
            </div>
            <nav className="mt-5" aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                        </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        {/* <div className="col-md-4">
            <h5 className="mb-4">Filter Products</h5>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="#keywordsCollapseExample" role="button">
                        <div>Keywords</div>
                        <div className="bi bi-chevron-down"></div>
                    </div>
                    <div className="collapse show mt-4" id="keywordsCollapseExample">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Phone, Headphone, Shoe ..." />
                            <button className="btn btn-outline-light" type="button">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="#categoriesCollapseExample" role="button">
                        <div>Categories</div>
                        <div className="bi bi-chevron-down"></div>
                    </div>
                    <div className="collapse show mt-4" id="categoriesCollapseExample">
                        <CategoriesComponent categories={categories ? categories : []} />
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Shop