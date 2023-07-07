import { useFetchOrdersQuery } from "@/store/reducers/ordersSlice"

function Orders() {
    const { data: orders } = useFetchOrdersQuery();
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="mb-0">Your Orders</h3>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders ? orders.map(order => (
                                    <tr>
                                        <td>#{order.ref}</td>
                                        <td>{ new Date(order.created_at as string).toLocaleDateString() }</td>
                                        <td>{ order.status }</td>
                                        <td>ksh.{ order.amount }</td>
                                        <td><a href="#0" className="btn-small d-block">View</a></td>
                                    </tr>
                                )) : (<></>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orders