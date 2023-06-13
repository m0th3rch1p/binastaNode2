import { Outlet } from "react-router-dom"

function InvoiceLayout() {
  return (
    <div className="invoice invoice-content invoice-1">
        <div className="back-top-home hover-up mt-30 ml-30">
            <a className="hover-up" href="index.html"><i className="fi-rs-home mr-5"></i> Homepage</a>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="invoice-inner">
                        <div className="invoice-info" id="invoice_wrapper">
                            <Outlet />
                        </div>
                        <div className="invoice-btn-section clearfix d-print-none">
                            <a href="javascript:window.print()" className="btn btn-lg btn-custom btn-print hover-up"> <img src="assets/imgs/theme/icons/icon-print.svg" alt="" /> Print </a>
                            <a id="invoice_download_btn" className="btn btn-lg btn-custom btn-download hover-up"> <img src="assets/imgs/theme/icons/icon-download.svg" alt="" /> Download </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InvoiceLayout