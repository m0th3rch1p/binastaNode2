import FooterImg from "../assets/footer.svg"

function Footer() {
  return (
    <footer id="footer" className="footer footer-2">
                <div className="footer__bg js-lazy" style={{
                    backgroundImage: `url(${FooterImg})`
                }}></div>
                <div className="wrapper">
                    <a href="index.html" className="logo-footer">
                        <img src="img/logo.svg" alt="Numerio" />
                    </a>
                    <div className="socials-item footer-social">
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
                    <div className="phone-item footer-phone">
                        <div className="footer-title footer-title_phone">Have a question? Call us!</div>
                        <div className="footer-phone__item">
                            <i className="icon-phone"></i><a href="tel:+15469872185">+1 546 987 21 85</a>
                        </div>
                    </div>
                    <a href="#formOrder" className="btn-2 btn_started js-fancybox">get started</a>
                </div>
                <div className="footer-bottom">
                    <div className="wrapper">
                        <div className="copyrights">© Numerio 2021, Share By <a href="https://nullphpscript.com/category/html/">HTML Template</a></div>
                        <div className="footer-menu">
                            <ul className="js-menu-footer">
                                <li>
                                    <a href="#services">Services</a>
                                </li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#steps">Steps</a>
                                </li>
                                <li>
                                    <a href="#price">Price</a>
                                </li>
                                <li>
                                    <a href="#testimonials">Testimonials</a>
                                </li>
                                <li>
                                    <a href="#blog">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
  )
}

export default Footer