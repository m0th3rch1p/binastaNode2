import DataTable, { TableColumn, TableRow } from 'react-data-table-component'
import { useEffect, useState } from "react";
import { Order, useFetchUserOrdersQuery } from '@/store/reducers/ordersSlice';

function Orders() {
    const columns: TableColumn<Order>[] = [
        {
          name: 'Ref',
          selector: (row: Order): string => row.ref as string
        },
        {
          name: 'Status',
          selector: (row: Order): string => row.status as string,
          cell: (row) => (<span className={`badge badge-${row.status ? "danger" : "success"}`}>{row.status}</span>)
        }, 
        {
          name: 'Delivery Address',
          selector: (row: Order): string => row.address as string,
        },
        {
          name: 'Customer',
          selector: (row: Order): string => row.email as string
        },
        {
          name: 'Amount',
          selector: (row: Order): number=> row.amount as number
        },
        {
          name: 'Ordered At',
          selector: (row: Order): string => new Date(row.created_at as string).toLocaleDateString()
        },
      ];
    const { data: orders, isLoading, isSuccess, isError } = useFetchUserOrdersQuery();

    return (
      <div className='card'>
      <div className='card-body'>
        <DataTable data={orders as Order[]} columns={columns} responsive />
      </div>
    </div>
    )
}

export default Orders