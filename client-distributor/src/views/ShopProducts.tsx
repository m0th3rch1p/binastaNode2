import { ShopProduct, useFetchShopProductsQuery } from "@/store/reducers/ShopProductSlice"
import Table, { TableColumn } from "@/components/common/Table";

function ShopProducts() {
    const { data: products, isLoading, isError } = useFetchShopProductsQuery();
    const columns: TableColumn<ShopProduct>[] = [
        {
            header: "Name",
            accessor: "product_name",
            renderRow: (row: ShopProduct) => row.product_name
        },
        {
            header: "Photo",
            accessor: "product_image",
            renderRow: (row: ShopProduct) => <img src={`/${row.product_image}`} width="40" alt={row.product_name} />
        },
        {
            header: "Variation",
            accessor: "variation",
            renderRow: (row: ShopProduct) => row.variation
        },
        {
            header: "Recommended Price",
            accessor: "recomended_price",
            renderRow: (row: ShopProduct) => row.recomended_price
        },
        {
            header: "Selling Price",
            accessor: "selling_price",
            renderRow: (row: ShopProduct) => row.selling_price
        }
    ]
    return (
        <div className="row">
            <div className="col-md-6 mb-3">
                <div className="card h-100">
                    <div className="card-body">
                        <div className="d-flex mb-4">
                            <h6 className="card-title mb-0">Most Popular Product</h6>
                            <div className="dropdown ms-auto">
                                <a href="#" data-bs-toggle="dropdown" className="btn btn-sm" aria-haspopup="true" aria-expanded="false">
                                    <i className="bi bi-three-dots"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="#" className="dropdown-item">View Detail</a>
                                    <a href="#" className="dropdown-item">Download</a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h4>Swizenta LC7</h4>
                        </div>
                        <div className="text-muted d-flex align-items-center justify-content-center">
                            <span className="text-success me-3 d-block">
                                <i className="bi bi-arrow-up me-1 small"></i>+32000
                            </span> Sales
                        </div>
                        <div className="row my-4">

                        </div>
                        <div className="text-center">
                            <button className="btn btn-outline-primary btn-icon">
                                <i className="bi bi-download"></i> Download Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="card h-100">
                    <div className="card-body">
                        <div className="d-flex mb-4">
                            <h6 className="card-title mb-0">Stock Running Low</h6>
                            <div className="dropdown ms-auto">
                                <a href="#" data-bs-toggle="dropdown" className="btn btn-sm" aria-haspopup="true" aria-expanded="false">
                                    <i className="bi bi-three-dots"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="#" className="dropdown-item">View Detail</a>
                                    <a href="#" className="dropdown-item">Download</a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h4>Swizenta Rossmass</h4>
                        </div>
                        <div className="text-muted d-flex align-items-center justify-content-center">
                            <span className="text-danger me-3 d-block">
                                <i className="bi bi-arrow-down me-1 small"></i>100
                            </span> Remaining
                        </div>
                        <div className="row my-4">

                        </div>
                        <div className="text-center">
                            <button className="btn btn-outline-primary btn-icon">
                                <i className="bi bi-download"></i> Download Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <Table data={products ?? []} columns={columns} />
                <nav className="mt-4" aria-label="Page navigation example">
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
        </div>
    )
}

export default ShopProducts