import { Link, useLocation, useParams } from "react-router-dom"
import Logo from "@/components/common/Logo"
import mpesaImg from "@/assets/images/mpesa.jpg";

import { useFetchSingleOrderQuery } from "@/store/reducers/ordersSlice"
import Loader from "@/components/common/Loader";
function Invoice() {
    const params = useParams();
    const { data, isLoading, isSuccess } = useFetchSingleOrderQuery(parseInt(params.orderId as string));
    return (
        !isLoading && data?.order ? <>
            <div className="invoice-header">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="invoice-name">
                            <div className="logo">
                                <Link to="/"><Logo width={200}/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="invoice-numb">
                            <h6 className="text-end mb-10 mt-20">Date: { new Date(data?.order?.created_at as string).toLocaleDateString() }</h6>
                            <h6 className="text-end invoice-header-1">Invoice No: #{ data?.order?.ref }</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="invoice-top">
                <div className="row">
                    <div className="col-lg-9 col-md-6">
                        <div className="invoice-number">
                            <h4 className="invoice-title-1 mb-10">Invoice From</h4>
                            <p className="invoice-addr-1">
                                <strong>Binasta Ltd</strong> <br />
                                info@binsasta.co.ke <br />
                                5171 Utawala Nairobi <br />Kenya
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="invoice-number">
                            <h4 className="invoice-title-1 mb-10">Bill To</h4>
                            <p className="invoice-addr-1">
                                <strong>NestMart Inc</strong> <br />
                                billing@NestMart.com <br />
                                205 North Michigan Avenue, <br />Suite 810 Chicago, 60601, USA
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="invoice-title-1 mb-10">Payment Method</h4>
                        <p><img src={mpesaImg} alt="" /></p>
                    </div>
                </div>
            </div>
            <div className="invoice-center">
                <div className="table-responsive">
                    <table className="table table-striped invoice-table">
                        <thead className="bg-active">
                            <tr>
                                <th>Product Name</th>
                                <th className="text-center">Unit Price</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.product_variations.map(pv => (
                                    <tr>
                                        <td>
                                            <div className="item-desc-1">
                                                <span>{ pv.product_name }</span>
                                            </div>
                                        </td>
                                        <td className="text-center">ksh.{ pv.buy_price }</td>
                                        <td className="text-center">{pv.quantity[0].quantity}</td>
                                        <td className="text-right">ksh.{ pv.buy_price as number * parseFloat(pv.quantity[0].quantity) }</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="invoice-bottom">
                <div className="row">
                    <div className="col-sm-6">
                        <div>
                            <h3 className="invoice-title-1">Important Note</h3>
                            <ul className="important-notes-list-1">
                                <li>All amounts shown on this invoice are in US dollars</li>
                                <li>finance charge of 1.5% will be made on unpaid balances after 30 days.</li>
                                <li>Once order done, money can't refund</li>
                                <li>Delivery might delay due to some external dependency</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </> : <Loader />
    )
}

export default Invoice