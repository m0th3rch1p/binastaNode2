import { Link } from "react-router-dom"
import ShoppingCart from "./ShoppingCart"
import logoImg from "@/assets/images/flogo.png"

function Header() {

    return (
        <div className="header">
            <div className="menu-toggle-btn">
                <a href="#">
                    <i className="bi bi-list"></i>
                </a>
            </div>
            <Link to="/dashboard" className="logo">
                <img width="100" src={logoImg} alt="logo" />
            </Link>
            <div className="page-title">Overview</div>
            <form className="search-form">
                <div className="input-group">
                    <button className="btn btn-outline-light" type="button" id="button-addon1">
                        <i className="bi bi-search"></i>
                    </button>
                    <input type="text" className="form-control" placeholder="Search..." aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    <a href="#" className="btn btn-outline-light close-header-search-bar">
                        <i className="bi bi-x"></i>
                    </a>
                </div>
            </form>
            <div className="header-bar ms-auto">
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-link-notify" data-count="2" data-sidebar-target="#notifications">
                            <i className="bi bi-bell icon-lg"></i>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <ShoppingCart />
                    </li>
                    <li className="nav-item ms-3">
                        <button className="btn btn-primary btn-icon">
                            <i className="bi bi-door-open"></i> Logout
                        </button>
                    </li>
                </ul>
            </div>
            <div className="header-mobile-buttons">
                <a href="#" className="search-bar-btn">
                    <i className="bi bi-search"></i>
                </a>
                <a href="#" className="actions-btn">
                    <i className="bi bi-three-dots"></i>
                </a>
            </div>
        </div>
    )
}

export default Header