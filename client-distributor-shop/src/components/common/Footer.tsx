import { Link } from "react-router-dom"
import Logo from "./Logo"

import icon1 from "@/assets/images/icon-1.svg"
import icon2 from "@/assets/images/image-2.svg"
import icon3 from "@/assets/images/icon-3.svg"
import icon4 from "@/assets/images/icon-4.svg"
import icon5 from "@/assets/images/icon-5.svg"

function Footer() {
    return (
        <footer className="main">
            <section className="newsletter mb-15 wow animate__animated animate__fadeIn">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="position-relative newsletter-inner">
                                <div className="newsletter-content">
                                    <h2 className="mb-20">
                                        Stay home & get your daily <br />
                                        needs from our shop
                                    </h2>
                                    <p className="mb-45">Start You'r Daily Shopping with <span className="text-brand">Nest Mart</span></p>
                                    <form className="form-subcriber d-flex">
                                        <input type="email" placeholder="Your emaill address" />
                                        <button className="btn" type="submit">Subscribe</button>
                                    </form>
                                </div>
                                <img src="assets/imgs/banner/banner-9.png" alt="newsletter" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                            <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay="0">
                                <div className="banner-icon">
                                    <img src={ icon1 } alt="" />
                                </div>
                                <div className="banner-text">
                                    <h3 className="icon-box-title">Best prices & offers</h3>
                                    <p>Orders $50 or more</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                            <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                <div className="banner-icon">
                                    <img src={ icon2 } alt="" />
                                </div>
                                <div className="banner-text">
                                    <h3 className="icon-box-title">Free delivery</h3>
                                    <p>24/7 amazing services</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                            <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                <div className="banner-icon">
                                    <img src={ icon3 } alt="" />
                                </div>
                                <div className="banner-text">
                                    <h3 className="icon-box-title">Great daily deal</h3>
                                    <p>When you sign up</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                            <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                <div className="banner-icon">
                                    <img src={ icon4 } alt="" />
                                </div>
                                <div className="banner-text">
                                    <h3 className="icon-box-title">Wide assortment</h3>
                                    <p>Mega Discounts</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                            <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                                <div className="banner-icon">
                                    <img src={ icon5 } alt="" />
                                </div>
                                <div className="banner-text">
                                    <h3 className="icon-box-title">Easy returns</h3>
                                    <p>Within 30 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding footer-mid">
                <div className="container pt-15 pb-20">
                    <div className="row">
                        <div className="col">
                            <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp" data-wow-delay="0">
                                <div className="logo mb-30">
                                    <Link to="/"><Logo width={200}/></Link>
                                    <p className="font-lg text-heading">Binasta Limited</p>
                                </div>
                                <ul className="contact-infor">
                                    <li><img src="/build/assets/icon-location.b704b8d6.svg" alt="" /><strong>Address: </strong> <span>5171 Utawala Nairobi</span></li>
                                    <li><img src="/build/assets/icon-contact.6ee72afe.svg" alt="" /><strong>Call Us:</strong><span>(+254) 70124553</span></li>
                                    <li><img src="/build/assets/icon-email-2.edcd43e2.svg" alt="" /><strong>Email:</strong><span><a className="__cf_email__">support@binasta.co.ke</a></span></li>
                                    <li><img src="/build/assets/icon-clock.20eaf49f.svg" alt="" /><strong>Hours:</strong><span>08:00 - 18:00, Mon - Sat</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <h4 className="widget-title">Quick Links</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0"><li><a className="" href="/products">Shop</a></li><li><a href="https://binasta.co.ke/terms">Terms &amp; Conditions</a></li><li><a href="/contact">Contact Us</a></li></ul>
                        </div>
                        <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                            <h4 className="widget-title">Careers</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0"><li><a href="https://distributor.binasta.co.ke/register">Binasta Distributor</a></li><li><a href="#">Delivery Services (Coming Soon)</a></li></ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container pb-30 wow animate__ animate__fadeInUp animated" data-wow-delay="0"><div className="row align-items-center"><div className="col-12 mb-30"><div className="footer-bottom"></div></div><div className="col-xl-4 col-lg-6 col-md-6"><p className="font-sm mb-0">© 2023, <strong className="text-brand">Binasta Limited</strong><br />All rights reserved</p></div><div className="col-xl-4 col-lg-6 text-center d-none d-xl-block"><div className="hotline d-lg-inline-flex mr-30"><img src="/build/assets/phone-call.a2c233cd.svg" alt="hotline" /><p>(254)19006666<span>Working 8:00 - 22:00</span></p></div><div className="hotline d-lg-inline-flex"><img src="/build/assets/phone-call.a2c233cd.svg" alt="hotline" /><p>(254)19006666<span>24/7 Support Center</span></p></div></div><div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block"><div className="mobile-social-icon"><h6>Follow Us</h6><a href="#"><img src="/build/assets/icon-facebook-white.2addc392.svg" alt="" /></a><a href="#"><img src="/build/assets/icon-twitter-white.ebc64f55.svg" alt="" /></a><a href="#"><img src="/build/assets/icon-instagram-white.0ccef559.svg" alt="" /></a><a href="#"><img src="/build/assets/icon-pinterest-white.e8cb3bc4.svg" alt="" /></a><a href="#"><img src="/build/assets/icon-youtube-white.a3fc4278.svg" alt="" /></a></div></div></div></div>
        </footer>
    )
}

export default Footer