import { useFetchSingleCustomerOrderQuery, useMarkCustomerOrderMutation } from '@/store/reducers/customerOrdersSlice'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function SingleCustomerOrder() {
  const params = useParams();
  const { data: order, isLoading, isSuccess, isError } = useFetchSingleCustomerOrderQuery({ ref: params.ref as string });
  const [ markDelivered, { isLoading: isMarkDeliveredLoading, isSuccess: isMarkDeliveredSuccess } ] = useMarkCustomerOrderMutation();

  const onHandleMarkDelivered = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (order?.status === "delivered") return;
    markDelivered(order?.id as number);
  }
  return (
    <div className="row">
        {
          order ? (
            <>
              <div className="col-lg-8 col-md-12">
            <div className="card mb-4">
                <div className="card-body">
                    <div className="mb-5 d-flex align-items-center justify-content-between">
                        <span>Order No : <a href="#">#{order.ref}</a></span>
                        <span className={`badge ${order.status === "delivered" ? "bg-success" : "bg-warning"}`}>{ order.status?.toLocaleUpperCase() }</span>
                    </div>
                    <div className="row mb-5 g-2">
                        <div className={`col-md-${order.status === 'delivered' ? '4' : '3'} col-sm-6`}>
                            <p className="fw-bold">Order Created at</p>
                            { new Date(order.created_at as string).toLocaleDateString() }
                        </div>
                        <div className={`col-md-${order.status === 'delivered' ? '4' : '3'} col-sm-6`}>
                            <p className="fw-bold">Email</p>
                            { order.email }
                        </div>
                        <div className={`col-md-${order.status === 'delivered' ? '4' : '3'} col-sm-6`}>
                            <p className="fw-bold">Contact No</p>
                            { order.phone_number }
                        </div>
                        {
                          order.status !== "delivered" ? (
                            <div className={`col-md-3 col-sm-6`}>
                              <p className="fw-bold">Status</p>
                              <button className="btn btn-sm btn-warning" onClick={onHandleMarkDelivered}><span style={{
                                color: "white"
                              }} >{ isMarkDeliveredLoading ? 'Marking delivered...' : "Pending" }</span></button>
                            </div>
                          ) : (<></>)
                        }
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-body d-flex flex-column gap-3">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-0">Delivery Address</h5>
                                    </div>
                                    <div>Delivery Address: { order.address }</div>
                                    <div>Contact Information: { order.phone_number }</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card widget">
                <h5 className="card-header">Order Items</h5>
                <div className="card-body">
                    <div className="table-responsive" tabIndex={1} style={{
                      overflow: "hidden",
                      outline: "none"
                    }}>
                        <table className="table table-custom mb-0">
                            <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                              {
                                order.variations?.map((variation) => (
                                  <tr>
                                      <td>
                                          <a href="#">
                                              <img src={`/${variation.images?.[0].url}`} className="rounded" width="60" alt={variation.variation} />
                                          </a>
                                      </td>
                                      <td>{ variation.product_name } - {variation.variation}</td>
                                      <td>{ variation.quantity }</td>
                                      <td>ksh.1.190,90</td>
                                      <td>ksh.1.190,90</td>
                                  </tr>
                                ))
                              }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
            <div className="card mb-4">
                <div className="card-body">
                    <h6 className="card-title mb-4">Price</h6>
                    <div className="row justify-content-center mb-3">
                        <div className="col-4 text-end">Sub Total :</div>
                        <div className="col-4">ksh.{ order.amount }</div>
                    </div>
                    <div className="row justify-content-center mb-3">
                        <div className="col-4 text-end">Discount :</div>
                        <div className="col-4">0</div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4 text-end">
                            <strong>Total :</strong>
                        </div>
                        <div className="col-4">
                            <strong>ksh.{ order.amount }</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </>
          ) : (<></>)
        }
    </div>
  )
}

export default SingleCustomerOrder