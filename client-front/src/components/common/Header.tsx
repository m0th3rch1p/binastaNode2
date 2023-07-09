import { useState } from "react";
import { Link } from 'react-router-dom';


function Header() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div className="site-header">
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8">
                            <ul className="text-center text-md-left lft">
                                <li><a href="mailto:info@binasta.co.ke"><i className="icofont icofont-ui-message"></i>info@binasta.co.ke</a></li>
                                <li><i className="icofont iconfont-ui-timer"></i>Mon-Sat 8.00- 18.00</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <ul className="text-center text-md-right rgt">
                                <li><a href="#"><i className="icofont icofont-facebook"></i></a></li>
                                <li><a href="#"><i className="icofont iconfont-twitter"></i></a></li>
                                <li><a href="#"><i className="icofont iconfont-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand logo" >
          <img src="logo/logo.png"alt="" width="140" />
        </Link>
        <div className="ml-auto main-menu">
          <ul className={isVisible ? "show" : ""}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="https://shop.binasta.co.ke">Shop</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="mobile-menu ml-auto">
          <div className="menu-click" onClick={handleToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
        </div>

    )
}

export default Header