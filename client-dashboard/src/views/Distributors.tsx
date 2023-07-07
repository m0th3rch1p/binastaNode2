import { useEffect } from 'react';
import { Distributor, useFetchDistributorsQuery, useVerifyDistributorMutation } from '@/store/reducers/distributorsSlice'
import DataTable, { TableColumn, TableRow } from 'react-data-table-component'
import { Link } from 'react-router-dom';

function Distributors() {
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
    <div className="card">
      <div className="card-header">
        <h6>Distributors</h6>
      </div>
      <div className="card-body">
        <DataTable data={distributors ?? []} columns={columns} />
      </div>
    </div>
  )
}

export default Distributors