import { useEffect } from 'react';
import { Distributor, useFetchDistributorsQuery, useVerifyDistributorMutation } from '@/store/reducers/distributorsSlice'
import DataTable, { TableColumn, TableRow } from 'react-data-table-component'
import { Link } from 'react-router-dom';
import LineChart from '@/components/common/LineChart';

function Distributors() {
  const distributorsData = [
    {
        "id": "New Registrations",
        "color": "#05b171",
        "data": [
            {
                "x": "01 Apr",
                "y": 228
            },
            {
                "x": "02 Apr",
                "y": 78
            },
            {
                "x": "03 Apr",
                "y": 190
            },
            {
                "x": "04 Apr",
                "y": 62
            },
            {
                "x": "05 Apr",
                "y": 197
            },
            {
                "x": "06 Apr",
                "y": 127
            },
            {
                "x": "06 Apr",
                "y": 227
            },
            {
                "x": "06 Apr",
                "y": 327
            },
        ]
    },
]
  const {data: distributors, isLoading: isFetchDistributorLoading, isError: isFectchDistributorError} = useFetchDistributorsQuery();
  const  [ verify, { isLoading: isVerifyLoading, isSuccess: isVerifySuccess }] = useVerifyDistributorMutation();

  const onVerifyDistributor = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    verify({ id: parseInt(e.currentTarget.getAttribute("data-id") as string) });
  };

  useEffect(() => {
    if (isVerifySuccess) {
      alert("Distributor verified successfully");
    }
  }, [ isVerifySuccess ]);

  const columns: TableColumn<Distributor>[] = [
    {
      name: "First Name",
      selector: (row: TableRow) => row.first_name as string,
    },
    {
      name: "Last Name",
      selector: (row: TableRow) => row.last_name as string,
    },
    {
      name: "Email Address",
      selector: (row: TableRow) => row.email as string,
    },
    {
      name: "Phone Number",
      selector: (row: TableRow) => row.phone_number as string,
    },
    {
      name: "Store Name",
      selector: (row: TableRow) => row.store_name as string
    },
    {
      name: "Status",
      selector: (row: TableRow) => row.verified ? "Verified" : "Unverified",
    },
    {
      name: "Actions",
      selector: (row: TableRow) => row.id as number,
      cell: (row) => (
        <>
        <Link className='btn btn-info btn-sm mr-2' to={`/distributor/${row.id}`}>View</Link>
        {
          !row.verified ? <button data-id={row.id} onClick={onVerifyDistributor} className='btn btn-primary btn-sm mr-2' style={{
            marginRight: "10px"
          }}>{isVerifyLoading ? "Verifying..." : "Verify"} </button> : <></>
        }
          <button className='btn btn-danger btn-sm ml-2'>Delete</button>
        </>
      )
    }
  ];
  return (
    <>
      <div className="row g-4 mt-2 mb-4">
                <div className="col-md-8">
                    <div className="card h-100">
                        <div className="card-body" style={{
                            position: 'relative',
                            height: '100px'
                        }}>
                            <h6 className="card-title">New Distributors</h6>
                            <LineChart data={distributorsData} curveType='natural' xLabel='' yLabel='New Registrations' />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="d-flex mb-4">
                                <h6 className="card-title mb-0">Avg. Distributor Rating</h6>
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
                                <div className="display-6">3.0</div>
                                <div className="d-flex justify-content-center gap-3 my-3">
                                    <i className="bi bi-star-fill icon-lg text-warning"></i>
                                    <i className="bi bi-star-fill icon-lg text-warning"></i>
                                    <i className="bi bi-star-fill icon-lg text-warning"></i>
                                    <i className="bi bi-star-fill icon-lg text-muted"></i>
                                    <i className="bi bi-star-fill icon-lg text-muted"></i>
                                    <span>(318)</span>
                                </div>
                            </div>
                            <div className="text-muted d-flex align-items-center justify-content-center">
                                <span className="text-success me-3 d-block">
                                    <i className="bi bi-arrow-up me-1 small"></i>+35
                                </span> Point from last month
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
      <div className="card">
        <div className="card-header">
          <h6>Distributors</h6>
        </div>
        <div className="card-body">
          <DataTable data={distributors ?? []} columns={columns} />
        </div>
      </div>
    </>
  )
}

export default Distributors