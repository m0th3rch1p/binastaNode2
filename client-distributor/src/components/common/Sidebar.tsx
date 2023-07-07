import { Link, useLocation } from "react-router-dom"

import logoImg from "@/assets/images/flogo.png" 
import avatarImg from "@/assets/images/avatar.png";
function Sidebar() {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    const onHandleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const menuElement = document.getElementsByClassName("menu")[0];
        if (menuElement.classList.contains("open")) {
            menuElement.classList.remove("open");
        } else menuElement.classList.add("open");
    };
    return (
        <div className='menu' data-v-7588be3f=''>
            <div className='menu-header' data-v-7588be3f=''>
                <Link className='menu-header-logo' to='/' data-v-7588be3f=''>
                    <img
                        src={logoImg}
                        alt='Binasta Limited'
                        data-v-7588be3f=''
                    />
                </Link>
                <a
                    href='#'
                    onClick={onHandleMenuClick}
                    className='btn btn-sm menu-close-btn'
                    data-v-7588be3f=''
                >
                    <i className='bi bi-x' data-v-7588be3f=''></i>
                </a>
            </div>
            <div
                className='menu-body'
                tabIndex={2}
                data-v-7588be3f=''
                style={{
                    overflow: 'scroll',
                    outline: 'none',
                }}
            >
                <div className="dropdown">
            <a href="#" className="d-flex align-items-center" data-bs-toggle="dropdown">
                <div className="avatar me-3">
                    <img src={avatarImg} className="rounded-circle" alt="image" />
                </div>
                <div>
                    <div className="fw-bold">Distributor 1</div>
                    <small className="text-muted">Total Binapoints: 1000</small>
                </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
                <a href="#" className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-person dropdown-item-icon"></i> Profile
                </a>
                <a href="#" className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-envelope dropdown-item-icon"></i> Inbox
                </a>
                <a href="#" className="dropdown-item d-flex align-items-center" data-sidebar-target="#settings">
                    <i className="bi bi-gear dropdown-item-icon"></i> Settings
                </a>
                <a href="login.html" className="dropdown-item d-flex align-items-center text-danger" target="_blank">
                    <i className="bi bi-box-arrow-right dropdown-item-icon"></i> Logout
                </a>
            </div>
        </div>
                <ul data-v-7588be3f=''>
                    <li className='menu-divider' data-v-7588be3f=''>
                        My Dashboard
                    </li>
                    <li data-v-7588be3f=''>
                        <Link className={splitLocation[1] === "dashboard" ? "active" : ""} to='/dashboard' data-v-7588be3f=''>
                            <span className='nav-link-icon' data-v-7588be3f=''>
                                <i className='bi bi-house' data-v-7588be3f=''></i>
                            </span>
                            <span data-v-7588be3f=''>Dashboard</span>
                        </Link>
                    </li>
                    <li data-v-7588be3f=''>
                        <Link className={splitLocation[1] === "addresses" ? "active" : ""} to='/addresses' data-v-7588be3f=''>
                            <span className='nav-link-icon' data-v-7588be3f=''>
                                <i className='bi bi-geo' data-v-7588be3f=''></i>
                            </span>
                            <span data-v-7588be3f=''>My Addresses</span>
                        </Link>
                    </li>
                    <li data-v-7588be3f=''>
                        <Link className={splitLocation[1] === "shop" ? "active" : ""} to='/shop' data-v-7588be3f=''>
                            <span className='nav-link-icon' data-v-7588be3f=''>
                                <i className='bi bi-cart' data-v-7588be3f=''></i>
                            </span>
                            <span data-v-7588be3f=''>Add Products</span>
                        </Link>
                    </li>
                    <li className='menu-divider' data-v-7588be3f=''>
                        My Shop
                    </li>
                    <li data-v-7588be3f=''>
                        <Link className={splitLocation[1] === "shop_products" ? "active" : ""} to='/shop_products' data-v-7588be3f=''>
                            <span className='nav-link-icon' data-v-7588be3f=''>
                                <i className='bi bi-shop-window' data-v-7588be3f=''></i>
                            </span>
                            <span data-v-7588be3f=''>Shop Products</span>
                        </Link>
                    </li>
                    <li data-v-7588be3f=''>
                        <Link className={splitLocation[1] === "customers" ? "active" : ""} to='/customers' data-v-7588be3f=''>
                            <span className='nav-link-icon' data-v-7588be3f=''>
                                <i className='bi bi-people' data-v-7588be3f=''></i>
                            </span>
                            <span data-v-7588be3f=''>Customers</span>
                        </Link>
                    </li>
                    <li data-v-7588be3f=''>
                        <Link className={splitLocation[1] === "customer_addresses" ? "active" : ""} to='/customer_addresses' data-v-7588be3f=''>
                            <span className='nav-link-icon' data-v-7588be3f=''>
                                <i className='bi bi-geo-alt' data-v-7588be3f=''></i>
                            </span>
                            <span data-v-7588be3f=''>Customer Addresses</span>
                        </Link>
                    </li>
                    <li data-v-7588be3f=''>
                        <Link className={splitLocation[1] === "customer_orders" ? "active" : ""} to='/customer_orders' data-v-7588be3f=''>
                            <span className='nav-link-icon' data-v-7588be3f=''>
                                <i className='bi bi-boxes' data-v-7588be3f=''></i>
                            </span>
                            <span data-v-7588be3f=''>Customer Orders</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div
                id='ascrail2001'
                className='nicescroll-rails nicescroll-rails-vr'
                data-v-7588be3f=''
                style={{
                    width: '8px',
                    zIndex: 998,
                    cursor: 'default',
                    position: 'absolute',
                    top: '98px',
                    left: '342px',
                    height: '346px',
                    opacity: '0',
                    display: 'block',
                }}
            >
                <div
                    className='nicescroll-cursors'
                    data-v-7588be3f=''
                    style={{
                        position: 'relative',
                        top: '0px',
                        float: 'right',
                        width: '6px',
                        height: '397px',
                        backgroundColor: 'rgb(66, 66, 66)',
                        border: '1px solid rgb(255, 255, 255)',
                        backgroundClip: 'padding-box',
                        borderRadius: '5px',
                    }}
                ></div>
            </div>
            <div
                id='ascrail2001-hr'
                className='nicescroll-rails nicescroll-rails-hr'
                data-v-7588be3f=''
                style={{
                    height: '8px',
                    zIndex: 998,
                    top: '446px',
                    left: '0px',
                    position: 'absolute',
                    cursor: 'default',
                    display: 'none',
                    width: '342px',
                    opacity: 0,
                }}
            >
                <div
                    className='nicescroll-cursors'
                    data-v-7588be3f=''
                    style={{
                        position: 'absolute',
                        top: '0px',
                        height: '6px',
                        width: '350px',
                        backgroundColor: 'rgb(66, 66, 66)',
                        border: '1px solid rgb(255, 255, 255)',
                        backgroundClip: 'padding-box',
                        borderRadius: '5px',
                        left: '0px',
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Sidebar