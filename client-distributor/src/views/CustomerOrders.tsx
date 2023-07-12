import Table, { TableColumn } from '@/components/common/Table';
import { CustomerOrder, useFetchCustomerOrdersQuery } from '@/store/reducers/customerOrdersSlice'
import React from 'react'

function CustomerOrders() {
    const { data: orders, isLoading, isError, isSuccess } = useFetchCustomerOrdersQuery();
    const columns: TableColumn<CustomerOrder>[] = [
        {
            header: "Order #",
            accessor: "ref",
            renderRow: (row: CustomerOrder) => row.ref
        },
        {
            header: "Status",
            accessor: "status",
            renderRow: (row: CustomerOrder) => row.status
        },
        {
            header: "Amount",
            accessor: "amount",
            renderRow: (row: CustomerOrder) => (row.amount as number)
        },
        {
            header: "Order Date",
            accessor: "created_at",
            renderRow: (row: CustomerOrder) => new Date(row.created_at as string).toLocaleDateString()
        },
    ];
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
        <Table columns={columns} data={orders ?? []} />
    </>
  )
}

export default CustomerOrders