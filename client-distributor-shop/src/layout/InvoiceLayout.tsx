import { Link, Outlet } from "react-router-dom"

function InvoiceLayout() {
  return (
    <div className="invoice invoice-content invoice-1">
        <div className="back-top-home hover-up mt-30 ml-30">
            <Link className="hover-up" to="/"><i className="fi-rs-home mr-5"></i> Homepage</Link>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="invoice-inner">
                        <div className="invoice-info" id="invoice_wrapper">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InvoiceLayout