import { Blog, useFetchBlogsQuery } from '@/store/reducers/blogsSlice'
import DataTable, { TableColumn } from 'react-data-table-component'

function Blogs() {
    const { data: blogs } = useFetchBlogsQuery();
    
    const columns: TableColumn<Blog>[] = [
        {
          name: 'Title',
          selector: (row: Blog): string => row.title as string
        },
        {
          name: 'Category Name',
          selector: (row: Blog): string => row.category_name as string,
        },
        {
          name: 'Post Image',
          selector: (row: Blog): string => row.image_path as string,
          cell: (row) => <img src={`/${row.image_path}`} alt={row.title} />
        },
        {
          name: 'Total Views',
          selector: (row: Blog): number => row.views as number
        }
      ];
  return (
    <>
        <div className="row">
        <div className="row">
        <div className="col-md-6 mb-3">
                <div className="card h-100">
                    <div className="card-body">
                        <div className="d-flex mb-4">
                            <h6 className="card-title mb-0">Most Popular Blog</h6>
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
                            <h4>How To Join Binasta</h4>
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
                            <h6 className="card-title mb-0">Best Rated Blog</h6>
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
                            <h4>Swizenta Rossmass Nutritional Values</h4>
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
        </div>
        <div className="row">
        <div className='card'>
      <div className='card-body'>
        <DataTable data={blogs as Blog[]} columns={columns} responsive />
      </div>
    </div>
        </div>
    </>
  )
}

export default Blogs