import { Link } from "react-router-dom"
import Logo from "./Logo"


function MobileHeader() {
  return (
    <div className="mobile-header-active mobile-header-wrapper-style">
        <div className="mobile-header-wrapper-inner">
            <div className="mobile-header-top">
                <div className="mobile-header-logo">
                    <Link to="/"><Logo width={100} height={window.innerWidth <= 750 ? 50 : 100}/></Link>
                </div>
                <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                    <button className="close-style search-close">
                        <i className="icon-top"></i>
                        <i className="icon-bottom"></i>
                    </button>
                </div>
            </div>
            <div className="mobile-header-content-area">
                <div className="mobile-header-info-wrap">
                    <div className="single-mobile-header-info">
                    <a href="page-login.html"><i className="fi-rs-user"></i>Log In / Sign Up </a>
                    </div>
                    <div className="single-mobile-header-info">
                        <a href="page-login.html"><i className="fi-rs-user"></i>Log In / Sign Up </a>
                    </div>
                    <div className="single-mobile-header-info">
                        <a href="#"><i className="fi-rs-headphones"></i>(+01) - 2345 - 6789 </a>
                    </div>
                </div>
                <div className="mobile-social-icon mb-50">
                    <h6 className="mb-15">Follow Us</h6>
                    <a href="#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                    <a href="#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                    <a href="#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                    <a href="#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                    <a href="#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
                </div>
                <div className="site-copyright">Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.</div>
            </div>
        </div>
    </div>
  )
}

export default MobileHeader