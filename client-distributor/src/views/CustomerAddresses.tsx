import Table, { TableColumn } from "@/components/common/Table";
import { CustomerAddress, useFetchCustomerAddressesQuery } from "@/store/reducers/customerAddressesSlice"

function CustomerAddresses() {
    const { data: addresses, isLoading, isSuccess, isError } = useFetchCustomerAddressesQuery();
    const columns: TableColumn<CustomerAddress>[] = [
        { 
            header: "Address",
            accessor: "address",
            renderRow: (row: CustomerAddress) => row.address
        },
        { 
            header: "Contact Number",
            accessor: "phone_number",
            renderRow: (row: CustomerAddress) => row.phone_number
        },
        { 
            header: "Customer Email",
            accessor: "email",
            renderRow: (row: CustomerAddress) => row.email
        },
    ]
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="d-md-flex">
                        <div className="d-md-flex gap-4 align-items-center">
                            <form className="mb-3 mb-md-0">
                                <div className="row g-3">
                                    <div className="col-md-3">
                                        <select className="form-select">
                                            <option>Sort by</option>
                                            <option value="desc">Desc</option>
                                            <option value="asc">Asc</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <select className="form-select">
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="30">30</option>
                                            <option value="40">40</option>
                                            <option value="50">50</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search" />
                                            <button className="btn btn-outline-light" type="button">
                                                <i className="bi bi-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-primary dropdown-toggle" aria-haspopup="true" aria-expanded="false">Actions</a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">Action</a>
                                <a href="#" className="dropdown-item">Another action</a>
                                <a href="#" className="dropdown-item">Something else here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Table columns={columns} data={addresses ?? []} />
        </>
    )
}

export default CustomerAddresses