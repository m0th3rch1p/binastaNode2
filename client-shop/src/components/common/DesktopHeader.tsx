import { Link } from "react-router-dom"
import Logo from "./Logo"
import ShoppingCart from "../header/ShoppingCart"

import UserIcon from "@/assets/images/icon-user.svg"

function DesktopHeader() {
  return (
    <header className="header-area header-style-1 header-height-2">
        <div className="mobile-promotion">
            <span>Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left</span>
        </div>
        
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
            <div className="container">
                <div className="header-wrap">
                    <div className="logo logo-width-1">
                    <Link to="/"><Logo /></Link>
                    </div>
                    <div className="header-right">
                        <div className="search-style-2">
                            <form action="#">
                                <input type="text" placeholder="Search for items..." />
                            </form>
                        </div>
                        <div className="header-action-right">
                            <div className="header-action-2">
                                <ShoppingCart />
                                <div className="header-action-icon-2">
                                    <a href="page-account.html">
                                        <img className="svgInject" alt="Binasta Limited" src={ UserIcon } />
                                    </a>
                                    <a href="page-account.html"><span className="lable ml-0">Account</span></a>
                                    <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                        <ul>
                                            <li>
                                                <a href="#"><i className="fi fi-rs-user mr-10"></i>Login</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fi fi-rs-location-alt mr-10"></i>Register</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-bottom header-bottom-bg-color sticky-bar">
            <div className="container">
                <div className="header-wrap header-space-between position-relative">
                    <div className="logo logo-width-1 d-block d-lg-none">
                        <Link to="/"><Logo /></Link>
                    </div>
                    <div className="header-nav d-none d-lg-flex">
                        <div className="main-categori-wrap d-none d-lg-block">
                          
                        </div>
                       
                    </div>
                    <div className="header-action-icon-2 d-block d-lg-none">
                        <div className="burger-icon burger-icon-white">
                            <span className="burger-icon-top"></span>
                            <span className="burger-icon-mid"></span>
                            <span className="burger-icon-bottom"></span>
                        </div>
                    </div>
                    <div className="header-action-right d-block d-lg-none">
                        <div className="header-action-2">
                            <div className="header-action-icon-2">
                                <a href="shop-wishlist.html">
                                    <img alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                                    <span className="pro-count white">4</span>
                                </a>
                            </div>
                            <ShoppingCart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default DesktopHeader