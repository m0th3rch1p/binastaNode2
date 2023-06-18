import { Link } from "react-router-dom"

function AccountMenu() {
  return (
    <div className="dashboard-menu">
        <ul className="nav flex-column" role="tablist">
            <li className="nav-item">
                <Link className="nav-link active" id="orders-tab" data-bs-toggle="tab" to="/account/orders" role="tab" aria-controls="orders" aria-selected="true"><i className="fi-rs-shopping-bag mr-10"></i>Orders</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" id="address-tab" data-bs-toggle="tab" to="/account/addresses" role="tab" aria-controls="address" aria-selected="true"><i className="fi-rs-marker mr-10"></i>My Address</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="page-login.html"><i className="fi-rs-sign-out mr-10"></i>Logout</a>
            </li>
        </ul>
    </div>
  )
}

export default AccountMenu