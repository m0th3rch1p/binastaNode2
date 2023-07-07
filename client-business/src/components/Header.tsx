function Header() {
    return (
        <header className="header fixed" id="header">
            <div className="header-top">
                <div className="wrapper">
                    <div className="socials ">
                        <div className="footer-title">Find us here:</div>
                        <div className="socials">
                            <div className="socials__item">
                                <a href="#" target="_blank" className="socials__link">Fb</a>
                            </div>
                            <div className="socials__item">
                                <a href="#" target="_blank" className="socials__link">Ins</a>
                            </div>
                            <div className="socials__item">
                                <a href="#" target="_blank" className="socials__link">In</a>
                            </div>
                        </div>
                    </div>
                    <div className="phone-item">
                        <div className="footer-title header-title-phone">Have a question? Call us!</div>
                        <div className="footer-phone__item">
                            <i className="icon-phone"></i><a href="tel:+15469872185">+1 546 987 21 85</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="nav-logo">
                    <a href="index.html" className="logo">
                        <img src="img/logo.svg" alt="Numerio" />
                    </a>
                </div>
                <div className="header-right">
                    <div id="mainNav" className="menu-box">
                        <nav className="nav-inner">
                            <ul className="main-menu js-menu" id="mainMenu">
                                <li>
                                    <a href="#services" className="">Services</a>
                                </li>
                                <li>
                                    <a href="#about" className="current">About</a>
                                </li>
                                <li>
                                    <a href="#steps" className="">Steps</a>
                                </li>
                                <li>
                                    <a href="#price" className="">Price</a>
                                </li>
                                <li>
                                    <a href="#testimonials" className="">Testimonials</a>
                                </li>
                                <li>
                                    <a href="#blog" className="">Blog</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="socials-item">
                            <div className="footer-title">Find us here:</div>
                            <div className="socials">
                                <div className="socials__item">
                                    <a href="#" target="_blank" className="socials__link">Fb</a>
                                </div>
                                <div className="socials__item">
                                    <a href="#" target="_blank" className="socials__link">Ins</a>
                                </div>
                                <div className="socials__item">
                                    <a href="#" target="_blank" className="socials__link">In</a>
                                </div>
                            </div>
                        </div>
                        <div className="phone-item">
                            <div className="footer-title footer-title_phone">Have a question? Call us!</div>
                            <div className="footer-phone__item">
                                <i className="icon-phone"></i><a href="tel:+15469872185">+1 546 987 21 85</a>
                            </div>
                        </div>
                    </div>
                    <a href="#formOrder" className="btn-2 btn_started-header js-fancybox">get started</a>
                </div>
                <div className="bars-mob js-button-nav">
                    <div className="hamburger">
                        <span></span><span></span><span></span>
                    </div>
                    <div className="cross">
                        <span></span><span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header