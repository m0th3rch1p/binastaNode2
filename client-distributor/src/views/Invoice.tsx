import LogoImg from "@/assets/images/flogo.png";
import { useFetchSingleOrderQuery } from "@/store/reducers/ordersSlice";
import { useParams } from "react-router-dom";

function Invoice() {
    const params = useParams();
    const { data: order, isLoading: isFectchSingleOrderLoading, isError: isFetchSingleOrderError } = useFetchSingleOrderQuery(parseInt(params.id as string));

  return (
    <div className="card">
        <div className="card-body">
            <div className="invoice">
                <div className="d-md-flex justify-content-between align-items-center mb-4">
                    <div>Invoice No : #{ order?.ref }</div>
                    <div>Date: 3/29/2021</div>
                </div>
                <div className="d-md-flex justify-content-between align-items-center">
                    <h4>Invoice</h4>
                    <div>
                        <img width="120" src={ LogoImg } alt="logo" />
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            <strong>Bill From</strong>
                        </p>
                        <p>81 Fulton Park, <br />Brazil/Pedro Leopoldo</p>
                    </div>
                    <div className="col-md-6">
                        <p className="text-start text-md-end">
                            <strong>Bill to</strong>
                        </p>
                        <p>81 Fulton Park, <br />Brazil/Pedro Leopoldo</p>
                    </div>
                </div>
                <div className="table-responsive" tabIndex={1} style={{
                    overflow: "hidden",
                    outline: "none",
                }}>
                    <table className="table mb-4 mt-4">
                        <thead className="thead-light">
                        <tr>
                            <th>#</th>
                            <th>Description</th>
                            {/* <th className="text-end">Quantity</th> */}
                            <th className="text-end">Price</th>
                            <th className="text-end">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            order?.variations?.map(variation => (
                                <tr className="text-end">
                                    <td className="text-start">1</td>
                                    <td className="text-start">{ variation.variation }</td>
                                    {/* <td>{ order.amount as number / variation.buy_price }</td> */}
                                    <td>ksh.{ variation.buy_price }</td>
                                    <td>ksh.{ variation.buy_price }</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                <div className="text-end">
                    <h4 className="fw-bold">Total: ksh.{ order?.amount }</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invoice;