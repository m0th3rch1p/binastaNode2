import { useFetchProductsQuery, Product } from "@/store/reducers/productsSlice";
import DataTable, { TableColumn, TableRow } from 'react-data-table-component'

function Products() {
    const { data: products } = useFetchProductsQuery();

  const columns: TableColumn<Product>[] = [
    {
      name: 'Name',
      selector: (row: TableRow): string => row.name as string
    },
    {
      name: 'Category',
      selector: (row: TableRow): string => row.category_name as string,
    },
    {
      name: 'Product Image',
      selector: (row: Product): string => row.images?.[0].url as string,
      cell: (row) => <img src={row.images?.[0].url} alt={row.name} />
    },
    {
      name: 'Total Views',
      selector: (row: TableRow): number => row.views as number
    }
  ];

    return (
      <>
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
        </div>
            <div className="row">
            <div className='card'>

      <div className='card-body'>
        <DataTable data={products ?? []} columns={columns} responsive />
      </div>
    </div>
            </div>
      </>
  )
}

export default Products;