import DataTable, { TableColumn, TableRow } from 'react-data-table-component'
import { useEffect, useState } from "react";
import { DistributorOrder, useFetchDistributorOrdersQuery } from '@/store/reducers/distributorOrdersSlice';

function DistributorOrders() {
    const columns: TableColumn<DistributorOrder>[] = [
        {
          name: 'Ref',
          selector: (row: DistributorOrder): string => row.ref as string
        },
        {
          name: 'Status',
          selector: (row: DistributorOrder): string => row.status as string,
          cell: (row) => (<span className={`badge bg-${row.status ? "danger" : "success"}`}>{row.status}</span>)
        }, 
        {
          name: 'Delivery Address',
          selector: (row: DistributorOrder): string => row.address as string,
        },
        {
          name: 'Customer',
          selector: (row: DistributorOrder): string =>  `${row.first_name} ${row.last_name}`
        },
        {
          name: 'Amount',
          selector: (row: DistributorOrder): number=> row.amount as number
        },
        {
          name: 'Ordered At',
          selector: (row: DistributorOrder): string => new Date(row.created_at as string).toLocaleDateString()
        },
      ];
    const { data: orders, isLoading, isSuccess, isError } = useFetchDistributorOrdersQuery();

    return (
      <div className='card'>
      <div className='card-body'>
        <DataTable data={orders as DistributorOrder[]} columns={columns} responsive />
      </div>
    </div>
    )
}

export default DistributorOrders;